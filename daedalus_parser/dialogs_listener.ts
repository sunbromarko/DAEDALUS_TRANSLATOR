import _ from "lodash";
import { mkdir, writeFileSync } from "fs";
import { dirname } from "path";
import { DaedalusListener } from "./grammar/DaedalusListener";
import {
  DaedalusFileContext,
  ElseBlockContext,
  ElseIfBlockContext,
  ExpressionContext,
  FunctionCallContext,
  FunctionDefContext,
  IfBlockContext,
  IfBlockStatementContext,
  InstanceDefContext,
  ReferenceValueContext,
  StatementBlockContext,
  StatementContext,
  ValueExpressionContext,
} from "./grammar/DaedalusParser";
import { dictionary } from "./dialogs-dict";

function writeFile(path: string, contents: string, errorCallback = (err: any) => {}) {
  mkdir(dirname(path), { recursive: true }, function (err) {
    if (err) return errorCallback(err);

    writeFileSync(path, contents);
  });
}

const unrecognizedFunctions = new Set<string>();

export class DialogsListener implements DaedalusListener {
  constructor(outputFile: string) {
    this.outputFile = outputFile;
  }

  NPC_NAME: string;

  outputFile: string;
  // Пока мы внутри определения экземпляра, полагаем что все присвоения переменных - это присвоения полей этого экземпляра
  currentInstance?: string;
  // Список определенных переменных, если тут нет переменной, то она определена в глобальной области видимости
  definedVariables: string[] = [];

  conditionFunctions = new Map<string, FunctionDefContext>();

  dialogsInstances = new Map<string, any>();

  dialogsFunctions = [];

  parseStatementBlock(ctx: StatementBlockContext): string[] {
    let result = [];

    for (const block of ctx.children) {
      if (block instanceof StatementContext) {
        const functionCall = block.functionCall();
        if (functionCall) {
          const [success, line] = this.ParseLineFromFunctionCallContext(functionCall);
          success && result.push(line);
          !success && unrecognizedFunctions.add(line);
          // this.printLine(functionCall.text);
        }

        const assigment = block.assignment();
        if (assigment) {
          const paramName = assigment.reference().text;
          const res = this.ParseExpressionContext(assigment.expression());
          result.push(`<<set $${paramName}=${res}>>`);
        }
      }
      if (block instanceof IfBlockStatementContext) {
        for (const ifBlock of block.children) {
          if (ifBlock instanceof IfBlockContext) {
            const expression = ifBlock.expression().text;
            result.push(`<<if true>>`);
            const content = ifBlock.statementBlock();
            result.push(...this.parseStatementBlock(content));
          }

          if (ifBlock instanceof ElseIfBlockContext) {
            const expression = ifBlock.expression().text;
            result.push(`<<elseif false>>`);
            const content = ifBlock.statementBlock();
            result.push(...this.parseStatementBlock(content));
          }

          if (ifBlock instanceof ElseBlockContext) {
            result.push("<<else>>");
            const content = ifBlock.statementBlock();
            result.push(...this.parseStatementBlock(content));
          }
        }

        result.push("<<endif>>");
      }
    }
    return result;
  }

  enterDaedalusFile(ctx: DaedalusFileContext): void {
    return;
  }
  exitDaedalusFile(ctx: DaedalusFileContext): void {
    this.GenerateYarn();
    this.GenerateCSharp();
    this.GenerateLog();
    return;
  }

  private GenerateYarn() {
    let yarnResult = "";
    const dialogNodes = [...this.dialogsInstances.entries()].sort((a, b) => {
      const nr1 = Number(a[1].properties.nr);
      const nr2 = Number(b[1].properties.nr);

      if (!nr1 || !nr2) return 0;

      if (nr1 > nr2) {
        return 1;
      }
      if (nr1 < nr2) {
        return -1;
      }
      // a должно быть равным b
      return 0;
    });
    let NPC_NAME: string;
    // Generete rootNode
    const rootNodes = dialogNodes.map(([name, { properties }], i, arr) => {
      const { permanent, condition, information, description, npc } = properties;
      const isLast = i === arr.length - 1;
      this.NPC_NAME = npc;
      if (!NPC_NAME) NPC_NAME = npc;
      // <<if ${condition}()>>
      return `-> ${description} <<if ${condition}() ${permanent === "1" ? ">>" : `&& !visited("${information}") >>`} #line:${name.toUpperCase()}
  <<jump ${information}>>${!isLast ? "\n" : ""}`;
    });

    yarnResult += `
title: ${NPC_NAME}
---
${rootNodes.join("")}
===
`;

    for (const dialog of this.dialogsFunctions) {
      yarnResult += `
title: ${dialog.name}
tracking: always
---
${dialog.lines.join("\n")}

<<jump ${NPC_NAME}>>
===

`;
    }

    writeFile(this.outputFile, yarnResult);
  }

