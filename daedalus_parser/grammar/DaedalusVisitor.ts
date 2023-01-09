// Generated from ./daedalus_parser/grammar/Daedalus.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { IntegerLiteralValueContext } from "./DaedalusParser";
import { FloatLiteralValueContext } from "./DaedalusParser";
import { StringLiteralValueContext } from "./DaedalusParser";
import { NullLiteralValueContext } from "./DaedalusParser";
import { NoFuncLiteralValueContext } from "./DaedalusParser";
import { FunctionCallValueContext } from "./DaedalusParser";
import { ReferenceValueContext } from "./DaedalusParser";
import { BracketExpressionContext } from "./DaedalusParser";
import { UnaryExpressionContext } from "./DaedalusParser";
import { MultExpressionContext } from "./DaedalusParser";
import { AddExpressionContext } from "./DaedalusParser";
import { BitMoveExpressionContext } from "./DaedalusParser";
import { CompExpressionContext } from "./DaedalusParser";
import { EqExpressionContext } from "./DaedalusParser";
import { BinAndExpressionContext } from "./DaedalusParser";
import { BinOrExpressionContext } from "./DaedalusParser";
import { LogAndExpressionContext } from "./DaedalusParser";
import { LogOrExpressionContext } from "./DaedalusParser";
import { ValueExpressionContext } from "./DaedalusParser";
import { DaedalusFileContext } from "./DaedalusParser";
import { BlockDefContext } from "./DaedalusParser";
import { InlineDefContext } from "./DaedalusParser";
import { ExternFunctionDeclContext } from "./DaedalusParser";
import { FunctionDefContext } from "./DaedalusParser";
import { ConstDefContext } from "./DaedalusParser";
import { ClassDefContext } from "./DaedalusParser";
import { PrototypeDefContext } from "./DaedalusParser";
import { InstanceDefContext } from "./DaedalusParser";
import { InstanceDeclContext } from "./DaedalusParser";
import { VarDeclContext } from "./DaedalusParser";
import { ConstArrayDefContext } from "./DaedalusParser";
import { ConstArrayAssignmentContext } from "./DaedalusParser";
import { ConstValueDefContext } from "./DaedalusParser";
import { ConstValueAssignmentContext } from "./DaedalusParser";
import { VarArrayDeclContext } from "./DaedalusParser";
import { VarArrayAssignmentContext } from "./DaedalusParser";
import { VarValueDeclContext } from "./DaedalusParser";
import { VarValueAssignmentContext } from "./DaedalusParser";
import { ParameterListContext } from "./DaedalusParser";
import { ParameterDeclContext } from "./DaedalusParser";
import { StatementBlockContext } from "./DaedalusParser";
import { StatementContext } from "./DaedalusParser";
import { FunctionCallContext } from "./DaedalusParser";
import { AssignmentContext } from "./DaedalusParser";
import { ElseBlockContext } from "./DaedalusParser";
import { ElseIfBlockContext } from "./DaedalusParser";
import { IfBlockContext } from "./DaedalusParser";
import { IfBlockStatementContext } from "./DaedalusParser";
import { ReturnStatementContext } from "./DaedalusParser";
import { WhileStatementContext } from "./DaedalusParser";
import { BreakStatementContext } from "./DaedalusParser";
import { ContinueStatementContext } from "./DaedalusParser";
import { ExpressionContext } from "./DaedalusParser";
import { ArrayIndexContext } from "./DaedalusParser";
import { ArraySizeContext } from "./DaedalusParser";
import { ValueContext } from "./DaedalusParser";
import { ReferenceAtomContext } from "./DaedalusParser";
import { ReferenceContext } from "./DaedalusParser";
import { DataTypeContext } from "./DaedalusParser";
import { NameNodeContext } from "./DaedalusParser";
import { ParentReferenceContext } from "./DaedalusParser";
import { AssignmentOperatorContext } from "./DaedalusParser";
import { AddOperatorContext } from "./DaedalusParser";
import { BitMoveOperatorContext } from "./DaedalusParser";
import { CompOperatorContext } from "./DaedalusParser";
import { EqOperatorContext } from "./DaedalusParser";
import { UnaryOperatorContext } from "./DaedalusParser";
import { MultOperatorContext } from "./DaedalusParser";
import { BinAndOperatorContext } from "./DaedalusParser";
import { BinOrOperatorContext } from "./DaedalusParser";
import { LogAndOperatorContext } from "./DaedalusParser";
import { LogOrOperatorContext } from "./DaedalusParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `DaedalusParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface DaedalusVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `integerLiteralValue`
	 * labeled alternative in `DaedalusParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerLiteralValue?: (ctx: IntegerLiteralValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `floatLiteralValue`
	 * labeled alternative in `DaedalusParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloatLiteralValue?: (ctx: FloatLiteralValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringLiteralValue`
	 * labeled alternative in `DaedalusParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteralValue?: (ctx: StringLiteralValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `nullLiteralValue`
	 * labeled alternative in `DaedalusParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullLiteralValue?: (ctx: NullLiteralValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `noFuncLiteralValue`
	 * labeled alternative in `DaedalusParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNoFuncLiteralValue?: (ctx: NoFuncLiteralValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionCallValue`
	 * labeled alternative in `DaedalusParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallValue?: (ctx: FunctionCallValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `referenceValue`
	 * labeled alternative in `DaedalusParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReferenceValue?: (ctx: ReferenceValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `bracketExpression`
	 * labeled alternative in `DaedalusParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBracketExpression?: (ctx: BracketExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `unaryExpression`
	 * labeled alternative in `DaedalusParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpression?: (ctx: UnaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `multExpression`
	 * labeled alternative in `DaedalusParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultExpression?: (ctx: MultExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `addExpression`
	 * labeled alternative in `DaedalusParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddExpression?: (ctx: AddExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `bitMoveExpression`
	 * labeled alternative in `DaedalusParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitMoveExpression?: (ctx: BitMoveExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `compExpression`
	 * labeled alternative in `DaedalusParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompExpression?: (ctx: CompExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `eqExpression`
	 * labeled alternative in `DaedalusParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqExpression?: (ctx: EqExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `binAndExpression`
	 * labeled alternative in `DaedalusParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinAndExpression?: (ctx: BinAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `binOrExpression`
	 * labeled alternative in `DaedalusParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinOrExpression?: (ctx: BinOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `logAndExpression`
	 * labeled alternative in `DaedalusParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogAndExpression?: (ctx: LogAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `logOrExpression`
	 * labeled alternative in `DaedalusParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogOrExpression?: (ctx: LogOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `valueExpression`
	 * labeled alternative in `DaedalusParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueExpression?: (ctx: ValueExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.daedalusFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDaedalusFile?: (ctx: DaedalusFileContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.blockDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockDef?: (ctx: BlockDefContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.inlineDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineDef?: (ctx: InlineDefContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.externFunctionDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExternFunctionDecl?: (ctx: ExternFunctionDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.functionDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDef?: (ctx: FunctionDefContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.constDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstDef?: (ctx: ConstDefContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.classDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDef?: (ctx: ClassDefContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.prototypeDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrototypeDef?: (ctx: PrototypeDefContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.instanceDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstanceDef?: (ctx: InstanceDefContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.instanceDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstanceDecl?: (ctx: InstanceDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.varDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarDecl?: (ctx: VarDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.constArrayDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstArrayDef?: (ctx: ConstArrayDefContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.constArrayAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstArrayAssignment?: (ctx: ConstArrayAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.constValueDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstValueDef?: (ctx: ConstValueDefContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.constValueAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstValueAssignment?: (ctx: ConstValueAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.varArrayDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarArrayDecl?: (ctx: VarArrayDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.varArrayAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarArrayAssignment?: (ctx: VarArrayAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.varValueDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarValueDecl?: (ctx: VarValueDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.varValueAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarValueAssignment?: (ctx: VarValueAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.parameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterList?: (ctx: ParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.parameterDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterDecl?: (ctx: ParameterDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.statementBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementBlock?: (ctx: StatementBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.elseBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseBlock?: (ctx: ElseBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.elseIfBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseIfBlock?: (ctx: ElseIfBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.ifBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfBlock?: (ctx: IfBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.ifBlockStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfBlockStatement?: (ctx: IfBlockStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.breakStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStatement?: (ctx: BreakStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.continueStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueStatement?: (ctx: ContinueStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.arrayIndex`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayIndex?: (ctx: ArrayIndexContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.arraySize`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArraySize?: (ctx: ArraySizeContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.referenceAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReferenceAtom?: (ctx: ReferenceAtomContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.reference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReference?: (ctx: ReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.dataType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataType?: (ctx: DataTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.nameNode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameNode?: (ctx: NameNodeContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.parentReference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParentReference?: (ctx: ParentReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.assignmentOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentOperator?: (ctx: AssignmentOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.addOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddOperator?: (ctx: AddOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.bitMoveOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitMoveOperator?: (ctx: BitMoveOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.compOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompOperator?: (ctx: CompOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.eqOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqOperator?: (ctx: EqOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.unaryOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryOperator?: (ctx: UnaryOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.multOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultOperator?: (ctx: MultOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.binAndOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinAndOperator?: (ctx: BinAndOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.binOrOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinOrOperator?: (ctx: BinOrOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.logAndOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogAndOperator?: (ctx: LogAndOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `DaedalusParser.logOrOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogOrOperator?: (ctx: LogOrOperatorContext) => Result;
}

