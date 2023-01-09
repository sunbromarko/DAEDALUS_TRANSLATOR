// Generated from ./grammar/Zen.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { MainContext } from "./ZenParser";
import { HeadContext } from "./ZenParser";
import { BlockContext } from "./ZenParser";
import { BlockNameContext } from "./ZenParser";
import { ClassPathContext } from "./ZenParser";
import { AttrContext } from "./ZenParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ZenParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ZenVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ZenParser.main`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMain?: (ctx: MainContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenParser.head`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHead?: (ctx: HeadContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenParser.blockName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockName?: (ctx: BlockNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenParser.classPath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassPath?: (ctx: ClassPathContext) => Result;

	/**
	 * Visit a parse tree produced by `ZenParser.attr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttr?: (ctx: AttrContext) => Result;
}

