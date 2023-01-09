import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import {
  IntegerLiteralValueContext,
  FloatLiteralValueContext,
  StringLiteralValueContext,
  NullLiteralValueContext,
  NoFuncLiteralValueContext,
  FunctionCallValueContext,
  ReferenceValueContext,
  BracketExpressionContext,
  UnaryExpressionContext,
  MultExpressionContext,
  AddExpressionContext,
  BitMoveExpressionContext,
  CompExpressionContext,
  EqExpressionContext,
  BinAndExpressionContext,
  BinOrExpressionContext,
  LogAndExpressionContext,
  LogOrExpressionContext,
  ValueExpressionContext,
  DaedalusFileContext,
  BlockDefContext,
  InlineDefContext,
  ExternFunctionDeclContext,
  FunctionDefContext,
  ConstDefContext,
  ClassDefContext,
  PrototypeDefContext,
  InstanceDefContext,
  InstanceDeclContext,
  VarDeclContext,
  ConstArrayDefContext,
  ConstArrayAssignmentContext,
  ConstValueDefContext,
  ConstValueAssignmentContext,
  VarArrayDeclContext,
  VarArrayAssignmentContext,
  VarValueDeclContext,
  VarValueAssignmentContext,
  ParameterListContext,
  ParameterDeclContext,
  StatementBlockContext,
  StatementContext,
  FunctionCallContext,
  AssignmentContext,
  ElseBlockContext,
  ElseIfBlockContext,
  IfBlockContext,
  IfBlockStatementContext,
  ReturnStatementContext,
  WhileStatementContext,
  BreakStatementContext,
  ContinueStatementContext,
  ExpressionContext,
  ArrayIndexContext,
  ArraySizeContext,
  ValueContext,
  ReferenceAtomContext,
  ReferenceContext,
  DataTypeContext,
  NameNodeContext,
  ParentReferenceContext,
  AssignmentOperatorContext,
  AddOperatorContext,
  BitMoveOperatorContext,
  CompOperatorContext,
  EqOperatorContext,
  UnaryOperatorContext,
  MultOperatorContext,
  BinAndOperatorContext,
  BinOrOperatorContext,
  LogAndOperatorContext,
  LogOrOperatorContext,
} from "./grammar/daedalus/DaedalusParser";
import { DaedalusVisitor } from "./grammar/daedalus/DaedalusVisitor";

