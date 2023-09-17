import { DaedalusListener } from "./grammar/DaedalusListener";
import {
  BracketExpressionContext,
  EqExpressionContext,
  ExpressionContext,
  FunctionDefContext,
  IfBlockStatementContext,
  LogAndExpressionContext,
  ReferenceValueContext,
} from "./grammar/DaedalusParser";

export class DialogsConditionsParser implements DaedalusListener {
  conditions;

  currentFunctionDefContext: FunctionDefContext;
  currentIfBlocStatementContext: IfBlockStatementContext;
  currentExpressionContext: ExpressionContext;

  enterFunctionDef(ctx: FunctionDefContext) {
    const FuncName = ctx.nameNode().text;
    const isConditionDefenition = FuncName.includes("_Condition");
    if (!isConditionDefenition) return;
    this.currentFunctionDefContext = ctx;
    console.log(`Enter ${FuncName}`);
  }

  exitFunctionDef(ctx: FunctionDefContext) {
    if (!this.currentFunctionDefContext) return;
    this.currentFunctionDefContext = undefined;
    console.log(`Leave ${ctx.nameNode().text}`);
  }

  enterIfBlockStatement(ctx: IfBlockStatementContext) {
    if (!this.currentFunctionDefContext) return;
    console.log("Enter IF Block");

    this.currentIfBlocStatementContext = ctx;
  }

  // enterExpression(ctx: ExpressionContext) {
  //   console.log("ANY TYPE EXPRESSION");
  //   if (!this.currentFunctionDefContext) return;

  //   console.log(ctx.text);

  //   this.currentExpressionContext = ctx;
  // }

  enterLogAndExpression(ctx: LogAndExpressionContext) {
    if (!this.currentFunctionDefContext) return;
    console.log(ctx.text);
  }

  enterEqExpression(ctx: EqExpressionContext) {
    if (!this.currentFunctionDefContext) return;
    console.log(ctx.text);
  }
}