  private GenerateCSharp() {
    const Conditions = [...this.conditionFunctions.values()];
    const conditionFunctionsStrings = [];

    for (const condition of Conditions) {
      const funcName = condition.nameNode().text;
      conditionFunctionsStrings.push(
        `
    /// ${condition.text}
    [YarnFunction("${funcName}")]
    public static bool ${funcName}(){
      return true;
    }
`
      );
    }

    let SharpResult = `using UnityEngine;
using Yarn.Unity;

public class ${this.NPC_NAME}_ConditionsHandler : MonoBehaviour
{
    ${conditionFunctionsStrings.join("\n")}
}
`;

    const sharpFileName = this.outputFile.replace(".yarn", ".cs");

    writeFile(sharpFileName, SharpResult);
  }

  private GenerateLog() {
    // console.log(unrecognizedFunctions.values());

    writeFileSync(
      "./unrecognizedFunctions.txt",
      `
    ${[...unrecognizedFunctions.values()].map((e) => `${e}\n`)}
    `
    );
  }

  enterFunctionDef(ctx: FunctionDefContext): void {
    const dialog = { lines: [] };
    const funcName = ctx.nameNode().text;

    if (funcName.includes("_Condition")) {
      // Write condition for generete C# code
      this.conditionFunctions.set(funcName, ctx);
      return;
    }

    dialog["name"] = funcName;

    const statementBlock = ctx.statementBlock();
    dialog.lines = this.parseStatementBlock(statementBlock);

    this.dialogsFunctions.push(dialog);
    return;
  }

  enterInstanceDef(ctx: InstanceDefContext): void {
    const properties: any = {};

    const nameNode = ctx.nameNode().text;
    const blockDef = ctx.statementBlock();

    const statements = blockDef.statement();
    for (const statement of statements) {
      // Обработка присвоений переменных внутри блока
      const assignment = statement.assignment();
      if (assignment) {
        const referenceAtom = assignment.reference().referenceAtom();
        const PathParts = referenceAtom.map((a) => {
          const arrayIndex = a.arrayIndex();
          const name = a.nameNode().text;
          if (arrayIndex) {
            return `${name}.${arrayIndex.text}`;
          }
          return name;
        });

        _.set(properties, PathParts.join("."), `${assignment.expression().text}`);
      }
    }

    if (!this.NPC_NAME) {
      this.NPC_NAME = (properties.npc.split("_") as string[]).pop();
    }

    this.dialogsInstances.set(nameNode, { properties });
    return;
  }

  ParseLineFromFunctionCallContext(functionCall: FunctionCallContext): [recognized: boolean, result: string] {
    const functionName = functionCall.nameNode().text;
    const functionArgs = functionCall.expression().map((e) => e.text);

    switch (functionName) {
      case "AI_Output": {
        const whoSpeak = ["hero", "other"].includes(functionArgs[0]) ? "Nameless" : this.NPC_NAME;
        const dialogKey = functionArgs[2].replaceAll('"', "");
        const dialogText = dictionary.get(dialogKey) ?? "TEXT_UNDEFINED";
        return [true, `${whoSpeak}: ${dialogText} #line:${dialogKey.toUpperCase()}`];
      }
      case "Info_AddChoice": {
        const [, text, jumpNode] = functionArgs;
        return [
          true,
          `-> ${text} line:${jumpNode}
    <<jump ${jumpNode}>>`,
        ];
      }
      case "AI_StopProcessInfos": {
        return [true, `<<stop>>`];
      }
      case "B_LogEntry": {
        let [key, value] = functionArgs;
        return [true, `<<log_topic_add_line QuestLog ${key} ${value}>>`];
      }
      // func void Log_CreateTopic( VAR STRING name, VAR INT section )
      case "Log_CreateTopic": {
        const [key, value] = functionArgs;
        return [true, `<<log_create_topic QuestLog ${key} ${value}>>`];
      }
      default: {
        return [false, functionName];
      }
    }
  }

  ParseExpressionContext(context: ExpressionContext) {
    if (context instanceof ValueExpressionContext) {
      const valueContext = context.value();
      if (valueContext instanceof ReferenceValueContext) {
        const { text } = valueContext;
        let isFakeBoolean = ["FALSE", "TRUE"].includes(text);
        if (isFakeBoolean) {
          return text === "FALSE" ? "false" : "true";
        }
        return `$${text}`;
      }
    }
  }
}
