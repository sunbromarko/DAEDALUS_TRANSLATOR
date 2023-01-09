// Generated from ./grammar/Daedalus.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `DaedalusParser`.
 */
export interface DaedalusListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `integerLiteralValue`
	 * labeled alternative in `DaedalusParser.value`.
	 * @param ctx the parse tree
	 */
	enterIntegerLiteralValue?: (ctx: IntegerLiteralValueContext) => void;
	/**
	 * Exit a parse tree produced by the `integerLiteralValue`
	 * labeled alternative in `DaedalusParser.value`.
	 * @param ctx the parse tree
	 */
	exitIntegerLiteralValue?: (ctx: IntegerLiteralValueContext) => void;

	/**
	 * Enter a parse tree produced by the `floatLiteralValue`
	 * labeled alternative in `DaedalusParser.value`.
	 * @param ctx the parse tree
	 */
	enterFloatLiteralValue?: (ctx: FloatLiteralValueContext) => void;
	/**
	 * Exit a parse tree produced by the `floatLiteralValue`
	 * labeled alternative in `DaedalusParser.value`.
	 * @param ctx the parse tree
	 */
	exitFloatLiteralValue?: (ctx: FloatLiteralValueContext) => void;

	/**
	 * Enter a parse tree produced by the `stringLiteralValue`
	 * labeled alternative in `DaedalusParser.value`.
	 * @param ctx the parse tree
	 */
	enterStringLiteralValue?: (ctx: StringLiteralValueContext) => void;
	/**
	 * Exit a parse tree produced by the `stringLiteralValue`
	 * labeled alternative in `DaedalusParser.value`.
	 * @param ctx the parse tree
	 */
	exitStringLiteralValue?: (ctx: StringLiteralValueContext) => void;

	/**
	 * Enter a parse tree produced by the `nullLiteralValue`
	 * labeled alternative in `DaedalusParser.value`.
	 * @param ctx the parse tree
	 */
	enterNullLiteralValue?: (ctx: NullLiteralValueContext) => void;
	/**
	 * Exit a parse tree produced by the `nullLiteralValue`
	 * labeled alternative in `DaedalusParser.value`.
	 * @param ctx the parse tree
	 */
	exitNullLiteralValue?: (ctx: NullLiteralValueContext) => void;

	/**
	 * Enter a parse tree produced by the `noFuncLiteralValue`
	 * labeled alternative in `DaedalusParser.value`.
	 * @param ctx the parse tree
	 */
	enterNoFuncLiteralValue?: (ctx: NoFuncLiteralValueContext) => void;
	/**
	 * Exit a parse tree produced by the `noFuncLiteralValue`
	 * labeled alternative in `DaedalusParser.value`.
	 * @param ctx the parse tree
	 */
	exitNoFuncLiteralValue?: (ctx: NoFuncLiteralValueContext) => void;

	/**
	 * Enter a parse tree produced by the `functionCallValue`
	 * labeled alternative in `DaedalusParser.value`.
	 * @param ctx the parse tree
	 */
	enterFunctionCallValue?: (ctx: FunctionCallValueContext) => void;
	/**
	 * Exit a parse tree produced by the `functionCallValue`
	 * labeled alternative in `DaedalusParser.value`.
	 * @param ctx the parse tree
	 */
	exitFunctionCallValue?: (ctx: FunctionCallValueContext) => void;

	/**
	 * Enter a parse tree produced by the `referenceValue`
	 * labeled alternative in `DaedalusParser.value`.
	 * @param ctx the parse tree
	 */
	enterReferenceValue?: (ctx: ReferenceValueContext) => void;
	/**
	 * Exit a parse tree produced by the `referenceValue`
	 * labeled alternative in `DaedalusParser.value`.
	 * @param ctx the parse tree
	 */
	exitReferenceValue?: (ctx: ReferenceValueContext) => void;

	/**
	 * Enter a parse tree produced by the `bracketExpression`
	 * labeled alternative in `DaedalusParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBracketExpression?: (ctx: BracketExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `bracketExpression`
	 * labeled alternative in `DaedalusParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBracketExpression?: (ctx: BracketExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `unaryExpression`
	 * labeled alternative in `DaedalusParser.expression`.
	 * @param ctx the parse tree
	 */
	enterUnaryExpression?: (ctx: UnaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `unaryExpression`
	 * labeled alternative in `DaedalusParser.expression`.
	 * @param ctx the parse tree
	 */
	exitUnaryExpression?: (ctx: UnaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `multExpression`
	 * labeled alternative in `DaedalusParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMultExpression?: (ctx: MultExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `multExpression`
	 * labeled alternative in `DaedalusParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMultExpression?: (ctx: MultExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `addExpression`
	 * labeled alternative in `DaedalusParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAddExpression?: (ctx: AddExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `addExpression`
	 * labeled alternative in `DaedalusParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAddExpression?: (ctx: AddExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `bitMoveExpression`
	 * labeled alternative in `DaedalusParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBitMoveExpression?: (ctx: BitMoveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `bitMoveExpression`
	 * labeled alternative in `DaedalusParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBitMoveExpression?: (ctx: BitMoveExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `compExpression`
	 * labeled alternative in `DaedalusParser.expression`.
	 * @param ctx the parse tree
	 */
	enterCompExpression?: (ctx: CompExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `compExpression`
	 * labeled alternative in `DaedalusParser.expression`.
	 * @param ctx the parse tree
	 */
	exitCompExpression?: (ctx: CompExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `eqExpression`
	 * labeled alternative in `DaedalusParser.expression`.
	 * @param ctx the parse tree
	 */
	enterEqExpression?: (ctx: EqExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `eqExpression`
	 * labeled alternative in `DaedalusParser.expression`.
	 * @param ctx the parse tree
	 */
	exitEqExpression?: (ctx: EqExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `binAndExpression`
	 * labeled alternative in `DaedalusParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBinAndExpression?: (ctx: BinAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `binAndExpression`
	 * labeled alternative in `DaedalusParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBinAndExpression?: (ctx: BinAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `binOrExpression`
	 * labeled alternative in `DaedalusParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBinOrExpression?: (ctx: BinOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `binOrExpression`
	 * labeled alternative in `DaedalusParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBinOrExpression?: (ctx: BinOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `logAndExpression`
	 * labeled alternative in `DaedalusParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLogAndExpression?: (ctx: LogAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `logAndExpression`
	 * labeled alternative in `DaedalusParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLogAndExpression?: (ctx: LogAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `logOrExpression`
	 * labeled alternative in `DaedalusParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLogOrExpression?: (ctx: LogOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `logOrExpression`
	 * labeled alternative in `DaedalusParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLogOrExpression?: (ctx: LogOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `valueExpression`
	 * labeled alternative in `DaedalusParser.expression`.
	 * @param ctx the parse tree
	 */
	enterValueExpression?: (ctx: ValueExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `valueExpression`
	 * labeled alternative in `DaedalusParser.expression`.
	 * @param ctx the parse tree
	 */
	exitValueExpression?: (ctx: ValueExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.daedalusFile`.
	 * @param ctx the parse tree
	 */
	enterDaedalusFile?: (ctx: DaedalusFileContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.daedalusFile`.
	 * @param ctx the parse tree
	 */
	exitDaedalusFile?: (ctx: DaedalusFileContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.blockDef`.
	 * @param ctx the parse tree
	 */
	enterBlockDef?: (ctx: BlockDefContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.blockDef`.
	 * @param ctx the parse tree
	 */
	exitBlockDef?: (ctx: BlockDefContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.inlineDef`.
	 * @param ctx the parse tree
	 */
	enterInlineDef?: (ctx: InlineDefContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.inlineDef`.
	 * @param ctx the parse tree
	 */
	exitInlineDef?: (ctx: InlineDefContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.externFunctionDecl`.
	 * @param ctx the parse tree
	 */
	enterExternFunctionDecl?: (ctx: ExternFunctionDeclContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.externFunctionDecl`.
	 * @param ctx the parse tree
	 */
	exitExternFunctionDecl?: (ctx: ExternFunctionDeclContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.functionDef`.
	 * @param ctx the parse tree
	 */
	enterFunctionDef?: (ctx: FunctionDefContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.functionDef`.
	 * @param ctx the parse tree
	 */
	exitFunctionDef?: (ctx: FunctionDefContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.constDef`.
	 * @param ctx the parse tree
	 */
	enterConstDef?: (ctx: ConstDefContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.constDef`.
	 * @param ctx the parse tree
	 */
	exitConstDef?: (ctx: ConstDefContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.classDef`.
	 * @param ctx the parse tree
	 */
	enterClassDef?: (ctx: ClassDefContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.classDef`.
	 * @param ctx the parse tree
	 */
	exitClassDef?: (ctx: ClassDefContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.prototypeDef`.
	 * @param ctx the parse tree
	 */
	enterPrototypeDef?: (ctx: PrototypeDefContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.prototypeDef`.
	 * @param ctx the parse tree
	 */
	exitPrototypeDef?: (ctx: PrototypeDefContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.instanceDef`.
	 * @param ctx the parse tree
	 */
	enterInstanceDef?: (ctx: InstanceDefContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.instanceDef`.
	 * @param ctx the parse tree
	 */
	exitInstanceDef?: (ctx: InstanceDefContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.instanceDecl`.
	 * @param ctx the parse tree
	 */
	enterInstanceDecl?: (ctx: InstanceDeclContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.instanceDecl`.
	 * @param ctx the parse tree
	 */
	exitInstanceDecl?: (ctx: InstanceDeclContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.varDecl`.
	 * @param ctx the parse tree
	 */
	enterVarDecl?: (ctx: VarDeclContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.varDecl`.
	 * @param ctx the parse tree
	 */
	exitVarDecl?: (ctx: VarDeclContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.constArrayDef`.
	 * @param ctx the parse tree
	 */
	enterConstArrayDef?: (ctx: ConstArrayDefContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.constArrayDef`.
	 * @param ctx the parse tree
	 */
	exitConstArrayDef?: (ctx: ConstArrayDefContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.constArrayAssignment`.
	 * @param ctx the parse tree
	 */
	enterConstArrayAssignment?: (ctx: ConstArrayAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.constArrayAssignment`.
	 * @param ctx the parse tree
	 */
	exitConstArrayAssignment?: (ctx: ConstArrayAssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.constValueDef`.
	 * @param ctx the parse tree
	 */
	enterConstValueDef?: (ctx: ConstValueDefContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.constValueDef`.
	 * @param ctx the parse tree
	 */
	exitConstValueDef?: (ctx: ConstValueDefContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.constValueAssignment`.
	 * @param ctx the parse tree
	 */
	enterConstValueAssignment?: (ctx: ConstValueAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.constValueAssignment`.
	 * @param ctx the parse tree
	 */
	exitConstValueAssignment?: (ctx: ConstValueAssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.varArrayDecl`.
	 * @param ctx the parse tree
	 */
	enterVarArrayDecl?: (ctx: VarArrayDeclContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.varArrayDecl`.
	 * @param ctx the parse tree
	 */
	exitVarArrayDecl?: (ctx: VarArrayDeclContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.varArrayAssignment`.
	 * @param ctx the parse tree
	 */
	enterVarArrayAssignment?: (ctx: VarArrayAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.varArrayAssignment`.
	 * @param ctx the parse tree
	 */
	exitVarArrayAssignment?: (ctx: VarArrayAssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.varValueDecl`.
	 * @param ctx the parse tree
	 */
	enterVarValueDecl?: (ctx: VarValueDeclContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.varValueDecl`.
	 * @param ctx the parse tree
	 */
	exitVarValueDecl?: (ctx: VarValueDeclContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.varValueAssignment`.
	 * @param ctx the parse tree
	 */
	enterVarValueAssignment?: (ctx: VarValueAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.varValueAssignment`.
	 * @param ctx the parse tree
	 */
	exitVarValueAssignment?: (ctx: VarValueAssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.parameterList`.
	 * @param ctx the parse tree
	 */
	enterParameterList?: (ctx: ParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.parameterList`.
	 * @param ctx the parse tree
	 */
	exitParameterList?: (ctx: ParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.parameterDecl`.
	 * @param ctx the parse tree
	 */
	enterParameterDecl?: (ctx: ParameterDeclContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.parameterDecl`.
	 * @param ctx the parse tree
	 */
	exitParameterDecl?: (ctx: ParameterDeclContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.statementBlock`.
	 * @param ctx the parse tree
	 */
	enterStatementBlock?: (ctx: StatementBlockContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.statementBlock`.
	 * @param ctx the parse tree
	 */
	exitStatementBlock?: (ctx: StatementBlockContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.elseBlock`.
	 * @param ctx the parse tree
	 */
	enterElseBlock?: (ctx: ElseBlockContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.elseBlock`.
	 * @param ctx the parse tree
	 */
	exitElseBlock?: (ctx: ElseBlockContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.elseIfBlock`.
	 * @param ctx the parse tree
	 */
	enterElseIfBlock?: (ctx: ElseIfBlockContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.elseIfBlock`.
	 * @param ctx the parse tree
	 */
	exitElseIfBlock?: (ctx: ElseIfBlockContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.ifBlock`.
	 * @param ctx the parse tree
	 */
	enterIfBlock?: (ctx: IfBlockContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.ifBlock`.
	 * @param ctx the parse tree
	 */
	exitIfBlock?: (ctx: IfBlockContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.ifBlockStatement`.
	 * @param ctx the parse tree
	 */
	enterIfBlockStatement?: (ctx: IfBlockStatementContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.ifBlockStatement`.
	 * @param ctx the parse tree
	 */
	exitIfBlockStatement?: (ctx: IfBlockStatementContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.breakStatement`.
	 * @param ctx the parse tree
	 */
	enterBreakStatement?: (ctx: BreakStatementContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.breakStatement`.
	 * @param ctx the parse tree
	 */
	exitBreakStatement?: (ctx: BreakStatementContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.continueStatement`.
	 * @param ctx the parse tree
	 */
	enterContinueStatement?: (ctx: ContinueStatementContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.continueStatement`.
	 * @param ctx the parse tree
	 */
	exitContinueStatement?: (ctx: ContinueStatementContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.arrayIndex`.
	 * @param ctx the parse tree
	 */
	enterArrayIndex?: (ctx: ArrayIndexContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.arrayIndex`.
	 * @param ctx the parse tree
	 */
	exitArrayIndex?: (ctx: ArrayIndexContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.arraySize`.
	 * @param ctx the parse tree
	 */
	enterArraySize?: (ctx: ArraySizeContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.arraySize`.
	 * @param ctx the parse tree
	 */
	exitArraySize?: (ctx: ArraySizeContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.referenceAtom`.
	 * @param ctx the parse tree
	 */
	enterReferenceAtom?: (ctx: ReferenceAtomContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.referenceAtom`.
	 * @param ctx the parse tree
	 */
	exitReferenceAtom?: (ctx: ReferenceAtomContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.reference`.
	 * @param ctx the parse tree
	 */
	enterReference?: (ctx: ReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.reference`.
	 * @param ctx the parse tree
	 */
	exitReference?: (ctx: ReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.dataType`.
	 * @param ctx the parse tree
	 */
	enterDataType?: (ctx: DataTypeContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.dataType`.
	 * @param ctx the parse tree
	 */
	exitDataType?: (ctx: DataTypeContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.nameNode`.
	 * @param ctx the parse tree
	 */
	enterNameNode?: (ctx: NameNodeContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.nameNode`.
	 * @param ctx the parse tree
	 */
	exitNameNode?: (ctx: NameNodeContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.parentReference`.
	 * @param ctx the parse tree
	 */
	enterParentReference?: (ctx: ParentReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.parentReference`.
	 * @param ctx the parse tree
	 */
	exitParentReference?: (ctx: ParentReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	enterAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	exitAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.addOperator`.
	 * @param ctx the parse tree
	 */
	enterAddOperator?: (ctx: AddOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.addOperator`.
	 * @param ctx the parse tree
	 */
	exitAddOperator?: (ctx: AddOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.bitMoveOperator`.
	 * @param ctx the parse tree
	 */
	enterBitMoveOperator?: (ctx: BitMoveOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.bitMoveOperator`.
	 * @param ctx the parse tree
	 */
	exitBitMoveOperator?: (ctx: BitMoveOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.compOperator`.
	 * @param ctx the parse tree
	 */
	enterCompOperator?: (ctx: CompOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.compOperator`.
	 * @param ctx the parse tree
	 */
	exitCompOperator?: (ctx: CompOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.eqOperator`.
	 * @param ctx the parse tree
	 */
	enterEqOperator?: (ctx: EqOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.eqOperator`.
	 * @param ctx the parse tree
	 */
	exitEqOperator?: (ctx: EqOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.unaryOperator`.
	 * @param ctx the parse tree
	 */
	enterUnaryOperator?: (ctx: UnaryOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.unaryOperator`.
	 * @param ctx the parse tree
	 */
	exitUnaryOperator?: (ctx: UnaryOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.multOperator`.
	 * @param ctx the parse tree
	 */
	enterMultOperator?: (ctx: MultOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.multOperator`.
	 * @param ctx the parse tree
	 */
	exitMultOperator?: (ctx: MultOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.binAndOperator`.
	 * @param ctx the parse tree
	 */
	enterBinAndOperator?: (ctx: BinAndOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.binAndOperator`.
	 * @param ctx the parse tree
	 */
	exitBinAndOperator?: (ctx: BinAndOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.binOrOperator`.
	 * @param ctx the parse tree
	 */
	enterBinOrOperator?: (ctx: BinOrOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.binOrOperator`.
	 * @param ctx the parse tree
	 */
	exitBinOrOperator?: (ctx: BinOrOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.logAndOperator`.
	 * @param ctx the parse tree
	 */
	enterLogAndOperator?: (ctx: LogAndOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.logAndOperator`.
	 * @param ctx the parse tree
	 */
	exitLogAndOperator?: (ctx: LogAndOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `DaedalusParser.logOrOperator`.
	 * @param ctx the parse tree
	 */
	enterLogOrOperator?: (ctx: LogOrOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `DaedalusParser.logOrOperator`.
	 * @param ctx the parse tree
	 */
	exitLogOrOperator?: (ctx: LogOrOperatorContext) => void;
}

