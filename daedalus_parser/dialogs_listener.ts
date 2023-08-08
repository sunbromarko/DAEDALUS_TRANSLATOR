import _ from "lodash";
import { mkdir, writeFileSync } from "fs";
import { dirname } from "path";
import { DaedalusListener } from "./grammar/DaedalusListener";
import {
  ClassDefContext,
  ConstDefContext,
  DaedalusFileContext,
  ElseBlockContext,
  ElseIfBlockContext,
  ExternFunctionDeclContext,
  FunctionDefContext,
  IfBlockContext,
  IfBlockStatementContext,
  InstanceDefContext,
  PrototypeDefContext,
  StatementBlockContext,
  StatementContext,
} from "./grammar/DaedalusParser";

function writeFile(path: string, contents: string, errorCallback = (err: any) => {}) {
  mkdir(dirname(path), { recursive: true }, function (err) {
    if (err) return errorCallback(err);

    writeFileSync(path, contents);
  });
}

export class DialogsListener implements DaedalusListener {
  constructor(outputFile: string) {
    this.outputFile = outputFile;
  }
  outputFile: string;
  // Пока мы внутри определения экземпляра, полагаем что все присвоения переменных - это присвоения полей этого экземпляра
  currentInstance?: string;
  // Список определенных переменных, если тут нет переменной, то она определена в глобальной области видимости
  definedVariables: string[] = [];

  result = "";

  dialogsInstances = new Map<string, any>();
  dialogsFunctions = [];

  printLine(line: string) {
    this.result += line + "\n";
  }

  printObjectNested(obj: any, name) {
    this.printLine(`${name}: {`);
    const keys = Object.keys(obj);
    for (const key of keys) {
      const value = obj[key];
      if (typeof value === "object") {
        this.printObjectNested(value, key);
      } else {
        this.printLine(`${key}:${value},`);
      }
    }
    this.printLine(`},`);
  }

  parseStatementBlock(ctx: StatementBlockContext): string[] {
    let result = [];

    for (const block of ctx.children) {
      if (block instanceof StatementContext) {
        const functionCall = block.functionCall();
        if (functionCall) {
          result.push(`<< ${functionCall.text} >>`);
          // this.printLine(functionCall.text);
        }

        const assigment = block.assignment();
        if (assigment) {
          const paramName = assigment.reference().text;
          const paramValue = assigment.expression().text;
          result.push(`<< set $${paramName}=${paramValue} >>`);
        }
      }
      if (block instanceof IfBlockStatementContext) {
        for (const ifBlock of block.children) {
          if (ifBlock instanceof IfBlockContext) {
            const expression = ifBlock.expression().text;
            result.push(`$<< if ${expression}>>`);
            const content = ifBlock.statementBlock();
            result.push(...this.parseStatementBlock(content));
          }

          if (ifBlock instanceof ElseIfBlockContext) {
            const expression = ifBlock.expression().text;
            result.push(`$<< elseif ${expression}>>`);
            const content = ifBlock.statementBlock();
            result.push(...this.parseStatementBlock(content));
          }

          if (ifBlock instanceof ElseBlockContext) {
            result.push("<< else >>");
            const content = ifBlock.statementBlock();
            result.push(...this.parseStatementBlock(content));
          }
        }

        result.push("<< endif >>");
      }
    }
    return result;
  }

  enterDaedalusFile(ctx: DaedalusFileContext): void {
    //TODO: Добавить все импорты
    return;
  }
  exitDaedalusFile(ctx: DaedalusFileContext): void {
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

    let NPC_NAME = "";
    // Generete rootNode
    const rootNodes = dialogNodes.map(([name, { properties }]) => {
      const { permanent, condition, information, description, npc } = properties;
      if (!NPC_NAME) NPC_NAME = npc;
      // <<if ${condition}()>>
      return `
-> ${description} <<if ${condition}() ${permanent === "1" ? ">>" : `&& !visited("${information}") >>`}
  <<jump ${information}>>`;
    });

    this.result += `
title: ${NPC_NAME}
---
${rootNodes.join("")}
===
`;

    for (const dialog of this.dialogsFunctions) {
      this.result += `

title: ${dialog.name}
tracking: always
---
${dialog.lines.join("\n")}

-> Вернуться назад
    <<jump ${NPC_NAME}>>
===

`;
    }

    writeFile(this.outputFile, this.result);
    return;
  }
  enterFunctionDef(ctx: FunctionDefContext): void {
    const dialog = { lines: [] };
    const funcName = ctx.nameNode().text;

    if (funcName.includes("_Condition")) return;

    dialog["name"] = funcName;

    const statementBlock = ctx.statementBlock();
    dialog.lines = this.parseStatementBlock(statementBlock);

    // for (const block of statementBlocks) {
    //   const statement = block.statement();

    // }

    this.dialogsFunctions.push(dialog);
    return;
  }

  enterInstanceDef(ctx: InstanceDefContext): void {
    //parse Vars
    const properties: any = {};
    //

    const nameNode = ctx.nameNode().text;
    const parentRef = ctx.parentReference().text;
    const blockDef = ctx.statementBlock();
    // this.printLine(`export const ${nameNode}:${parentRef} = {`);
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

    this.dialogsInstances.set(nameNode, { properties });
    return;
  }
}
