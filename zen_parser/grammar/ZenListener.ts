// Generated from ./grammar/Zen.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { MainContext } from "./ZenParser";
import { HeadContext } from "./ZenParser";
import { BlockContext } from "./ZenParser";
import { BlockNameContext } from "./ZenParser";
import { ClassPathContext } from "./ZenParser";
import { AttrContext } from "./ZenParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ZenParser`.
 */
export interface ZenListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ZenParser.main`.
	 * @param ctx the parse tree
	 */
	enterMain?: (ctx: MainContext) => void;
	/**
	 * Exit a parse tree produced by `ZenParser.main`.
	 * @param ctx the parse tree
	 */
	exitMain?: (ctx: MainContext) => void;

	/**
	 * Enter a parse tree produced by `ZenParser.head`.
	 * @param ctx the parse tree
	 */
	enterHead?: (ctx: HeadContext) => void;
	/**
	 * Exit a parse tree produced by `ZenParser.head`.
	 * @param ctx the parse tree
	 */
	exitHead?: (ctx: HeadContext) => void;

	/**
	 * Enter a parse tree produced by `ZenParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `ZenParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `ZenParser.blockName`.
	 * @param ctx the parse tree
	 */
	enterBlockName?: (ctx: BlockNameContext) => void;
	/**
	 * Exit a parse tree produced by `ZenParser.blockName`.
	 * @param ctx the parse tree
	 */
	exitBlockName?: (ctx: BlockNameContext) => void;

	/**
	 * Enter a parse tree produced by `ZenParser.classPath`.
	 * @param ctx the parse tree
	 */
	enterClassPath?: (ctx: ClassPathContext) => void;
	/**
	 * Exit a parse tree produced by `ZenParser.classPath`.
	 * @param ctx the parse tree
	 */
	exitClassPath?: (ctx: ClassPathContext) => void;

	/**
	 * Enter a parse tree produced by `ZenParser.attr`.
	 * @param ctx the parse tree
	 */
	enterAttr?: (ctx: AttrContext) => void;
	/**
	 * Exit a parse tree produced by `ZenParser.attr`.
	 * @param ctx the parse tree
	 */
	exitAttr?: (ctx: AttrContext) => void;
}

