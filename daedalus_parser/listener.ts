import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParserRuleContext } from "antlr4ts";
import { mkdir, writeFileSync } from "fs";
import { dirname } from "path";
import { DaedalusListener } from "./grammar/DaedalusListener";
import {
  AddOperatorContext,
  ArrayIndexContext,
  ArraySizeContext,
  AssignmentContext,
  AssignmentOperatorContext,
  BinAndOperatorContext,
  BinOrOperatorContext,
  BitMoveOperatorContext,
  BlockDefContext,
  BreakStatementContext,
  ClassDefContext,
  CompOperatorContext,
  ConstArrayAssignmentContext,
  ConstArrayDefContext,
  ConstDefContext,
  ConstValueAssignmentContext,
  ConstValueDefContext,
  ContinueStatementContext,
  DaedalusFileContext,
  DataTypeContext,
  ElseBlockContext,
  ElseIfBlockContext,
  EqOperatorContext,
  ExpressionContext,
  ExternFunctionDeclContext,
  FunctionCallContext,
  FunctionDefContext,
  IfBlockContext,
  IfBlockStatementContext,
  InlineDefContext,
  InstanceDeclContext,
  InstanceDefContext,
  LogAndOperatorContext,
  LogOrOperatorContext,
  MultOperatorContext,
  NameNodeContext,
  ParameterDeclContext,
  ParameterListContext,
  ParentReferenceContext,
  PrototypeDefContext,
  ReferenceAtomContext,
  ReferenceContext,
  ReturnStatementContext,
  StatementBlockContext,
  StatementContext,
  UnaryOperatorContext,
  ValueContext,
  VarArrayAssignmentContext,
  VarArrayDeclContext,
  VarDeclContext,
  VarValueAssignmentContext,
  VarValueDeclContext,
  WhileStatementContext,
} from "./grammar/DaedalusParser";

function writeFile(path: string, contents: string, errorCallback = (err: any) => {}) {
  mkdir(dirname(path), { recursive: true }, function (err) {
    if (err) return errorCallback(err);

    writeFileSync(path, contents);
  });
}

export class ToTSListener implements DaedalusListener {
  constructor(outputFile: string) {
    this.outputFile = outputFile;
  }
  outputFile: string;
  // Пока мы внутри определения экземпляра, полагаем что все присвоения переменных - это присвоения полей этого экземпляра
  currentInstance?: string;
  // Список определенных переменных, если тут нет переменной, то она определена в глобальной области видимости
  definedVariables: string[] = [];

  result = "";

  enterDaedalusFile(ctx: DaedalusFileContext): void {
    this.result += "// Начало файла\n";
    //TODO: Добавить все импорты

    return;
  }
  exitDaedalusFile(ctx: DaedalusFileContext): void {
    this.result += "// Конец файла\n";
    writeFile(this.outputFile, this.result);
    return;
  }

  enterExternFunctionDecl(ctx: ExternFunctionDeclContext): void {
    return;
  }
  exitExternFunctionDecl(ctx: ExternFunctionDeclContext): void {
    return;
  }
  enterFunctionDef(ctx: FunctionDefContext): void {
    this.result += "// Определение функции функции\n";

    const children = ctx.children;
    if (children) {
      const nameNode = children[2];
      const parameterList = children[3];
      if (nameNode) {
        const name = nameNode.text;
        // TODO - parse parameter list
        const params = parameterList.text;
        this.result += `export function ${name}${params}:void {\n`;
      }
    }
    return;
  }
  exitFunctionDef(ctx: FunctionDefContext): void {
    this.result += "}\n";
    return;
  }
  enterConstDef(ctx: ConstDefContext): void {
    return;
  }
  exitConstDef(ctx: ConstDefContext): void {
    return;
  }
  enterClassDef(ctx: ClassDefContext): void {
    return;
  }
  exitClassDef(ctx: ClassDefContext): void {
    return;
  }
  enterPrototypeDef(ctx: PrototypeDefContext): void {
    return;
  }
  exitPrototypeDef(ctx: PrototypeDefContext): void {
    return;
  }
  enterInstanceDef(ctx: InstanceDefContext): void {
    this.result += "// Создание экземпляра класса\n";
    const children = ctx.children;
    if (children) {
      const nameNode = children[1];
      const parantRef = children[3];
      if (nameNode) {
        const name = nameNode.text;
        const refName = parantRef.text;
        this.currentInstance = name;
        this.result += `export const ${name} = new ${refName}()\n`;
      }
    }
    return;
  }

  exitInstanceDef(ctx: InstanceDefContext): void {
    this.currentInstance = undefined;
    return;
  }

  exitFunctionCall(ctx: FunctionCallContext): void {
    const functionName = ctx.getChild(0).text;
    const expressions = ctx.expression().map((e) => e.text);
    const params = expressions.join(",");
    if (this.currentInstance) {
      this.result += `${this.currentInstance}.${functionName}(${params});\n`;
    } else {
      this.result += `${functionName}(${params});\n`;
    }
    return;
  }

  // Присваивание переменных
  exitAssignment(ctx: AssignmentContext): void {
    const referenceAtom = ctx.reference().referenceAtom();
    const PathParts = referenceAtom.map((a) => {
      const arrayIndex = a.arrayIndex();
      const name = a.nameNode().text;
      if (arrayIndex) {
        return `${name}["${arrayIndex.text}"]`;
      }
      return name;
    });
    const parametrValue = ctx.getChild(2).text;
    this.result += `${this.currentInstance}.${PathParts.join(".")}=${parametrValue};\n`;
    return;
  }
}
