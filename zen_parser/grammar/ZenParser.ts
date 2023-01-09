// Generated from ./grammar/Zen.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { ZenListener } from "./ZenListener";
import { ZenVisitor } from "./ZenVisitor";


export class ZenParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly MeshAndBsp = 8;
	public static readonly Whitespace = 9;
	public static readonly Newline = 10;
	public static readonly Int = 11;
	public static readonly Date = 12;
	public static readonly Time = 13;
	public static readonly Value = 14;
	public static readonly Name = 15;
	public static readonly RULE_main = 0;
	public static readonly RULE_head = 1;
	public static readonly RULE_block = 2;
	public static readonly RULE_blockName = 3;
	public static readonly RULE_classPath = 4;
	public static readonly RULE_attr = 5;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"main", "head", "block", "blockName", "classPath", "attr",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'['", "']'", "'[]'", "'%'", "':'", "'\u00A7'", "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "MeshAndBsp", "Whitespace", "Newline", "Int", "Date", "Time", 
		"Value", "Name",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ZenParser._LITERAL_NAMES, ZenParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ZenParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Zen.g4"; }

	// @Override
	public get ruleNames(): string[] { return ZenParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ZenParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ZenParser._ATN, this);
	}
	// @RuleVersion(0)
	public main(): MainContext {
		let _localctx: MainContext = new MainContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ZenParser.RULE_main);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 12;
			this.head();
			{
			this.state = 13;
			_localctx._body = this.block();
			}
			this.state = 14;
			this.match(ZenParser.EOF);
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
	public head(): HeadContext {
		let _localctx: HeadContext = new HeadContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ZenParser.RULE_head);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 16;
			this.match(ZenParser.Name);
			this.state = 17;
			this.match(ZenParser.Name);
			this.state = 18;
			this.match(ZenParser.Name);
			{
			this.state = 19;
			_localctx._version = this.match(ZenParser.Int);
			}
			this.state = 20;
			this.match(ZenParser.Name);
			{
			this.state = 21;
			_localctx._zenType = this.match(ZenParser.Name);
			}
			this.state = 22;
			this.match(ZenParser.Name);
			{
			this.state = 23;
			_localctx._saveGame = this.match(ZenParser.Int);
			}
			this.state = 24;
			this.match(ZenParser.Name);
			{
			this.state = 25;
			_localctx._date = this.match(ZenParser.Date);
			}
			{
			this.state = 26;
			_localctx._time = this.match(ZenParser.Time);
			}
			this.state = 27;
			this.match(ZenParser.Name);
			{
			this.state = 28;
			_localctx._user = this.match(ZenParser.Name);
			}
			this.state = 29;
			this.match(ZenParser.Name);
			this.state = 30;
			this.match(ZenParser.Name);
			{
			this.state = 31;
			_localctx._objectsCount = this.match(ZenParser.Int);
			}
			this.state = 32;
			this.match(ZenParser.Name);
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
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ZenParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 34;
			this.match(ZenParser.T__0);
			this.state = 35;
			this.blockName();
			this.state = 36;
			this.classPath();
			{
			this.state = 37;
			_localctx._leftIndex = this.match(ZenParser.Int);
			}
			{
			this.state = 38;
			_localctx._rightIndex = this.match(ZenParser.Int);
			}
			this.state = 39;
			this.match(ZenParser.T__1);
			this.state = 44;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ZenParser.T__0 || _la === ZenParser.Name) {
				{
				this.state = 42;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ZenParser.T__0:
					{
					this.state = 40;
					this.block();
					}
					break;
				case ZenParser.Name:
					{
					this.state = 41;
					this.attr();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 46;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 47;
			this.match(ZenParser.T__2);
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
	public blockName(): BlockNameContext {
		let _localctx: BlockNameContext = new BlockNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ZenParser.RULE_blockName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 49;
			_la = this._input.LA(1);
			if (!(_la === ZenParser.T__3 || _la === ZenParser.Name)) {
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
	public classPath(): ClassPathContext {
		let _localctx: ClassPathContext = new ClassPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ZenParser.RULE_classPath);
		let _la: number;
		try {
			this.state = 61;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ZenParser.Name:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 51;
				this.match(ZenParser.Name);
				this.state = 56;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ZenParser.T__4) {
					{
					{
					this.state = 52;
					this.match(ZenParser.T__4);
					this.state = 53;
					this.match(ZenParser.Name);
					}
					}
					this.state = 58;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case ZenParser.T__5:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 59;
				this.match(ZenParser.T__5);
				}
				break;
			case ZenParser.T__3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 60;
				this.match(ZenParser.T__3);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public attr(): AttrContext {
		let _localctx: AttrContext = new AttrContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ZenParser.RULE_attr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 63;
			this.match(ZenParser.Name);
			this.state = 64;
			this.match(ZenParser.T__6);
			this.state = 65;
			this.match(ZenParser.Value);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x11F\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04-\n\x04\f\x04\x0E\x040\v\x04\x03" +
		"\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x07\x069\n\x06\f" +
		"\x06\x0E\x06<\v\x06\x03\x06\x03\x06\x05\x06@\n\x06\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x02\x02\x02\b\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x02\x03\x04\x02\x06\x06\x11\x11\x02D\x02\x0E\x03\x02\x02\x02\x04" +
		"\x12\x03\x02\x02\x02\x06$\x03\x02\x02\x02\b3\x03\x02\x02\x02\n?\x03\x02" +
		"\x02\x02\fA\x03\x02\x02\x02\x0E\x0F\x05\x04\x03\x02\x0F\x10\x05\x06\x04" +
		"\x02\x10\x11\x07\x02\x02\x03\x11\x03\x03\x02\x02\x02\x12\x13\x07\x11\x02" +
		"\x02\x13\x14\x07\x11\x02\x02\x14\x15\x07\x11\x02\x02\x15\x16\x07\r\x02" +
		"\x02\x16\x17\x07\x11\x02\x02\x17\x18\x07\x11\x02\x02\x18\x19\x07\x11\x02" +
		"\x02\x19\x1A\x07\r\x02\x02\x1A\x1B\x07\x11\x02\x02\x1B\x1C\x07\x0E\x02" +
		"\x02\x1C\x1D\x07\x0F\x02\x02\x1D\x1E\x07\x11\x02\x02\x1E\x1F\x07\x11\x02" +
		"\x02\x1F \x07\x11\x02\x02 !\x07\x11\x02\x02!\"\x07\r\x02\x02\"#\x07\x11" +
		"\x02\x02#\x05\x03\x02\x02\x02$%\x07\x03\x02\x02%&\x05\b\x05\x02&\'\x05" +
		"\n\x06\x02\'(\x07\r\x02\x02()\x07\r\x02\x02).\x07\x04\x02\x02*-\x05\x06" +
		"\x04\x02+-\x05\f\x07\x02,*\x03\x02\x02\x02,+\x03\x02\x02\x02-0\x03\x02" +
		"\x02\x02.,\x03\x02\x02\x02./\x03\x02\x02\x02/1\x03\x02\x02\x020.\x03\x02" +
		"\x02\x0212\x07\x05\x02\x022\x07\x03\x02\x02\x0234\t\x02\x02\x024\t\x03" +
		"\x02\x02\x025:\x07\x11\x02\x0267\x07\x07\x02\x0279\x07\x11\x02\x0286\x03" +
		"\x02\x02\x029<\x03\x02\x02\x02:8\x03\x02\x02\x02:;\x03\x02\x02\x02;@\x03" +
		"\x02\x02\x02<:\x03\x02\x02\x02=@\x07\b\x02\x02>@\x07\x06\x02\x02?5\x03" +
		"\x02\x02\x02?=\x03\x02\x02\x02?>\x03\x02\x02\x02@\v\x03\x02\x02\x02AB" +
		"\x07\x11\x02\x02BC\x07\t\x02\x02CD\x07\x10\x02\x02D\r\x03\x02\x02\x02" +
		"\x06,.:?";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ZenParser.__ATN) {
			ZenParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ZenParser._serializedATN));
		}

		return ZenParser.__ATN;
	}

}

export class MainContext extends ParserRuleContext {
	public _body!: BlockContext;
	public head(): HeadContext {
		return this.getRuleContext(0, HeadContext);
	}
	public EOF(): TerminalNode { return this.getToken(ZenParser.EOF, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenParser.RULE_main; }
	// @Override
	public enterRule(listener: ZenListener): void {
		if (listener.enterMain) {
			listener.enterMain(this);
		}
	}
	// @Override
	public exitRule(listener: ZenListener): void {
		if (listener.exitMain) {
			listener.exitMain(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZenVisitor<Result>): Result {
		if (visitor.visitMain) {
			return visitor.visitMain(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HeadContext extends ParserRuleContext {
	public _version!: Token;
	public _zenType!: Token;
	public _saveGame!: Token;
	public _date!: Token;
	public _time!: Token;
	public _user!: Token;
	public _objectsCount!: Token;
	public Name(): TerminalNode[];
	public Name(i: number): TerminalNode;
	public Name(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenParser.Name);
		} else {
			return this.getToken(ZenParser.Name, i);
		}
	}
	public Int(): TerminalNode[];
	public Int(i: number): TerminalNode;
	public Int(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenParser.Int);
		} else {
			return this.getToken(ZenParser.Int, i);
		}
	}
	public Date(): TerminalNode | undefined { return this.tryGetToken(ZenParser.Date, 0); }
	public Time(): TerminalNode | undefined { return this.tryGetToken(ZenParser.Time, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenParser.RULE_head; }
	// @Override
	public enterRule(listener: ZenListener): void {
		if (listener.enterHead) {
			listener.enterHead(this);
		}
	}
	// @Override
	public exitRule(listener: ZenListener): void {
		if (listener.exitHead) {
			listener.exitHead(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZenVisitor<Result>): Result {
		if (visitor.visitHead) {
			return visitor.visitHead(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public _leftIndex!: Token;
	public _rightIndex!: Token;
	public blockName(): BlockNameContext {
		return this.getRuleContext(0, BlockNameContext);
	}
	public classPath(): ClassPathContext {
		return this.getRuleContext(0, ClassPathContext);
	}
	public Int(): TerminalNode[];
	public Int(i: number): TerminalNode;
	public Int(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenParser.Int);
		} else {
			return this.getToken(ZenParser.Int, i);
		}
	}
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	public attr(): AttrContext[];
	public attr(i: number): AttrContext;
	public attr(i?: number): AttrContext | AttrContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttrContext);
		} else {
			return this.getRuleContext(i, AttrContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenParser.RULE_block; }
	// @Override
	public enterRule(listener: ZenListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: ZenListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZenVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockNameContext extends ParserRuleContext {
	public Name(): TerminalNode { return this.getToken(ZenParser.Name, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenParser.RULE_blockName; }
	// @Override
	public enterRule(listener: ZenListener): void {
		if (listener.enterBlockName) {
			listener.enterBlockName(this);
		}
	}
	// @Override
	public exitRule(listener: ZenListener): void {
		if (listener.exitBlockName) {
			listener.exitBlockName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZenVisitor<Result>): Result {
		if (visitor.visitBlockName) {
			return visitor.visitBlockName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassPathContext extends ParserRuleContext {
	public Name(): TerminalNode[];
	public Name(i: number): TerminalNode;
	public Name(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ZenParser.Name);
		} else {
			return this.getToken(ZenParser.Name, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenParser.RULE_classPath; }
	// @Override
	public enterRule(listener: ZenListener): void {
		if (listener.enterClassPath) {
			listener.enterClassPath(this);
		}
	}
	// @Override
	public exitRule(listener: ZenListener): void {
		if (listener.exitClassPath) {
			listener.exitClassPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZenVisitor<Result>): Result {
		if (visitor.visitClassPath) {
			return visitor.visitClassPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttrContext extends ParserRuleContext {
	public Name(): TerminalNode { return this.getToken(ZenParser.Name, 0); }
	public Value(): TerminalNode { return this.getToken(ZenParser.Value, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ZenParser.RULE_attr; }
	// @Override
	public enterRule(listener: ZenListener): void {
		if (listener.enterAttr) {
			listener.enterAttr(this);
		}
	}
	// @Override
	public exitRule(listener: ZenListener): void {
		if (listener.exitAttr) {
			listener.exitAttr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ZenVisitor<Result>): Result {
		if (visitor.visitAttr) {
			return visitor.visitAttr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


