// Generated from ./asc_parser/grammar/Animation.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { FileContext } from "./AnimationParser";
import { PropertyContext } from "./AnimationParser";
import { ObjectContext } from "./AnimationParser";
import { ValueContext } from "./AnimationParser";
import { KeyContext } from "./AnimationParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `AnimationParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface AnimationVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `AnimationParser.file`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile?: (ctx: FileContext) => Result;

	/**
	 * Visit a parse tree produced by `AnimationParser.property`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProperty?: (ctx: PropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `AnimationParser.object`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObject?: (ctx: ObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `AnimationParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `AnimationParser.key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKey?: (ctx: KeyContext) => Result;
}

