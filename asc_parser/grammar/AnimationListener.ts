// Generated from ./asc_parser/grammar/Animation.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { FileContext } from "./AnimationParser";
import { PropertyContext } from "./AnimationParser";
import { ObjectContext } from "./AnimationParser";
import { ValueContext } from "./AnimationParser";
import { KeyContext } from "./AnimationParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `AnimationParser`.
 */
export interface AnimationListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `AnimationParser.file`.
	 * @param ctx the parse tree
	 */
	enterFile?: (ctx: FileContext) => void;
	/**
	 * Exit a parse tree produced by `AnimationParser.file`.
	 * @param ctx the parse tree
	 */
	exitFile?: (ctx: FileContext) => void;

	/**
	 * Enter a parse tree produced by `AnimationParser.property`.
	 * @param ctx the parse tree
	 */
	enterProperty?: (ctx: PropertyContext) => void;
	/**
	 * Exit a parse tree produced by `AnimationParser.property`.
	 * @param ctx the parse tree
	 */
	exitProperty?: (ctx: PropertyContext) => void;

	/**
	 * Enter a parse tree produced by `AnimationParser.object`.
	 * @param ctx the parse tree
	 */
	enterObject?: (ctx: ObjectContext) => void;
	/**
	 * Exit a parse tree produced by `AnimationParser.object`.
	 * @param ctx the parse tree
	 */
	exitObject?: (ctx: ObjectContext) => void;

	/**
	 * Enter a parse tree produced by `AnimationParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `AnimationParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `AnimationParser.key`.
	 * @param ctx the parse tree
	 */
	enterKey?: (ctx: KeyContext) => void;
	/**
	 * Exit a parse tree produced by `AnimationParser.key`.
	 * @param ctx the parse tree
	 */
	exitKey?: (ctx: KeyContext) => void;
}

