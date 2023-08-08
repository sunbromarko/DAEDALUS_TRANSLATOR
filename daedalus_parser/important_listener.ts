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

export class ImportantListener implements DaedalusListener {
  constructor() {}

  // Пока мы внутри определения экземпляра, полагаем что все присвоения переменных - это присвоения полей этого экземпляра
  currentInstance?: string;
  // Список определенных переменных, если тут нет переменной, то она определена в глобальной области видимости
  definedVariables: string[] = [];

  result = "";

  dialogsInstances = new Map<string, any>();
  dialogsFunctions = new Map<string, any>();

  enterFunctionDef(ctx: FunctionDefContext): void {
    const dialog = { lines: [] };
    const funcName = ctx.nameNode().text;

    if (!funcName.includes("_Condition")) return;

    dialog["name"] = funcName;

    const statementBlock = ctx.statementBlock().text;
    // dialog.lines = this.parseStatementBlock(statementBlock);

    // for (const block of statementBlocks) {
    //   const statement = block.statement();

    // }

    this.dialogsFunctions.set(funcName, {
      name: funcName,
      text: statementBlock,
    });
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

    this.dialogsInstances.set(nameNode, {name:nameNode, properties });
    return;
  }
}
