import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParserRuleContext } from "antlr4ts";
import { writeFileSync } from "fs";
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

export class ToTSListener implements DaedalusListener {
  constructor(outputFile: string) {
    this.outputFile = outputFile;
  }
  outputFile: string;
  currentEntity?: string;
  result = "";

  enterDaedalusFile(ctx: DaedalusFileContext): void {
    this.result += "// Начало файла\n";
    return;
  }
  exitDaedalusFile(ctx: DaedalusFileContext): void {
    this.result += "// Конец файла\n";
    writeFileSync(this.outputFile, this.result);
    return;
  }
  enterBlockDef(ctx: BlockDefContext): void {
    return;
  }

  exitBlockDef(ctx: BlockDefContext): void {
    return;
  }
  enterInlineDef(ctx: InlineDefContext): void {
    return;
  }
  exitInlineDef(ctx: InlineDefContext): void {
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
        this.currentEntity = name;
        this.result += `export const ${name} = new ${refName}()\n`;
      }
    }
    return;
  }
  exitInstanceDef(ctx: InstanceDefContext): void {
    this.currentEntity = undefined;
    return;
  }
  enterInstanceDecl(ctx: InstanceDeclContext): void {
    return;
  }
  exitInstanceDecl(ctx: InstanceDeclContext): void {
    return;
  }
  enterVarDecl(ctx: VarDeclContext): void {
    return;
  }
  exitVarDecl(ctx: VarDeclContext): void {
    return;
  }
  enterConstArrayDef(ctx: ConstArrayDefContext): void {
    return;
  }
  exitConstArrayDef(ctx: ConstArrayDefContext): void {
    return;
  }
  enterConstArrayAssignment(ctx: ConstArrayAssignmentContext): void {
    return;
  }
  exitConstArrayAssignment(ctx: ConstArrayAssignmentContext): void {
    return;
  }
  enterConstValueDef(ctx: ConstValueDefContext): void {
    return;
  }
  exitConstValueDef(ctx: ConstValueDefContext): void {
    return;
  }
  enterConstValueAssignment(ctx: ConstValueAssignmentContext): void {
    return;
  }
  exitConstValueAssignment(ctx: ConstValueAssignmentContext): void {
    return;
  }
  enterVarArrayDecl(ctx: VarArrayDeclContext): void {
    return;
  }
  exitVarArrayDecl(ctx: VarArrayDeclContext): void {
    return;
  }
  enterVarArrayAssignment(ctx: VarArrayAssignmentContext): void {
    return;
  }
  exitVarArrayAssignment(ctx: VarArrayAssignmentContext): void {
    return;
  }
  enterVarValueDecl(ctx: VarValueDeclContext): void {
    return;
  }
  exitVarValueDecl(ctx: VarValueDeclContext): void {
    return;
  }
  enterVarValueAssignment(ctx: VarValueAssignmentContext): void {
    return;
  }
  exitVarValueAssignment(ctx: VarValueAssignmentContext): void {
    return;
  }
  enterParameterList(ctx: ParameterListContext): void {
    return;
  }
  exitParameterList(ctx: ParameterListContext): void {
    return;
  }
  enterParameterDecl(ctx: ParameterDeclContext): void {
    return;
  }
  exitParameterDecl(ctx: ParameterDeclContext): void {
    return;
  }
  enterStatementBlock(ctx: StatementBlockContext): void {
    return;
  }
  exitStatementBlock(ctx: StatementBlockContext): void {
    return;
  }
  enterStatement(ctx: StatementContext): void {
    return;
  }
  exitStatement(ctx: StatementContext): void {
    return;
  }
  enterFunctionCall(ctx: FunctionCallContext): void {
    return;
  }
  exitFunctionCall(ctx: FunctionCallContext): void {
    const functionName = ctx.getChild(0).text;
    const expressions = ctx.expression().map((e) => e.text);
    const params = expressions.join(",");
    if (this.currentEntity) {
      this.result += `${this.currentEntity}.${functionName}(${params});\n`;
    } else {
      this.result += `${functionName}(${params});\n`;
    }
    return;
  }
  enterAssignment(ctx: AssignmentContext): void {
    return;
  }
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
    this.result += `${this.currentEntity}.${PathParts.join(".")}=${parametrValue};\n`;
    return;
  }
  enterElseBlock(ctx: ElseBlockContext): void {
    return;
  }
  exitElseBlock(ctx: ElseBlockContext): void {
    return;
  }
  enterElseIfBlock(ctx: ElseIfBlockContext): void {
    return;
  }
  exitElseIfBlock(ctx: ElseIfBlockContext): void {
    return;
  }
  enterIfBlock(ctx: IfBlockContext): void {
    return;
  }
  exitIfBlock(ctx: IfBlockContext): void {
    return;
  }
  enterIfBlockStatement(ctx: IfBlockStatementContext): void {
    return;
  }
  exitIfBlockStatement(ctx: IfBlockStatementContext): void {
    return;
  }
  enterReturnStatement(ctx: ReturnStatementContext): void {
    return;
  }
  exitReturnStatement(ctx: ReturnStatementContext): void {
    return;
  }
  enterWhileStatement(ctx: WhileStatementContext): void {
    return;
  }
  exitWhileStatement(ctx: WhileStatementContext): void {
    return;
  }
  enterBreakStatement(ctx: BreakStatementContext): void {
    return;
  }
  exitBreakStatement(ctx: BreakStatementContext): void {
    return;
  }
  enterContinueStatement(ctx: ContinueStatementContext): void {
    return;
  }
  exitContinueStatement(ctx: ContinueStatementContext): void {
    return;
  }
  enterExpression(ctx: ExpressionContext): void {
    return;
  }
  exitExpression(ctx: ExpressionContext): void {
    return;
  }
  enterArrayIndex(ctx: ArrayIndexContext): void {
    return;
  }
  exitArrayIndex(ctx: ArrayIndexContext): void {
    return;
  }
  enterArraySize(ctx: ArraySizeContext): void {
    return;
  }
  exitArraySize(ctx: ArraySizeContext): void {
    return;
  }
  enterValue(ctx: ValueContext): void {
    return;
  }
  exitValue(ctx: ValueContext): void {
    return;
  }
  enterReferenceAtom(ctx: ReferenceAtomContext): void {
    return;
  }
  exitReferenceAtom(ctx: ReferenceAtomContext): void {
    return;
  }
  enterReference(ctx: ReferenceContext): void {
    return;
  }
  exitReference(ctx: ReferenceContext): void {
    return;
  }
  enterDataType(ctx: DataTypeContext): void {
    return;
  }
  exitDataType(ctx: DataTypeContext): void {
    return;
  }
  enterNameNode(ctx: NameNodeContext): void {
    return;
  }
  exitNameNode(ctx: NameNodeContext): void {
    return;
  }
  enterParentReference(ctx: ParentReferenceContext): void {
    return;
  }
  exitParentReference(ctx: ParentReferenceContext): void {
    return;
  }
  enterAssignmentOperator(ctx: AssignmentOperatorContext): void {
    return;
  }
  exitAssignmentOperator(ctx: AssignmentOperatorContext): void {
    return;
  }
  enterAddOperator(ctx: AddOperatorContext): void {
    return;
  }
  exitAddOperator(ctx: AddOperatorContext): void {
    return;
  }
  enterBitMoveOperator(ctx: BitMoveOperatorContext): void {
    return;
  }
  exitBitMoveOperator(ctx: BitMoveOperatorContext): void {
    return;
  }
  enterCompOperator(ctx: CompOperatorContext): void {
    return;
  }
  exitCompOperator(ctx: CompOperatorContext): void {
    return;
  }
  enterEqOperator(ctx: EqOperatorContext): void {
    return;
  }
  exitEqOperator(ctx: EqOperatorContext): void {
    return;
  }
  enterUnaryOperator(ctx: UnaryOperatorContext): void {
    return;
  }
  exitUnaryOperator(ctx: UnaryOperatorContext): void {
    return;
  }
  enterMultOperator(ctx: MultOperatorContext): void {
    return;
  }
  exitMultOperator(ctx: MultOperatorContext): void {
    return;
  }
  enterBinAndOperator(ctx: BinAndOperatorContext): void {
    return;
  }
  exitBinAndOperator(ctx: BinAndOperatorContext): void {
    return;
  }
  enterBinOrOperator(ctx: BinOrOperatorContext): void {
    return;
  }
  exitBinOrOperator(ctx: BinOrOperatorContext): void {
    return;
  }
  enterLogAndOperator(ctx: LogAndOperatorContext): void {
    return;
  }
  exitLogAndOperator(ctx: LogAndOperatorContext): void {
    return;
  }
  enterLogOrOperator(ctx: LogOrOperatorContext): void {
    return;
  }
  exitLogOrOperator(ctx: LogOrOperatorContext): void {
    return;
  }
  visitTerminal(node: TerminalNode): void {
    return;
  }
  visitErrorNode(node: ErrorNode): void {
    return;
  }
  enterEveryRule(node: ParserRuleContext): void {
    return;
  }
  exitEveryRule(node: ParserRuleContext): void {
    return;
  }
}