class ToTSVisitor implements DaedalusVisitor<String> {
  visitIntegerLiteralValue?:
    | ((ctx: IntegerLiteralValueContext) => String)
    | undefined;
  visitFloatLiteralValue?:
    | ((ctx: FloatLiteralValueContext) => String)
    | undefined;
  visitStringLiteralValue?:
    | ((ctx: StringLiteralValueContext) => String)
    | undefined;
  visitNullLiteralValue?:
    | ((ctx: NullLiteralValueContext) => String)
    | undefined;
  visitNoFuncLiteralValue?:
    | ((ctx: NoFuncLiteralValueContext) => String)
    | undefined;
  visitFunctionCallValue?:
    | ((ctx: FunctionCallValueContext) => String)
    | undefined;
  visitReferenceValue?: ((ctx: ReferenceValueContext) => String) | undefined;
  visitBracketExpression?:
    | ((ctx: BracketExpressionContext) => String)
    | undefined;
  visitUnaryExpression?: ((ctx: UnaryExpressionContext) => String) | undefined;
  visitMultExpression?: ((ctx: MultExpressionContext) => String) | undefined;
  visitAddExpression?: ((ctx: AddExpressionContext) => String) | undefined;
  visitBitMoveExpression?:
    | ((ctx: BitMoveExpressionContext) => String)
    | undefined;
  visitCompExpression?: ((ctx: CompExpressionContext) => String) | undefined;
  visitEqExpression?: ((ctx: EqExpressionContext) => String) | undefined;
  visitBinAndExpression?:
    | ((ctx: BinAndExpressionContext) => String)
    | undefined;
  visitBinOrExpression?: ((ctx: BinOrExpressionContext) => String) | undefined;
  visitLogAndExpression?:
    | ((ctx: LogAndExpressionContext) => String)
    | undefined;
  visitLogOrExpression?: ((ctx: LogOrExpressionContext) => String) | undefined;
  visitValueExpression?: ((ctx: ValueExpressionContext) => String) | undefined;
  visitDaedalusFile?: ((ctx: DaedalusFileContext) => String) | undefined;
  visitBlockDef?: ((ctx: BlockDefContext) => String) | undefined;
  visitInlineDef?: ((ctx: InlineDefContext) => String) | undefined;
  visitExternFunctionDecl?:
    | ((ctx: ExternFunctionDeclContext) => String)
    | undefined;
  visitFunctionDef?: ((ctx: FunctionDefContext) => String) | undefined;
  visitConstDef?: ((ctx: ConstDefContext) => String) | undefined;
  visitClassDef?: ((ctx: ClassDefContext) => String) | undefined;
  visitPrototypeDef?: ((ctx: PrototypeDefContext) => String) | undefined;
  visitInstanceDef?: ((ctx: InstanceDefContext) => String) | undefined;
  visitInstanceDecl?: ((ctx: InstanceDeclContext) => String) | undefined;
  visitVarDecl?: ((ctx: VarDeclContext) => String) | undefined;
  visitConstArrayDef?: ((ctx: ConstArrayDefContext) => String) | undefined;
  visitConstArrayAssignment?:
    | ((ctx: ConstArrayAssignmentContext) => String)
    | undefined;
  visitConstValueDef?: ((ctx: ConstValueDefContext) => String) | undefined;
  visitConstValueAssignment?:
    | ((ctx: ConstValueAssignmentContext) => String)
    | undefined;
  visitVarArrayDecl?: ((ctx: VarArrayDeclContext) => String) | undefined;
  visitVarArrayAssignment?:
    | ((ctx: VarArrayAssignmentContext) => String)
    | undefined;
  visitVarValueDecl?: ((ctx: VarValueDeclContext) => String) | undefined;
  visitVarValueAssignment?:
    | ((ctx: VarValueAssignmentContext) => String)
    | undefined;
  visitParameterList?: ((ctx: ParameterListContext) => String) | undefined;
  visitParameterDecl?: ((ctx: ParameterDeclContext) => String) | undefined;
  visitStatementBlock?: ((ctx: StatementBlockContext) => String) | undefined;
  visitStatement?: ((ctx: StatementContext) => String) | undefined;
  visitFunctionCall?: ((ctx: FunctionCallContext) => String) | undefined;
  visitAssignment?: ((ctx: AssignmentContext) => String) | undefined;
  visitElseBlock?: ((ctx: ElseBlockContext) => String) | undefined;
  visitElseIfBlock?: ((ctx: ElseIfBlockContext) => String) | undefined;
  visitIfBlock?: ((ctx: IfBlockContext) => String) | undefined;
  visitIfBlockStatement?:
    | ((ctx: IfBlockStatementContext) => String)
    | undefined;
  visitReturnStatement?: ((ctx: ReturnStatementContext) => String) | undefined;
  visitWhileStatement?: ((ctx: WhileStatementContext) => String) | undefined;
  visitBreakStatement?: ((ctx: BreakStatementContext) => String) | undefined;
  visitContinueStatement?:
    | ((ctx: ContinueStatementContext) => String)
    | undefined;
  visitExpression?: ((ctx: ExpressionContext) => String) | undefined;
  visitArrayIndex?: ((ctx: ArrayIndexContext) => String) | undefined;
  visitArraySize?: ((ctx: ArraySizeContext) => String) | undefined;
  visitValue?: ((ctx: ValueContext) => String) | undefined;
  visitReferenceAtom?: ((ctx: ReferenceAtomContext) => String) | undefined;
  visitReference?: ((ctx: ReferenceContext) => String) | undefined;
  visitDataType?: ((ctx: DataTypeContext) => String) | undefined;
  visitNameNode?: ((ctx: NameNodeContext) => String) | undefined;
  visitParentReference?: ((ctx: ParentReferenceContext) => String) | undefined;
  visitAssignmentOperator?:
    | ((ctx: AssignmentOperatorContext) => String)
    | undefined;
  visitAddOperator?: ((ctx: AddOperatorContext) => String) | undefined;
  visitBitMoveOperator?: ((ctx: BitMoveOperatorContext) => String) | undefined;
  visitCompOperator?: ((ctx: CompOperatorContext) => String) | undefined;
  visitEqOperator?: ((ctx: EqOperatorContext) => String) | undefined;
  visitUnaryOperator?: ((ctx: UnaryOperatorContext) => String) | undefined;
  visitMultOperator?: ((ctx: MultOperatorContext) => String) | undefined;
  visitBinAndOperator?: ((ctx: BinAndOperatorContext) => String) | undefined;
  visitBinOrOperator?: ((ctx: BinOrOperatorContext) => String) | undefined;
  visitLogAndOperator?: ((ctx: LogAndOperatorContext) => String) | undefined;
  visitLogOrOperator?: ((ctx: LogOrOperatorContext) => String) | undefined;
  visit(tree: ParseTree): String {
    throw new Error("Method not implemented.");
  }
  visitChildren(node: RuleNode): String {
    node.payload;
    throw new Error("Method not implemented.");
  }
  visitTerminal(node: TerminalNode): String {
    throw new Error("Method not implemented.");
  }
  visitErrorNode(node: ErrorNode): String {
    throw new Error("Method not implemented.");
  }
}
