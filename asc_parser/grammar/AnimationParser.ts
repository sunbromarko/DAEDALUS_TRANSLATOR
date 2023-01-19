// Generated from ./asc_parser/grammar/Animation.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { AnimationListener } from "./AnimationListener";
import { AnimationVisitor } from "./AnimationVisitor";


export class AnimationParser extends Parser {
	public static readonly ID = 1;
	public static readonly INT = 2;
	public static readonly FloatLiteral = 3;
	public static readonly STRING = 4;
	public static readonly Digit = 5;
	public static readonly PointFloat = 6;
	public static readonly ExponentFloat = 7;
	public static readonly Exponent = 8;
	public static readonly INT_FLOAT_SEQUENCE = 9;
	public static readonly ASTERISK = 10;
	public static readonly WS = 11;
	public static readonly Newline = 12;
	public static readonly OPEN_BRACE = 13;
	public static readonly CLOSE_BRACE = 14;
	public static readonly RULE_file = 0;
	public static readonly RULE_property = 1;
	public static readonly RULE_object = 2;
	public static readonly RULE_value = 3;
	public static readonly RULE_key = 4;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "property", "object", "value", "key",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "'*'", undefined, undefined, "'{'", "'}'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ID", "INT", "FloatLiteral", "STRING", "Digit", "PointFloat", 
		"ExponentFloat", "Exponent", "INT_FLOAT_SEQUENCE", "ASTERISK", "WS", "Newline", 
		"OPEN_BRACE", "CLOSE_BRACE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(AnimationParser._LITERAL_NAMES, AnimationParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return AnimationParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Animation.g4"; }

	// @Override
	public get ruleNames(): string[] { return AnimationParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return AnimationParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(AnimationParser._ATN, this);
	}
	// @RuleVersion(0)
	public file(): FileContext {
		let _localctx: FileContext = new FileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, AnimationParser.RULE_file);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 13;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AnimationParser.ASTERISK) {
				{
				{
				this.state = 10;
				this.property();
				}
				}
				this.state = 15;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 16;
			this.match(AnimationParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public property(): PropertyContext {
		let _localctx: PropertyContext = new PropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, AnimationParser.RULE_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 18;
			this.match(AnimationParser.ASTERISK);
			this.state = 19;
			this.key();
			this.state = 22;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AnimationParser.OPEN_BRACE:
				{
				this.state = 20;
				this.object();
				}
				break;
			case AnimationParser.INT:
			case AnimationParser.FloatLiteral:
			case AnimationParser.STRING:
			case AnimationParser.INT_FLOAT_SEQUENCE:
				{
				this.state = 21;
				this.value();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public object(): ObjectContext {
		let _localctx: ObjectContext = new ObjectContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, AnimationParser.RULE_object);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 24;
			this.match(AnimationParser.OPEN_BRACE);
			this.state = 28;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AnimationParser.ASTERISK) {
				{
				{
				this.state = 25;
				this.property();
				}
				}
				this.state = 30;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 31;
			this.match(AnimationParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, AnimationParser.RULE_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 33;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AnimationParser.INT) | (1 << AnimationParser.FloatLiteral) | (1 << AnimationParser.STRING) | (1 << AnimationParser.INT_FLOAT_SEQUENCE))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public key(): KeyContext {
		let _localctx: KeyContext = new KeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, AnimationParser.RULE_key);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 35;
			this.match(AnimationParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x10(\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02" +
		"\x07\x02\x0E\n\x02\f\x02\x0E\x02\x11\v\x02\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x05\x03\x19\n\x03\x03\x04\x03\x04\x07\x04\x1D\n\x04" +
		"\f\x04\x0E\x04 \v\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06" +
		"\x03\x06\x02\x02\x02\x07\x02\x02\x04\x02\x06\x02\b\x02\n\x02\x02\x03\x04" +
		"\x02\x04\x06\v\v\x02%\x02\x0F\x03\x02\x02\x02\x04\x14\x03\x02\x02\x02" +
		"\x06\x1A\x03\x02\x02\x02\b#\x03\x02\x02\x02\n%\x03\x02\x02\x02\f\x0E\x05" +
		"\x04\x03\x02\r\f\x03\x02\x02\x02\x0E\x11\x03\x02\x02\x02\x0F\r\x03\x02" +
		"\x02\x02\x0F\x10\x03\x02\x02\x02\x10\x12\x03\x02\x02\x02\x11\x0F\x03\x02" +
		"\x02\x02\x12\x13\x07\x02\x02\x03\x13\x03\x03\x02\x02\x02\x14\x15\x07\f" +
		"\x02\x02\x15\x18\x05\n\x06\x02\x16\x19\x05\x06\x04\x02\x17\x19\x05\b\x05" +
		"\x02\x18\x16\x03\x02\x02\x02\x18\x17\x03\x02\x02\x02\x19\x05\x03\x02\x02" +
		"\x02\x1A\x1E\x07\x0F\x02\x02\x1B\x1D\x05\x04\x03\x02\x1C\x1B\x03\x02\x02" +
		"\x02\x1D \x03\x02\x02\x02\x1E\x1C\x03\x02\x02\x02\x1E\x1F\x03\x02\x02" +
		"\x02\x1F!\x03\x02\x02\x02 \x1E\x03\x02\x02\x02!\"\x07\x10\x02\x02\"\x07" +
		"\x03\x02\x02\x02#$\t\x02\x02\x02$\t\x03\x02\x02\x02%&\x07\x03\x02\x02" +
		"&\v\x03\x02\x02\x02\x05\x0F\x18\x1E";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!AnimationParser.__ATN) {
			AnimationParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(AnimationParser._serializedATN));
		}

		return AnimationParser.__ATN;
	}

}

export class FileContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(AnimationParser.EOF, 0); }
	public property(): PropertyContext[];
	public property(i: number): PropertyContext;
	public property(i?: number): PropertyContext | PropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropertyContext);
		} else {
			return this.getRuleContext(i, PropertyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnimationParser.RULE_file; }
	// @Override
	public enterRule(listener: AnimationListener): void {
		if (listener.enterFile) {
			listener.enterFile(this);
		}
	}
	// @Override
	public exitRule(listener: AnimationListener): void {
		if (listener.exitFile) {
			listener.exitFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnimationVisitor<Result>): Result {
		if (visitor.visitFile) {
			return visitor.visitFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyContext extends ParserRuleContext {
	public ASTERISK(): TerminalNode { return this.getToken(AnimationParser.ASTERISK, 0); }
	public key(): KeyContext {
		return this.getRuleContext(0, KeyContext);
	}
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnimationParser.RULE_property; }
	// @Override
	public enterRule(listener: AnimationListener): void {
		if (listener.enterProperty) {
			listener.enterProperty(this);
		}
	}
	// @Override
	public exitRule(listener: AnimationListener): void {
		if (listener.exitProperty) {
			listener.exitProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnimationVisitor<Result>): Result {
		if (visitor.visitProperty) {
			return visitor.visitProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectContext extends ParserRuleContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(AnimationParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(AnimationParser.CLOSE_BRACE, 0); }
	public property(): PropertyContext[];
	public property(i: number): PropertyContext;
	public property(i?: number): PropertyContext | PropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropertyContext);
		} else {
			return this.getRuleContext(i, PropertyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnimationParser.RULE_object; }
	// @Override
	public enterRule(listener: AnimationListener): void {
		if (listener.enterObject) {
			listener.enterObject(this);
		}
	}
	// @Override
	public exitRule(listener: AnimationListener): void {
		if (listener.exitObject) {
			listener.exitObject(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnimationVisitor<Result>): Result {
		if (visitor.visitObject) {
			return visitor.visitObject(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public INT(): TerminalNode | undefined { return this.tryGetToken(AnimationParser.INT, 0); }
	public INT_FLOAT_SEQUENCE(): TerminalNode | undefined { return this.tryGetToken(AnimationParser.INT_FLOAT_SEQUENCE, 0); }
	public FloatLiteral(): TerminalNode | undefined { return this.tryGetToken(AnimationParser.FloatLiteral, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(AnimationParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnimationParser.RULE_value; }
	// @Override
	public enterRule(listener: AnimationListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: AnimationListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnimationVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeyContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(AnimationParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnimationParser.RULE_key; }
	// @Override
	public enterRule(listener: AnimationListener): void {
		if (listener.enterKey) {
			listener.enterKey(this);
		}
	}
	// @Override
	public exitRule(listener: AnimationListener): void {
		if (listener.exitKey) {
			listener.exitKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnimationVisitor<Result>): Result {
		if (visitor.visitKey) {
			return visitor.visitKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


