// Generated from ./daedalus_parser/grammar/Daedalus.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { DaedalusListener } from "./DaedalusListener";
import { DaedalusVisitor } from "./DaedalusVisitor";


export class DaedalusParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly Const = 34;
	public static readonly Var = 35;
	public static readonly If = 36;
	public static readonly Int = 37;
	public static readonly Else = 38;
	public static readonly Func = 39;
	public static readonly String = 40;
	public static readonly Class = 41;
	public static readonly Void = 42;
	public static readonly Return = 43;
	public static readonly Float = 44;
	public static readonly Prototype = 45;
	public static readonly Instance = 46;
	public static readonly Null = 47;
	public static readonly NoFunc = 48;
	public static readonly While = 49;
	public static readonly Break = 50;
	public static readonly Continue = 51;
	public static readonly Extern = 52;
	public static readonly Identifier = 53;
	public static readonly IntegerLiteral = 54;
	public static readonly FloatLiteral = 55;
	public static readonly StringLiteral = 56;
	public static readonly Whitespace = 57;
	public static readonly Newline = 58;
	public static readonly BlockComment = 59;
	public static readonly LineComment = 60;
	public static readonly UnexpectedCharacter = 61;
	public static readonly RULE_daedalusFile = 0;
	public static readonly RULE_blockDef = 1;
	public static readonly RULE_inlineDef = 2;
	public static readonly RULE_externFunctionDecl = 3;
	public static readonly RULE_functionDef = 4;
	public static readonly RULE_constDef = 5;
	public static readonly RULE_classDef = 6;
	public static readonly RULE_prototypeDef = 7;
	public static readonly RULE_instanceDef = 8;
	public static readonly RULE_instanceDecl = 9;
	public static readonly RULE_varDecl = 10;
	public static readonly RULE_constArrayDef = 11;
	public static readonly RULE_constArrayAssignment = 12;
	public static readonly RULE_constValueDef = 13;
	public static readonly RULE_constValueAssignment = 14;
	public static readonly RULE_varArrayDecl = 15;
	public static readonly RULE_varArrayAssignment = 16;
	public static readonly RULE_varValueDecl = 17;
	public static readonly RULE_varValueAssignment = 18;
	public static readonly RULE_parameterList = 19;
	public static readonly RULE_parameterDecl = 20;
	public static readonly RULE_statementBlock = 21;
	public static readonly RULE_statement = 22;
	public static readonly RULE_functionCall = 23;
	public static readonly RULE_assignment = 24;
	public static readonly RULE_elseBlock = 25;
	public static readonly RULE_elseIfBlock = 26;
	public static readonly RULE_ifBlock = 27;
	public static readonly RULE_ifBlockStatement = 28;
	public static readonly RULE_returnStatement = 29;
	public static readonly RULE_whileStatement = 30;
	public static readonly RULE_breakStatement = 31;
	public static readonly RULE_continueStatement = 32;
	public static readonly RULE_expression = 33;
	public static readonly RULE_arrayIndex = 34;
	public static readonly RULE_arraySize = 35;
	public static readonly RULE_value = 36;
	public static readonly RULE_referenceAtom = 37;
	public static readonly RULE_reference = 38;
	public static readonly RULE_dataType = 39;
	public static readonly RULE_nameNode = 40;
	public static readonly RULE_parentReference = 41;
	public static readonly RULE_assignmentOperator = 42;
	public static readonly RULE_addOperator = 43;
	public static readonly RULE_bitMoveOperator = 44;
	public static readonly RULE_compOperator = 45;
	public static readonly RULE_eqOperator = 46;
	public static readonly RULE_unaryOperator = 47;
	public static readonly RULE_multOperator = 48;
	public static readonly RULE_binAndOperator = 49;
	public static readonly RULE_binOrOperator = 50;
	public static readonly RULE_logAndOperator = 51;
	public static readonly RULE_logOrOperator = 52;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"daedalusFile", "blockDef", "inlineDef", "externFunctionDecl", "functionDef", 
		"constDef", "classDef", "prototypeDef", "instanceDef", "instanceDecl", 
		"varDecl", "constArrayDef", "constArrayAssignment", "constValueDef", "constValueAssignment", 
		"varArrayDecl", "varArrayAssignment", "varValueDecl", "varValueAssignment", 
		"parameterList", "parameterDecl", "statementBlock", "statement", "functionCall", 
		"assignment", "elseBlock", "elseIfBlock", "ifBlock", "ifBlockStatement", 
		"returnStatement", "whileStatement", "breakStatement", "continueStatement", 
		"expression", "arrayIndex", "arraySize", "value", "referenceAtom", "reference", 
		"dataType", "nameNode", "parentReference", "assignmentOperator", "addOperator", 
		"bitMoveOperator", "compOperator", "eqOperator", "unaryOperator", "multOperator", 
		"binAndOperator", "binOrOperator", "logAndOperator", "logOrOperator",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "','", "'{'", "'}'", "'('", "')'", "'['", "']'", "'='", 
		"'.'", "'+='", "'-='", "'*='", "'/='", "'+'", "'-'", "'<<'", "'>>'", "'<'", 
		"'>'", "'<='", "'>='", "'=='", "'!='", "'!'", "'~'", "'*'", "'/'", "'%'", 
		"'&'", "'|'", "'&&'", "'||'", undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "'while'", "'break'", "'continue'", 
		"'extern'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "Const", 
		"Var", "If", "Int", "Else", "Func", "String", "Class", "Void", "Return", 
		"Float", "Prototype", "Instance", "Null", "NoFunc", "While", "Break", 
		"Continue", "Extern", "Identifier", "IntegerLiteral", "FloatLiteral", 
		"StringLiteral", "Whitespace", "Newline", "BlockComment", "LineComment", 
		"UnexpectedCharacter",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(DaedalusParser._LITERAL_NAMES, DaedalusParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return DaedalusParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Daedalus.g4"; }

	// @Override
	public get ruleNames(): string[] { return DaedalusParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return DaedalusParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(DaedalusParser._ATN, this);
	}
	// @RuleVersion(0)
	public daedalusFile(): DaedalusFileContext {
		let _localctx: DaedalusFileContext = new DaedalusFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, DaedalusParser.RULE_daedalusFile);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 110;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					this.state = 108;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
					case 1:
						{
						this.state = 106;
						this.blockDef();
						}
						break;

					case 2:
						{
						this.state = 107;
						this.inlineDef();
						}
						break;
					}
					}
				}
				this.state = 112;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 113;
			this.match(DaedalusParser.EOF);
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
	public blockDef(): BlockDefContext {
		let _localctx: BlockDefContext = new BlockDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, DaedalusParser.RULE_blockDef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 119;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DaedalusParser.Func:
				{
				this.state = 115;
				this.functionDef();
				}
				break;
			case DaedalusParser.Class:
				{
				this.state = 116;
				this.classDef();
				}
				break;
			case DaedalusParser.Prototype:
				{
				this.state = 117;
				this.prototypeDef();
				}
				break;
			case DaedalusParser.Instance:
				{
				this.state = 118;
				this.instanceDef();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 122;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DaedalusParser.T__0) {
				{
				this.state = 121;
				this.match(DaedalusParser.T__0);
				}
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
	public inlineDef(): InlineDefContext {
		let _localctx: InlineDefContext = new InlineDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, DaedalusParser.RULE_inlineDef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 128;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DaedalusParser.Extern:
				{
				this.state = 124;
				this.externFunctionDecl();
				}
				break;
			case DaedalusParser.Const:
				{
				this.state = 125;
				this.constDef();
				}
				break;
			case DaedalusParser.Var:
				{
				this.state = 126;
				this.varDecl();
				}
				break;
			case DaedalusParser.Instance:
				{
				this.state = 127;
				this.instanceDecl();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 130;
			this.match(DaedalusParser.T__0);
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
	public externFunctionDecl(): ExternFunctionDeclContext {
		let _localctx: ExternFunctionDeclContext = new ExternFunctionDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, DaedalusParser.RULE_externFunctionDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 132;
			this.match(DaedalusParser.Extern);
			this.state = 133;
			this.match(DaedalusParser.Func);
			this.state = 134;
			this.dataType();
			this.state = 135;
			this.nameNode();
			this.state = 136;
			this.parameterList();
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
	public functionDef(): FunctionDefContext {
		let _localctx: FunctionDefContext = new FunctionDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, DaedalusParser.RULE_functionDef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 138;
			this.match(DaedalusParser.Func);
			this.state = 139;
			this.dataType();
			this.state = 140;
			this.nameNode();
			this.state = 141;
			this.parameterList();
			this.state = 142;
			this.statementBlock();
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
	public constDef(): ConstDefContext {
		let _localctx: ConstDefContext = new ConstDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, DaedalusParser.RULE_constDef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			this.match(DaedalusParser.Const);
			this.state = 145;
			this.dataType();
			this.state = 148;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 146;
				this.constValueDef();
				}
				break;

			case 2:
				{
				this.state = 147;
				this.constArrayDef();
				}
				break;
			}
			this.state = 157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DaedalusParser.T__1) {
				{
				{
				this.state = 150;
				this.match(DaedalusParser.T__1);
				this.state = 153;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
				case 1:
					{
					this.state = 151;
					this.constValueDef();
					}
					break;

				case 2:
					{
					this.state = 152;
					this.constArrayDef();
					}
					break;
				}
				}
				}
				this.state = 159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public classDef(): ClassDefContext {
		let _localctx: ClassDefContext = new ClassDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, DaedalusParser.RULE_classDef);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 160;
			this.match(DaedalusParser.Class);
			this.state = 161;
			this.nameNode();
			this.state = 162;
			this.match(DaedalusParser.T__2);
			this.state = 168;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 163;
					this.varDecl();
					this.state = 164;
					this.match(DaedalusParser.T__0);
					}
					}
				}
				this.state = 170;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			}
			this.state = 171;
			this.match(DaedalusParser.T__3);
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
	public prototypeDef(): PrototypeDefContext {
		let _localctx: PrototypeDefContext = new PrototypeDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, DaedalusParser.RULE_prototypeDef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 173;
			this.match(DaedalusParser.Prototype);
			this.state = 174;
			this.nameNode();
			this.state = 175;
			this.match(DaedalusParser.T__4);
			this.state = 176;
			this.parentReference();
			this.state = 177;
			this.match(DaedalusParser.T__5);
			this.state = 178;
			this.statementBlock();
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
	public instanceDef(): InstanceDefContext {
		let _localctx: InstanceDefContext = new InstanceDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, DaedalusParser.RULE_instanceDef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 180;
			this.match(DaedalusParser.Instance);
			this.state = 181;
			this.nameNode();
			this.state = 182;
			this.match(DaedalusParser.T__4);
			this.state = 183;
			this.parentReference();
			this.state = 184;
			this.match(DaedalusParser.T__5);
			this.state = 185;
			this.statementBlock();
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
	public instanceDecl(): InstanceDeclContext {
		let _localctx: InstanceDeclContext = new InstanceDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, DaedalusParser.RULE_instanceDecl);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 187;
			this.match(DaedalusParser.Instance);
			this.state = 188;
			this.nameNode();
			this.state = 193;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 189;
					this.match(DaedalusParser.T__1);
					this.state = 190;
					this.nameNode();
					}
					}
				}
				this.state = 195;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			}
			this.state = 196;
			this.match(DaedalusParser.T__4);
			this.state = 197;
			this.parentReference();
			this.state = 198;
			this.match(DaedalusParser.T__5);
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
	public varDecl(): VarDeclContext {
		let _localctx: VarDeclContext = new VarDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, DaedalusParser.RULE_varDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 200;
			this.match(DaedalusParser.Var);
			this.state = 201;
			this.dataType();
			this.state = 204;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 202;
				this.varValueDecl();
				}
				break;

			case 2:
				{
				this.state = 203;
				this.varArrayDecl();
				}
				break;
			}
			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DaedalusParser.T__1) {
				{
				{
				this.state = 206;
				this.match(DaedalusParser.T__1);
				this.state = 209;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
				case 1:
					{
					this.state = 207;
					this.varValueDecl();
					}
					break;

				case 2:
					{
					this.state = 208;
					this.varArrayDecl();
					}
					break;
				}
				}
				}
				this.state = 215;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public constArrayDef(): ConstArrayDefContext {
		let _localctx: ConstArrayDefContext = new ConstArrayDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, DaedalusParser.RULE_constArrayDef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 216;
			this.nameNode();
			this.state = 217;
			this.match(DaedalusParser.T__6);
			this.state = 218;
			this.arraySize();
			this.state = 219;
			this.match(DaedalusParser.T__7);
			this.state = 220;
			this.constArrayAssignment();
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
	public constArrayAssignment(): ConstArrayAssignmentContext {
		let _localctx: ConstArrayAssignmentContext = new ConstArrayAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, DaedalusParser.RULE_constArrayAssignment);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 222;
			this.match(DaedalusParser.T__8);
			this.state = 223;
			this.match(DaedalusParser.T__2);
			{
			this.state = 224;
			this.expression(0);
			this.state = 229;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 225;
					this.match(DaedalusParser.T__1);
					this.state = 226;
					this.expression(0);
					}
					}
				}
				this.state = 231;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			}
			}
			this.state = 232;
			this.match(DaedalusParser.T__3);
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
	public constValueDef(): ConstValueDefContext {
		let _localctx: ConstValueDefContext = new ConstValueDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, DaedalusParser.RULE_constValueDef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 234;
			this.nameNode();
			this.state = 235;
			this.constValueAssignment();
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
	public constValueAssignment(): ConstValueAssignmentContext {
		let _localctx: ConstValueAssignmentContext = new ConstValueAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, DaedalusParser.RULE_constValueAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 237;
			this.match(DaedalusParser.T__8);
			this.state = 238;
			this.expression(0);
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
	public varArrayDecl(): VarArrayDeclContext {
		let _localctx: VarArrayDeclContext = new VarArrayDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, DaedalusParser.RULE_varArrayDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 240;
			this.nameNode();
			this.state = 241;
			this.match(DaedalusParser.T__6);
			this.state = 242;
			this.arraySize();
			this.state = 243;
			this.match(DaedalusParser.T__7);
			this.state = 245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DaedalusParser.T__8) {
				{
				this.state = 244;
				this.varArrayAssignment();
				}
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
	public varArrayAssignment(): VarArrayAssignmentContext {
		let _localctx: VarArrayAssignmentContext = new VarArrayAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, DaedalusParser.RULE_varArrayAssignment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 247;
			this.match(DaedalusParser.T__8);
			this.state = 248;
			this.match(DaedalusParser.T__2);
			this.state = 249;
			this.expression(0);
			this.state = 254;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DaedalusParser.T__1) {
				{
				{
				this.state = 250;
				this.match(DaedalusParser.T__1);
				this.state = 251;
				this.expression(0);
				}
				}
				this.state = 256;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 257;
			this.match(DaedalusParser.T__3);
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
	public varValueDecl(): VarValueDeclContext {
		let _localctx: VarValueDeclContext = new VarValueDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, DaedalusParser.RULE_varValueDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 259;
			this.nameNode();
			this.state = 261;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DaedalusParser.T__8) {
				{
				this.state = 260;
				this.varValueAssignment();
				}
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
	public varValueAssignment(): VarValueAssignmentContext {
		let _localctx: VarValueAssignmentContext = new VarValueAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, DaedalusParser.RULE_varValueAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 263;
			this.match(DaedalusParser.T__8);
			this.state = 264;
			this.expression(0);
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
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, DaedalusParser.RULE_parameterList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 266;
			this.match(DaedalusParser.T__4);
			this.state = 275;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DaedalusParser.Var) {
				{
				this.state = 267;
				this.parameterDecl();
				this.state = 272;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 268;
						this.match(DaedalusParser.T__1);
						this.state = 269;
						this.parameterDecl();
						}
						}
					}
					this.state = 274;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
				}
				}
			}

			this.state = 277;
			this.match(DaedalusParser.T__5);
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
	public parameterDecl(): ParameterDeclContext {
		let _localctx: ParameterDeclContext = new ParameterDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, DaedalusParser.RULE_parameterDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 279;
			this.match(DaedalusParser.Var);
			this.state = 280;
			this.dataType();
			this.state = 281;
			this.nameNode();
			this.state = 286;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DaedalusParser.T__6) {
				{
				this.state = 282;
				this.match(DaedalusParser.T__6);
				this.state = 283;
				this.arraySize();
				this.state = 284;
				this.match(DaedalusParser.T__7);
				}
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
	public statementBlock(): StatementBlockContext {
		let _localctx: StatementBlockContext = new StatementBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, DaedalusParser.RULE_statementBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 288;
			this.match(DaedalusParser.T__2);
			this.state = 303;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 299;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
					case 1:
						{
						{
						this.state = 289;
						this.statement();
						this.state = 290;
						this.match(DaedalusParser.T__0);
						}
						}
						break;

					case 2:
						{
						{
						this.state = 294;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case DaedalusParser.If:
							{
							this.state = 292;
							this.ifBlockStatement();
							}
							break;
						case DaedalusParser.While:
							{
							this.state = 293;
							this.whileStatement();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 297;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === DaedalusParser.T__0) {
							{
							this.state = 296;
							this.match(DaedalusParser.T__0);
							}
						}

						}
						}
						break;
					}
					}
					}
				}
				this.state = 305;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			}
			this.state = 306;
			this.match(DaedalusParser.T__3);
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, DaedalusParser.RULE_statement);
		try {
			this.state = 316;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 308;
				this.assignment();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 309;
				this.returnStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 310;
				this.constDef();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 311;
				this.varDecl();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 312;
				this.breakStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 313;
				this.continueStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 314;
				this.functionCall();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 315;
				this.expression(0);
				}
				break;
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
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, DaedalusParser.RULE_functionCall);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 318;
			this.nameNode();
			this.state = 319;
			this.match(DaedalusParser.T__4);
			this.state = 328;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DaedalusParser.T__4) | (1 << DaedalusParser.T__14) | (1 << DaedalusParser.T__15) | (1 << DaedalusParser.T__24) | (1 << DaedalusParser.T__25))) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (DaedalusParser.Null - 47)) | (1 << (DaedalusParser.NoFunc - 47)) | (1 << (DaedalusParser.While - 47)) | (1 << (DaedalusParser.Break - 47)) | (1 << (DaedalusParser.Continue - 47)) | (1 << (DaedalusParser.Identifier - 47)) | (1 << (DaedalusParser.IntegerLiteral - 47)) | (1 << (DaedalusParser.FloatLiteral - 47)) | (1 << (DaedalusParser.StringLiteral - 47)))) !== 0)) {
				{
				this.state = 320;
				this.expression(0);
				this.state = 325;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 321;
						this.match(DaedalusParser.T__1);
						this.state = 322;
						this.expression(0);
						}
						}
					}
					this.state = 327;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
				}
				}
			}

			this.state = 330;
			this.match(DaedalusParser.T__5);
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
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, DaedalusParser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 332;
			this.reference();
			this.state = 333;
			this.assignmentOperator();
			this.state = 334;
			this.expression(0);
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
	public elseBlock(): ElseBlockContext {
		let _localctx: ElseBlockContext = new ElseBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, DaedalusParser.RULE_elseBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 336;
			this.match(DaedalusParser.Else);
			this.state = 337;
			this.statementBlock();
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
	public elseIfBlock(): ElseIfBlockContext {
		let _localctx: ElseIfBlockContext = new ElseIfBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, DaedalusParser.RULE_elseIfBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 339;
			this.match(DaedalusParser.Else);
			this.state = 340;
			this.match(DaedalusParser.If);
			this.state = 341;
			_localctx._exp = this.expression(0);
			this.state = 342;
			_localctx._body = this.statementBlock();
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
	public ifBlock(): IfBlockContext {
		let _localctx: IfBlockContext = new IfBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, DaedalusParser.RULE_ifBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 344;
			this.match(DaedalusParser.If);
			this.state = 345;
			_localctx._exp = this.expression(0);
			this.state = 346;
			_localctx._body = this.statementBlock();
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
	public ifBlockStatement(): IfBlockStatementContext {
		let _localctx: IfBlockStatementContext = new IfBlockStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, DaedalusParser.RULE_ifBlockStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 348;
			this.ifBlock();
			this.state = 352;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 349;
					this.elseIfBlock();
					}
					}
				}
				this.state = 354;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			}
			this.state = 356;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DaedalusParser.Else) {
				{
				this.state = 355;
				this.elseBlock();
				}
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
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, DaedalusParser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 358;
			this.match(DaedalusParser.Return);
			this.state = 360;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DaedalusParser.T__4) | (1 << DaedalusParser.T__14) | (1 << DaedalusParser.T__15) | (1 << DaedalusParser.T__24) | (1 << DaedalusParser.T__25))) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (DaedalusParser.Null - 47)) | (1 << (DaedalusParser.NoFunc - 47)) | (1 << (DaedalusParser.While - 47)) | (1 << (DaedalusParser.Break - 47)) | (1 << (DaedalusParser.Continue - 47)) | (1 << (DaedalusParser.Identifier - 47)) | (1 << (DaedalusParser.IntegerLiteral - 47)) | (1 << (DaedalusParser.FloatLiteral - 47)) | (1 << (DaedalusParser.StringLiteral - 47)))) !== 0)) {
				{
				this.state = 359;
				this.expression(0);
				}
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
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, DaedalusParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 362;
			this.match(DaedalusParser.While);
			this.state = 363;
			this.match(DaedalusParser.T__4);
			this.state = 364;
			this.expression(0);
			this.state = 365;
			this.match(DaedalusParser.T__5);
			this.state = 366;
			this.statementBlock();
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
	public breakStatement(): BreakStatementContext {
		let _localctx: BreakStatementContext = new BreakStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, DaedalusParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 368;
			this.match(DaedalusParser.Break);
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
	public continueStatement(): ContinueStatementContext {
		let _localctx: ContinueStatementContext = new ContinueStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, DaedalusParser.RULE_continueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 370;
			this.match(DaedalusParser.Continue);
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

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 66;
		this.enterRecursionRule(_localctx, 66, DaedalusParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 381;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DaedalusParser.T__4:
				{
				_localctx = new BracketExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 373;
				this.match(DaedalusParser.T__4);
				this.state = 374;
				this.expression(0);
				this.state = 375;
				this.match(DaedalusParser.T__5);
				}
				break;
			case DaedalusParser.T__14:
			case DaedalusParser.T__15:
			case DaedalusParser.T__24:
			case DaedalusParser.T__25:
				{
				_localctx = new UnaryExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				{
				this.state = 377;
				(_localctx as UnaryExpressionContext)._oper = this.unaryOperator();
				}
				this.state = 378;
				(_localctx as UnaryExpressionContext)._right = this.expression(11);
				}
				break;
			case DaedalusParser.Null:
			case DaedalusParser.NoFunc:
			case DaedalusParser.While:
			case DaedalusParser.Break:
			case DaedalusParser.Continue:
			case DaedalusParser.Identifier:
			case DaedalusParser.IntegerLiteral:
			case DaedalusParser.FloatLiteral:
			case DaedalusParser.StringLiteral:
				{
				_localctx = new ValueExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 380;
				this.value();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 421;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 419;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
					case 1:
						{
						_localctx = new MultExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MultExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, DaedalusParser.RULE_expression);
						this.state = 383;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						{
						this.state = 384;
						(_localctx as MultExpressionContext)._oper = this.multOperator();
						}
						this.state = 385;
						(_localctx as MultExpressionContext)._right = this.expression(11);
						}
						break;

					case 2:
						{
						_localctx = new AddExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AddExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, DaedalusParser.RULE_expression);
						this.state = 387;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						{
						this.state = 388;
						(_localctx as AddExpressionContext)._oper = this.addOperator();
						}
						this.state = 389;
						(_localctx as AddExpressionContext)._right = this.expression(10);
						}
						break;

					case 3:
						{
						_localctx = new BitMoveExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BitMoveExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, DaedalusParser.RULE_expression);
						this.state = 391;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						{
						this.state = 392;
						(_localctx as BitMoveExpressionContext)._oper = this.bitMoveOperator();
						}
						this.state = 393;
						(_localctx as BitMoveExpressionContext)._right = this.expression(9);
						}
						break;

					case 4:
						{
						_localctx = new CompExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as CompExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, DaedalusParser.RULE_expression);
						this.state = 395;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						{
						this.state = 396;
						(_localctx as CompExpressionContext)._oper = this.compOperator();
						}
						this.state = 397;
						(_localctx as CompExpressionContext)._right = this.expression(8);
						}
						break;

					case 5:
						{
						_localctx = new EqExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, DaedalusParser.RULE_expression);
						this.state = 399;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						{
						this.state = 400;
						(_localctx as EqExpressionContext)._oper = this.eqOperator();
						}
						this.state = 401;
						(_localctx as EqExpressionContext)._right = this.expression(7);
						}
						break;

					case 6:
						{
						_localctx = new BinAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BinAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, DaedalusParser.RULE_expression);
						this.state = 403;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						{
						this.state = 404;
						(_localctx as BinAndExpressionContext)._oper = this.binAndOperator();
						}
						this.state = 405;
						(_localctx as BinAndExpressionContext)._right = this.expression(6);
						}
						break;

					case 7:
						{
						_localctx = new BinOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as BinOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, DaedalusParser.RULE_expression);
						this.state = 407;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						{
						this.state = 408;
						(_localctx as BinOrExpressionContext)._oper = this.binOrOperator();
						}
						this.state = 409;
						(_localctx as BinOrExpressionContext)._right = this.expression(5);
						}
						break;

					case 8:
						{
						_localctx = new LogAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, DaedalusParser.RULE_expression);
						this.state = 411;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						{
						this.state = 412;
						(_localctx as LogAndExpressionContext)._oper = this.logAndOperator();
						}
						this.state = 413;
						(_localctx as LogAndExpressionContext)._right = this.expression(4);
						}
						break;

					case 9:
						{
						_localctx = new LogOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as LogOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, DaedalusParser.RULE_expression);
						this.state = 415;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						{
						this.state = 416;
						(_localctx as LogOrExpressionContext)._oper = this.logOrOperator();
						}
						this.state = 417;
						(_localctx as LogOrExpressionContext)._right = this.expression(3);
						}
						break;
					}
					}
				}
				this.state = 423;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayIndex(): ArrayIndexContext {
		let _localctx: ArrayIndexContext = new ArrayIndexContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, DaedalusParser.RULE_arrayIndex);
		try {
			this.state = 426;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DaedalusParser.IntegerLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 424;
				this.match(DaedalusParser.IntegerLiteral);
				}
				break;
			case DaedalusParser.While:
			case DaedalusParser.Break:
			case DaedalusParser.Continue:
			case DaedalusParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 425;
				this.reference();
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
	public arraySize(): ArraySizeContext {
		let _localctx: ArraySizeContext = new ArraySizeContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, DaedalusParser.RULE_arraySize);
		try {
			this.state = 430;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DaedalusParser.IntegerLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 428;
				this.match(DaedalusParser.IntegerLiteral);
				}
				break;
			case DaedalusParser.While:
			case DaedalusParser.Break:
			case DaedalusParser.Continue:
			case DaedalusParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 429;
				this.reference();
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
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, DaedalusParser.RULE_value);
		try {
			this.state = 439;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				_localctx = new IntegerLiteralValueContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 432;
				this.match(DaedalusParser.IntegerLiteral);
				}
				break;

			case 2:
				_localctx = new FloatLiteralValueContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 433;
				this.match(DaedalusParser.FloatLiteral);
				}
				break;

			case 3:
				_localctx = new StringLiteralValueContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 434;
				this.match(DaedalusParser.StringLiteral);
				}
				break;

			case 4:
				_localctx = new NullLiteralValueContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 435;
				this.match(DaedalusParser.Null);
				}
				break;

			case 5:
				_localctx = new NoFuncLiteralValueContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 436;
				this.match(DaedalusParser.NoFunc);
				}
				break;

			case 6:
				_localctx = new FunctionCallValueContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 437;
				this.functionCall();
				}
				break;

			case 7:
				_localctx = new ReferenceValueContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 438;
				this.reference();
				}
				break;
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
	public referenceAtom(): ReferenceAtomContext {
		let _localctx: ReferenceAtomContext = new ReferenceAtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, DaedalusParser.RULE_referenceAtom);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 441;
			this.nameNode();
			this.state = 446;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				{
				this.state = 442;
				this.match(DaedalusParser.T__6);
				this.state = 443;
				this.arrayIndex();
				this.state = 444;
				this.match(DaedalusParser.T__7);
				}
				break;
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
	public reference(): ReferenceContext {
		let _localctx: ReferenceContext = new ReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, DaedalusParser.RULE_reference);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 448;
			this.referenceAtom();
			this.state = 453;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 449;
					this.match(DaedalusParser.T__9);
					this.state = 450;
					this.referenceAtom();
					}
					}
				}
				this.state = 455;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
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
	public dataType(): DataTypeContext {
		let _localctx: DataTypeContext = new DataTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, DaedalusParser.RULE_dataType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 456;
			_la = this._input.LA(1);
			if (!(((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (DaedalusParser.Int - 37)) | (1 << (DaedalusParser.Func - 37)) | (1 << (DaedalusParser.String - 37)) | (1 << (DaedalusParser.Void - 37)) | (1 << (DaedalusParser.Float - 37)) | (1 << (DaedalusParser.Instance - 37)) | (1 << (DaedalusParser.Identifier - 37)))) !== 0))) {
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
	public nameNode(): NameNodeContext {
		let _localctx: NameNodeContext = new NameNodeContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, DaedalusParser.RULE_nameNode);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 458;
			_la = this._input.LA(1);
			if (!(((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (DaedalusParser.While - 49)) | (1 << (DaedalusParser.Break - 49)) | (1 << (DaedalusParser.Continue - 49)) | (1 << (DaedalusParser.Identifier - 49)))) !== 0))) {
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
	public parentReference(): ParentReferenceContext {
		let _localctx: ParentReferenceContext = new ParentReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, DaedalusParser.RULE_parentReference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 460;
			this.match(DaedalusParser.Identifier);
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
	public assignmentOperator(): AssignmentOperatorContext {
		let _localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, DaedalusParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 462;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DaedalusParser.T__8) | (1 << DaedalusParser.T__10) | (1 << DaedalusParser.T__11) | (1 << DaedalusParser.T__12) | (1 << DaedalusParser.T__13))) !== 0))) {
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
	public addOperator(): AddOperatorContext {
		let _localctx: AddOperatorContext = new AddOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, DaedalusParser.RULE_addOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 464;
			_la = this._input.LA(1);
			if (!(_la === DaedalusParser.T__14 || _la === DaedalusParser.T__15)) {
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
	public bitMoveOperator(): BitMoveOperatorContext {
		let _localctx: BitMoveOperatorContext = new BitMoveOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, DaedalusParser.RULE_bitMoveOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 466;
			_la = this._input.LA(1);
			if (!(_la === DaedalusParser.T__16 || _la === DaedalusParser.T__17)) {
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
	public compOperator(): CompOperatorContext {
		let _localctx: CompOperatorContext = new CompOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, DaedalusParser.RULE_compOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 468;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DaedalusParser.T__18) | (1 << DaedalusParser.T__19) | (1 << DaedalusParser.T__20) | (1 << DaedalusParser.T__21))) !== 0))) {
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
	public eqOperator(): EqOperatorContext {
		let _localctx: EqOperatorContext = new EqOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, DaedalusParser.RULE_eqOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 470;
			_la = this._input.LA(1);
			if (!(_la === DaedalusParser.T__22 || _la === DaedalusParser.T__23)) {
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
	public unaryOperator(): UnaryOperatorContext {
		let _localctx: UnaryOperatorContext = new UnaryOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, DaedalusParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 472;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DaedalusParser.T__14) | (1 << DaedalusParser.T__15) | (1 << DaedalusParser.T__24) | (1 << DaedalusParser.T__25))) !== 0))) {
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
	public multOperator(): MultOperatorContext {
		let _localctx: MultOperatorContext = new MultOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, DaedalusParser.RULE_multOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 474;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DaedalusParser.T__26) | (1 << DaedalusParser.T__27) | (1 << DaedalusParser.T__28))) !== 0))) {
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
	public binAndOperator(): BinAndOperatorContext {
		let _localctx: BinAndOperatorContext = new BinAndOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, DaedalusParser.RULE_binAndOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 476;
			this.match(DaedalusParser.T__29);
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
	public binOrOperator(): BinOrOperatorContext {
		let _localctx: BinOrOperatorContext = new BinOrOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, DaedalusParser.RULE_binOrOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 478;
			this.match(DaedalusParser.T__30);
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
	public logAndOperator(): LogAndOperatorContext {
		let _localctx: LogAndOperatorContext = new LogAndOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, DaedalusParser.RULE_logAndOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 480;
			this.match(DaedalusParser.T__31);
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
	public logOrOperator(): LogOrOperatorContext {
		let _localctx: LogOrOperatorContext = new LogOrOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, DaedalusParser.RULE_logOrOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 482;
			this.match(DaedalusParser.T__32);
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 33:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 10);

		case 1:
			return this.precpred(this._ctx, 9);

		case 2:
			return this.precpred(this._ctx, 8);

		case 3:
			return this.precpred(this._ctx, 7);

		case 4:
			return this.precpred(this._ctx, 6);

		case 5:
			return this.precpred(this._ctx, 5);

		case 6:
			return this.precpred(this._ctx, 4);

		case 7:
			return this.precpred(this._ctx, 3);

		case 8:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03?\u01E7\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x03\x02\x03\x02\x07\x02o\n\x02\f\x02\x0E\x02r\v\x02" +
		"\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03z\n\x03\x03\x03" +
		"\x05\x03}\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\x83\n\x04\x03" +
		"\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05" +
		"\x07\x97\n\x07\x03\x07\x03\x07\x03\x07\x05\x07\x9C\n\x07\x07\x07\x9E\n" +
		"\x07\f\x07\x0E\x07\xA1\v\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b" +
		"\xA9\n\b\f\b\x0E\b\xAC\v\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03" +
		"\v\x07\v\xC2\n\v\f\v\x0E\v\xC5\v\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f" +
		"\x03\f\x03\f\x05\f\xCF\n\f\x03\f\x03\f\x03\f\x05\f\xD4\n\f\x07\f\xD6\n" +
		"\f\f\f\x0E\f\xD9\v\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xE6\n\x0E\f\x0E\x0E\x0E\xE9\v\x0E\x03" +
		"\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x05\x11\xF8\n\x11\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x07\x12\xFF\n\x12\f\x12\x0E\x12\u0102\v\x12\x03\x12\x03" +
		"\x12\x03\x13\x03\x13\x05\x13\u0108\n\x13\x03\x14\x03\x14\x03\x14\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x07\x15\u0111\n\x15\f\x15\x0E\x15\u0114\v\x15" +
		"\x05\x15\u0116\n\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x05\x16\u0121\n\x16\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x05\x17\u0129\n\x17\x03\x17\x05\x17\u012C\n\x17\x05\x17" +
		"\u012E\n\x17\x07\x17\u0130\n\x17\f\x17\x0E\x17\u0133\v\x17\x03\x17\x03" +
		"\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05" +
		"\x18\u013F\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u0146" +
		"\n\x19\f\x19\x0E\x19\u0149\v\x19\x05\x19\u014B\n\x19\x03\x19\x03\x19\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x07" +
		"\x1E\u0161\n\x1E\f\x1E\x0E\x1E\u0164\v\x1E\x03\x1E\x05\x1E\u0167\n\x1E" +
		"\x03\x1F\x03\x1F\x05\x1F\u016B\n\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x03" +
		"!\x03!\x03\"\x03\"\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x05#\u0180" +
		"\n#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03" +
		"#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03" +
		"#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x07#\u01A6\n#\f#\x0E#\u01A9" +
		"\v#\x03$\x03$\x05$\u01AD\n$\x03%\x03%\x05%\u01B1\n%\x03&\x03&\x03&\x03" +
		"&\x03&\x03&\x03&\x05&\u01BA\n&\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u01C1" +
		"\n\'\x03(\x03(\x03(\x07(\u01C6\n(\f(\x0E(\u01C9\v(\x03)\x03)\x03*\x03" +
		"*\x03+\x03+\x03,\x03,\x03-\x03-\x03.\x03.\x03/\x03/\x030\x030\x031\x03" +
		"1\x032\x032\x033\x033\x034\x034\x035\x035\x036\x036\x036\np\xAA\xC3\xE7" +
		"\u0112\u0131\u0147\u0162\x02\x03D7\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02" +
		"8\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02" +
		"T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02\x02\v\b" +
		"\x02\'\')*,,..0077\x04\x023577\x04\x02\v\v\r\x10\x03\x02\x11\x12\x03\x02" +
		"\x13\x14\x03\x02\x15\x18\x03\x02\x19\x1A\x04\x02\x11\x12\x1B\x1C\x03\x02" +
		"\x1D\x1F\x02\u01EE\x02p\x03\x02\x02\x02\x04y\x03\x02\x02\x02\x06\x82\x03" +
		"\x02\x02\x02\b\x86\x03\x02\x02\x02\n\x8C\x03\x02\x02\x02\f\x92\x03\x02" +
		"\x02\x02\x0E\xA2\x03\x02\x02\x02\x10\xAF\x03\x02\x02\x02\x12\xB6\x03\x02" +
		"\x02\x02\x14\xBD\x03\x02\x02\x02\x16\xCA\x03\x02\x02\x02\x18\xDA\x03\x02" +
		"\x02\x02\x1A\xE0\x03\x02\x02\x02\x1C\xEC\x03\x02\x02\x02\x1E\xEF\x03\x02" +
		"\x02\x02 \xF2\x03\x02\x02\x02\"\xF9\x03\x02\x02\x02$\u0105\x03\x02\x02" +
		"\x02&\u0109\x03\x02\x02\x02(\u010C\x03\x02\x02\x02*\u0119\x03\x02\x02" +
		"\x02,\u0122\x03\x02\x02\x02.\u013E\x03\x02\x02\x020\u0140\x03\x02\x02" +
		"\x022\u014E\x03\x02\x02\x024\u0152\x03\x02\x02\x026\u0155\x03\x02\x02" +
		"\x028\u015A\x03\x02\x02\x02:\u015E\x03\x02\x02\x02<\u0168\x03\x02\x02" +
		"\x02>\u016C\x03\x02\x02\x02@\u0172\x03\x02\x02\x02B\u0174\x03\x02\x02" +
		"\x02D\u017F\x03\x02\x02\x02F\u01AC\x03\x02\x02\x02H\u01B0\x03\x02\x02" +
		"\x02J\u01B9\x03\x02\x02\x02L\u01BB\x03\x02\x02\x02N\u01C2\x03\x02\x02" +
		"\x02P\u01CA\x03\x02\x02\x02R\u01CC\x03\x02\x02\x02T\u01CE\x03\x02\x02" +
		"\x02V\u01D0\x03\x02\x02\x02X\u01D2\x03\x02\x02\x02Z\u01D4\x03\x02\x02" +
		"\x02\\\u01D6\x03\x02\x02\x02^\u01D8\x03\x02\x02\x02`\u01DA\x03\x02\x02" +
		"\x02b\u01DC\x03\x02\x02\x02d\u01DE\x03\x02\x02\x02f\u01E0\x03\x02\x02" +
		"\x02h\u01E2\x03\x02\x02\x02j\u01E4\x03\x02\x02\x02lo\x05\x04\x03\x02m" +
		"o\x05\x06\x04\x02nl\x03\x02\x02\x02nm\x03\x02\x02\x02or\x03\x02\x02\x02" +
		"pq\x03\x02\x02\x02pn\x03\x02\x02\x02qs\x03\x02\x02\x02rp\x03\x02\x02\x02" +
		"st\x07\x02\x02\x03t\x03\x03\x02\x02\x02uz\x05\n\x06\x02vz\x05\x0E\b\x02" +
		"wz\x05\x10\t\x02xz\x05\x12\n\x02yu\x03\x02\x02\x02yv\x03\x02\x02\x02y" +
		"w\x03\x02\x02\x02yx\x03\x02\x02\x02z|\x03\x02\x02\x02{}\x07\x03\x02\x02" +
		"|{\x03\x02\x02\x02|}\x03\x02\x02\x02}\x05\x03\x02\x02\x02~\x83\x05\b\x05" +
		"\x02\x7F\x83\x05\f\x07\x02\x80\x83\x05\x16\f\x02\x81\x83\x05\x14\v\x02" +
		"\x82~\x03\x02\x02\x02\x82\x7F\x03\x02\x02\x02\x82\x80\x03\x02\x02\x02" +
		"\x82\x81\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x85\x07\x03\x02\x02" +
		"\x85\x07\x03\x02\x02\x02\x86\x87\x076\x02\x02\x87\x88\x07)\x02\x02\x88" +
		"\x89\x05P)\x02\x89\x8A\x05R*\x02\x8A\x8B\x05(\x15\x02\x8B\t\x03\x02\x02" +
		"\x02\x8C\x8D\x07)\x02\x02\x8D\x8E\x05P)\x02\x8E\x8F\x05R*\x02\x8F\x90" +
		"\x05(\x15\x02\x90\x91\x05,\x17\x02\x91\v\x03\x02\x02\x02\x92\x93\x07$" +
		"\x02\x02\x93\x96\x05P)\x02\x94\x97\x05\x1C\x0F\x02\x95\x97\x05\x18\r\x02" +
		"\x96\x94\x03\x02\x02\x02\x96\x95\x03\x02\x02\x02\x97\x9F\x03\x02\x02\x02" +
		"\x98\x9B\x07\x04\x02\x02\x99\x9C\x05\x1C\x0F\x02\x9A\x9C\x05\x18\r\x02" +
		"\x9B\x99\x03\x02\x02\x02\x9B\x9A\x03\x02\x02\x02\x9C\x9E\x03\x02\x02\x02" +
		"\x9D\x98\x03\x02\x02\x02\x9E\xA1\x03\x02\x02\x02\x9F\x9D\x03\x02\x02\x02" +
		"\x9F\xA0\x03\x02\x02\x02\xA0\r\x03\x02\x02\x02\xA1\x9F\x03\x02\x02\x02" +
		"\xA2\xA3\x07+\x02\x02\xA3\xA4\x05R*\x02\xA4\xAA\x07\x05\x02\x02\xA5\xA6" +
		"\x05\x16\f\x02\xA6\xA7\x07\x03\x02\x02\xA7\xA9\x03\x02\x02\x02\xA8\xA5" +
		"\x03\x02\x02\x02\xA9\xAC\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAA\xA8" +
		"\x03\x02\x02\x02\xAB\xAD\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAD\xAE" +
		"\x07\x06\x02\x02\xAE\x0F\x03\x02\x02\x02\xAF\xB0\x07/\x02\x02\xB0\xB1" +
		"\x05R*\x02\xB1\xB2\x07\x07\x02\x02\xB2\xB3\x05T+\x02\xB3\xB4\x07\b\x02" +
		"\x02\xB4\xB5\x05,\x17\x02\xB5\x11\x03\x02\x02\x02\xB6\xB7\x070\x02\x02" +
		"\xB7\xB8\x05R*\x02\xB8\xB9\x07\x07\x02\x02\xB9\xBA\x05T+\x02\xBA\xBB\x07" +
		"\b\x02\x02\xBB\xBC\x05,\x17\x02\xBC\x13\x03\x02\x02\x02\xBD\xBE\x070\x02" +
		"\x02\xBE\xC3\x05R*\x02\xBF\xC0\x07\x04\x02\x02\xC0\xC2\x05R*\x02\xC1\xBF" +
		"\x03\x02\x02\x02\xC2\xC5\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC3\xC1" +
		"\x03\x02\x02\x02\xC4\xC6\x03\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC6\xC7" +
		"\x07\x07\x02\x02\xC7\xC8\x05T+\x02\xC8\xC9\x07\b\x02\x02\xC9\x15\x03\x02" +
		"\x02\x02\xCA\xCB\x07%\x02\x02\xCB\xCE\x05P)\x02\xCC\xCF\x05$\x13\x02\xCD" +
		"\xCF\x05 \x11\x02\xCE\xCC\x03\x02\x02\x02\xCE\xCD\x03\x02\x02\x02\xCF" +
		"\xD7\x03\x02\x02\x02\xD0\xD3\x07\x04\x02\x02\xD1\xD4\x05$\x13\x02\xD2" +
		"\xD4\x05 \x11\x02\xD3\xD1\x03\x02\x02\x02\xD3\xD2\x03\x02\x02\x02\xD4" +
		"\xD6\x03\x02\x02\x02\xD5\xD0\x03\x02\x02\x02\xD6\xD9\x03\x02\x02\x02\xD7" +
		"\xD5\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\x17\x03\x02\x02\x02\xD9" +
		"\xD7\x03\x02\x02\x02\xDA\xDB\x05R*\x02\xDB\xDC\x07\t\x02\x02\xDC\xDD\x05" +
		"H%\x02\xDD\xDE\x07\n\x02\x02\xDE\xDF\x05\x1A\x0E\x02\xDF\x19\x03\x02\x02" +
		"\x02\xE0\xE1\x07\v\x02\x02\xE1\xE2\x07\x05\x02\x02\xE2\xE7\x05D#\x02\xE3" +
		"\xE4\x07\x04\x02\x02\xE4\xE6\x05D#\x02\xE5\xE3\x03\x02\x02\x02\xE6\xE9" +
		"\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE8\xEA" +
		"\x03\x02\x02\x02\xE9\xE7\x03\x02\x02\x02\xEA\xEB\x07\x06\x02\x02\xEB\x1B" +
		"\x03\x02\x02\x02\xEC\xED\x05R*\x02\xED\xEE\x05\x1E\x10\x02\xEE\x1D\x03" +
		"\x02\x02\x02\xEF\xF0\x07\v\x02\x02\xF0\xF1\x05D#\x02\xF1\x1F\x03\x02\x02" +
		"\x02\xF2\xF3\x05R*\x02\xF3\xF4\x07\t\x02\x02\xF4\xF5\x05H%\x02\xF5\xF7" +
		"\x07\n\x02\x02\xF6\xF8\x05\"\x12\x02\xF7\xF6\x03\x02\x02\x02\xF7\xF8\x03" +
		"\x02\x02\x02\xF8!\x03\x02\x02\x02\xF9\xFA\x07\v\x02\x02\xFA\xFB\x07\x05" +
		"\x02\x02\xFB\u0100\x05D#\x02\xFC\xFD\x07\x04\x02\x02\xFD\xFF\x05D#\x02" +
		"\xFE\xFC\x03\x02\x02\x02\xFF\u0102\x03\x02\x02\x02\u0100\xFE\x03\x02\x02" +
		"\x02\u0100\u0101\x03\x02\x02\x02\u0101\u0103\x03\x02\x02\x02\u0102\u0100" +
		"\x03\x02\x02\x02\u0103\u0104\x07\x06\x02\x02\u0104#\x03\x02\x02\x02\u0105" +
		"\u0107\x05R*\x02\u0106\u0108\x05&\x14\x02\u0107\u0106\x03\x02\x02\x02" +
		"\u0107\u0108\x03\x02\x02\x02\u0108%\x03\x02\x02\x02\u0109\u010A\x07\v" +
		"\x02\x02\u010A\u010B\x05D#\x02\u010B\'\x03\x02\x02\x02\u010C\u0115\x07" +
		"\x07\x02\x02\u010D\u0112\x05*\x16\x02\u010E\u010F\x07\x04\x02\x02\u010F" +
		"\u0111\x05*\x16\x02\u0110\u010E\x03\x02\x02\x02\u0111\u0114\x03\x02\x02" +
		"\x02\u0112\u0113\x03\x02\x02\x02\u0112\u0110\x03\x02\x02\x02\u0113\u0116" +
		"\x03\x02\x02\x02\u0114\u0112\x03\x02\x02\x02\u0115\u010D\x03\x02\x02\x02" +
		"\u0115\u0116\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117\u0118\x07" +
		"\b\x02\x02\u0118)\x03\x02\x02\x02\u0119\u011A\x07%\x02\x02\u011A\u011B" +
		"\x05P)\x02\u011B\u0120\x05R*\x02\u011C\u011D\x07\t\x02\x02\u011D\u011E" +
		"\x05H%\x02\u011E\u011F\x07\n\x02\x02\u011F\u0121\x03\x02\x02\x02\u0120" +
		"\u011C\x03\x02\x02\x02\u0120\u0121\x03\x02\x02\x02\u0121+\x03\x02\x02" +
		"\x02\u0122\u0131\x07\x05\x02\x02\u0123\u0124\x05.\x18\x02\u0124\u0125" +
		"\x07\x03\x02\x02\u0125\u012E\x03\x02\x02\x02\u0126\u0129\x05:\x1E\x02" +
		"\u0127\u0129\x05> \x02\u0128\u0126\x03\x02\x02\x02\u0128\u0127\x03\x02" +
		"\x02\x02\u0129\u012B\x03\x02\x02\x02\u012A\u012C\x07\x03\x02\x02\u012B" +
		"\u012A\x03\x02\x02\x02\u012B\u012C\x03\x02\x02\x02\u012C\u012E\x03\x02" +
		"\x02\x02\u012D\u0123\x03\x02\x02\x02\u012D\u0128\x03\x02\x02\x02\u012E" +
		"\u0130\x03\x02\x02\x02\u012F\u012D\x03\x02\x02\x02\u0130\u0133\x03\x02" +
		"\x02\x02\u0131\u0132\x03\x02\x02\x02\u0131\u012F\x03\x02\x02\x02\u0132" +
		"\u0134\x03\x02\x02\x02\u0133\u0131\x03\x02\x02\x02\u0134\u0135\x07\x06" +
		"\x02\x02\u0135-\x03\x02\x02\x02\u0136\u013F\x052\x1A\x02\u0137\u013F\x05" +
		"<\x1F\x02\u0138\u013F\x05\f\x07\x02\u0139\u013F\x05\x16\f\x02\u013A\u013F" +
		"\x05@!\x02\u013B\u013F\x05B\"\x02\u013C\u013F\x050\x19\x02\u013D\u013F" +
		"\x05D#\x02\u013E\u0136\x03\x02\x02\x02\u013E\u0137\x03\x02\x02\x02\u013E" +
		"\u0138\x03\x02\x02\x02\u013E\u0139\x03\x02\x02\x02\u013E\u013A\x03\x02" +
		"\x02\x02\u013E\u013B\x03\x02\x02\x02\u013E\u013C\x03\x02\x02\x02\u013E" +
		"\u013D\x03\x02\x02\x02\u013F/\x03\x02\x02\x02\u0140\u0141\x05R*\x02\u0141" +
		"\u014A\x07\x07\x02\x02\u0142\u0147\x05D#\x02\u0143\u0144\x07\x04\x02\x02" +
		"\u0144\u0146\x05D#\x02\u0145\u0143\x03\x02\x02\x02\u0146\u0149\x03\x02" +
		"\x02\x02\u0147\u0148\x03\x02\x02\x02\u0147\u0145\x03\x02\x02\x02\u0148" +
		"\u014B\x03\x02\x02\x02\u0149\u0147\x03\x02\x02\x02\u014A\u0142\x03\x02" +
		"\x02\x02\u014A\u014B\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C" +
		"\u014D\x07\b\x02\x02\u014D1\x03\x02\x02\x02\u014E\u014F\x05N(\x02\u014F" +
		"\u0150\x05V,\x02\u0150\u0151\x05D#\x02\u01513\x03\x02\x02\x02\u0152\u0153" +
		"\x07(\x02\x02\u0153\u0154\x05,\x17\x02\u01545\x03\x02\x02\x02\u0155\u0156" +
		"\x07(\x02\x02\u0156\u0157\x07&\x02\x02\u0157\u0158\x05D#\x02\u0158\u0159" +
		"\x05,\x17\x02\u01597\x03\x02\x02\x02\u015A\u015B\x07&\x02\x02\u015B\u015C" +
		"\x05D#\x02\u015C\u015D\x05,\x17\x02\u015D9\x03\x02\x02\x02\u015E\u0162" +
		"\x058\x1D\x02\u015F\u0161\x056\x1C\x02\u0160\u015F\x03\x02\x02\x02\u0161" +
		"\u0164\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02\u0162\u0160\x03\x02" +
		"\x02\x02\u0163\u0166\x03\x02\x02\x02\u0164\u0162\x03\x02\x02\x02\u0165" +
		"\u0167\x054\x1B\x02\u0166\u0165\x03\x02\x02\x02\u0166\u0167\x03\x02\x02" +
		"\x02\u0167;\x03\x02\x02\x02\u0168\u016A\x07-\x02\x02\u0169\u016B\x05D" +
		"#\x02\u016A\u0169\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B=\x03" +
		"\x02\x02\x02\u016C\u016D\x073\x02\x02\u016D\u016E\x07\x07\x02\x02\u016E" +
		"\u016F\x05D#\x02\u016F\u0170\x07\b\x02\x02\u0170\u0171\x05,\x17\x02\u0171" +
		"?\x03\x02\x02\x02\u0172\u0173\x074\x02\x02\u0173A\x03\x02\x02\x02\u0174" +
		"\u0175\x075\x02\x02\u0175C\x03\x02\x02\x02\u0176\u0177\b#\x01\x02\u0177" +
		"\u0178\x07\x07\x02\x02\u0178\u0179\x05D#\x02\u0179\u017A\x07\b\x02\x02" +
		"\u017A\u0180\x03\x02\x02\x02\u017B\u017C\x05`1\x02\u017C\u017D\x05D#\r" +
		"\u017D\u0180\x03\x02\x02\x02\u017E\u0180\x05J&\x02\u017F\u0176\x03\x02" +
		"\x02\x02\u017F\u017B\x03\x02\x02\x02\u017F\u017E\x03\x02\x02\x02\u0180" +
		"\u01A7\x03\x02\x02\x02\u0181\u0182\f\f\x02\x02\u0182\u0183\x05b2\x02\u0183" +
		"\u0184\x05D#\r\u0184\u01A6\x03\x02\x02\x02\u0185\u0186\f\v\x02\x02\u0186" +
		"\u0187\x05X-\x02\u0187\u0188\x05D#\f\u0188\u01A6\x03\x02\x02\x02\u0189" +
		"\u018A\f\n\x02\x02\u018A\u018B\x05Z.\x02\u018B\u018C\x05D#\v\u018C\u01A6" +
		"\x03\x02\x02\x02\u018D\u018E\f\t\x02\x02\u018E\u018F\x05\\/\x02\u018F" +
		"\u0190\x05D#\n\u0190\u01A6\x03\x02\x02\x02\u0191\u0192\f\b\x02\x02\u0192" +
		"\u0193\x05^0\x02\u0193\u0194\x05D#\t\u0194\u01A6\x03\x02\x02\x02\u0195" +
		"\u0196\f\x07\x02\x02\u0196\u0197\x05d3\x02\u0197\u0198\x05D#\b\u0198\u01A6" +
		"\x03\x02\x02\x02\u0199\u019A\f\x06\x02\x02\u019A\u019B\x05f4\x02\u019B" +
		"\u019C\x05D#\x07\u019C\u01A6\x03\x02\x02\x02\u019D\u019E\f\x05\x02\x02" +
		"\u019E\u019F\x05h5\x02\u019F\u01A0\x05D#\x06\u01A0\u01A6\x03\x02\x02\x02" +
		"\u01A1\u01A2\f\x04\x02\x02\u01A2\u01A3\x05j6\x02\u01A3\u01A4\x05D#\x05" +
		"\u01A4\u01A6\x03\x02\x02\x02\u01A5\u0181\x03\x02\x02\x02\u01A5\u0185\x03" +
		"\x02\x02\x02\u01A5\u0189\x03\x02\x02\x02\u01A5\u018D\x03\x02\x02\x02\u01A5" +
		"\u0191\x03\x02\x02\x02\u01A5\u0195\x03\x02\x02\x02\u01A5\u0199\x03\x02" +
		"\x02\x02\u01A5\u019D\x03\x02\x02\x02\u01A5\u01A1\x03\x02\x02\x02\u01A6" +
		"\u01A9\x03\x02\x02\x02\u01A7\u01A5\x03\x02\x02\x02\u01A7\u01A8\x03\x02" +
		"\x02\x02\u01A8E\x03\x02\x02\x02\u01A9\u01A7\x03\x02\x02\x02\u01AA\u01AD" +
		"\x078\x02\x02\u01AB\u01AD\x05N(\x02\u01AC\u01AA\x03\x02\x02\x02\u01AC" +
		"\u01AB\x03\x02\x02\x02\u01ADG\x03\x02\x02\x02\u01AE\u01B1\x078\x02\x02" +
		"\u01AF\u01B1\x05N(\x02\u01B0\u01AE\x03\x02\x02\x02\u01B0\u01AF\x03\x02" +
		"\x02\x02\u01B1I\x03\x02\x02\x02\u01B2\u01BA\x078\x02\x02\u01B3\u01BA\x07" +
		"9\x02\x02\u01B4\u01BA\x07:\x02\x02\u01B5\u01BA\x071\x02\x02\u01B6\u01BA" +
		"\x072\x02\x02\u01B7\u01BA\x050\x19\x02\u01B8\u01BA\x05N(\x02\u01B9\u01B2" +
		"\x03\x02\x02\x02\u01B9\u01B3\x03\x02\x02\x02\u01B9\u01B4\x03\x02\x02\x02" +
		"\u01B9\u01B5\x03\x02\x02\x02\u01B9\u01B6\x03\x02\x02\x02\u01B9\u01B7\x03" +
		"\x02\x02\x02\u01B9\u01B8\x03\x02\x02\x02\u01BAK\x03\x02\x02\x02\u01BB" +
		"\u01C0\x05R*\x02\u01BC\u01BD\x07\t\x02\x02\u01BD\u01BE\x05F$\x02\u01BE" +
		"\u01BF\x07\n\x02\x02\u01BF\u01C1\x03\x02\x02\x02\u01C0\u01BC\x03\x02\x02" +
		"\x02\u01C0\u01C1\x03\x02\x02\x02\u01C1M\x03\x02\x02\x02\u01C2\u01C7\x05" +
		"L\'\x02\u01C3\u01C4\x07\f\x02\x02\u01C4\u01C6\x05L\'\x02\u01C5\u01C3\x03" +
		"\x02\x02\x02\u01C6\u01C9\x03\x02\x02\x02\u01C7\u01C5\x03\x02\x02\x02\u01C7" +
		"\u01C8\x03\x02\x02\x02\u01C8O\x03\x02\x02\x02\u01C9\u01C7\x03\x02\x02" +
		"\x02\u01CA\u01CB\t\x02\x02\x02\u01CBQ\x03\x02\x02\x02\u01CC\u01CD\t\x03" +
		"\x02\x02\u01CDS\x03\x02\x02\x02\u01CE\u01CF\x077\x02\x02\u01CFU\x03\x02" +
		"\x02\x02\u01D0\u01D1\t\x04\x02\x02\u01D1W\x03\x02\x02\x02\u01D2\u01D3" +
		"\t\x05\x02\x02\u01D3Y\x03\x02\x02\x02\u01D4\u01D5\t\x06\x02\x02\u01D5" +
		"[\x03\x02\x02\x02\u01D6\u01D7\t\x07\x02\x02\u01D7]\x03\x02\x02\x02\u01D8" +
		"\u01D9\t\b\x02\x02\u01D9_\x03\x02\x02\x02\u01DA\u01DB\t\t\x02\x02\u01DB" +
		"a\x03\x02\x02\x02\u01DC\u01DD\t\n\x02\x02\u01DDc\x03\x02\x02\x02\u01DE" +
		"\u01DF\x07 \x02\x02\u01DFe\x03\x02\x02\x02\u01E0\u01E1\x07!\x02\x02\u01E1" +
		"g\x03\x02\x02\x02\u01E2\u01E3\x07\"\x02\x02\u01E3i\x03\x02\x02\x02\u01E4" +
		"\u01E5\x07#\x02\x02\u01E5k\x03\x02\x02\x02(npy|\x82\x96\x9B\x9F\xAA\xC3" +
		"\xCE\xD3\xD7\xE7\xF7\u0100\u0107\u0112\u0115\u0120\u0128\u012B\u012D\u0131" +
		"\u013E\u0147\u014A\u0162\u0166\u016A\u017F\u01A5\u01A7\u01AC\u01B0\u01B9" +
		"\u01C0\u01C7";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!DaedalusParser.__ATN) {
			DaedalusParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(DaedalusParser._serializedATN));
		}

		return DaedalusParser.__ATN;
	}

}

export class DaedalusFileContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(DaedalusParser.EOF, 0); }
	public blockDef(): BlockDefContext[];
	public blockDef(i: number): BlockDefContext;
	public blockDef(i?: number): BlockDefContext | BlockDefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockDefContext);
		} else {
			return this.getRuleContext(i, BlockDefContext);
		}
	}
	public inlineDef(): InlineDefContext[];
	public inlineDef(i: number): InlineDefContext;
	public inlineDef(i?: number): InlineDefContext | InlineDefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InlineDefContext);
		} else {
			return this.getRuleContext(i, InlineDefContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_daedalusFile; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterDaedalusFile) {
			listener.enterDaedalusFile(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitDaedalusFile) {
			listener.exitDaedalusFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitDaedalusFile) {
			return visitor.visitDaedalusFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockDefContext extends ParserRuleContext {
	public functionDef(): FunctionDefContext | undefined {
		return this.tryGetRuleContext(0, FunctionDefContext);
	}
	public classDef(): ClassDefContext | undefined {
		return this.tryGetRuleContext(0, ClassDefContext);
	}
	public prototypeDef(): PrototypeDefContext | undefined {
		return this.tryGetRuleContext(0, PrototypeDefContext);
	}
	public instanceDef(): InstanceDefContext | undefined {
		return this.tryGetRuleContext(0, InstanceDefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_blockDef; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterBlockDef) {
			listener.enterBlockDef(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitBlockDef) {
			listener.exitBlockDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitBlockDef) {
			return visitor.visitBlockDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InlineDefContext extends ParserRuleContext {
	public externFunctionDecl(): ExternFunctionDeclContext | undefined {
		return this.tryGetRuleContext(0, ExternFunctionDeclContext);
	}
	public constDef(): ConstDefContext | undefined {
		return this.tryGetRuleContext(0, ConstDefContext);
	}
	public varDecl(): VarDeclContext | undefined {
		return this.tryGetRuleContext(0, VarDeclContext);
	}
	public instanceDecl(): InstanceDeclContext | undefined {
		return this.tryGetRuleContext(0, InstanceDeclContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_inlineDef; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterInlineDef) {
			listener.enterInlineDef(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitInlineDef) {
			listener.exitInlineDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitInlineDef) {
			return visitor.visitInlineDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExternFunctionDeclContext extends ParserRuleContext {
	public Extern(): TerminalNode { return this.getToken(DaedalusParser.Extern, 0); }
	public Func(): TerminalNode { return this.getToken(DaedalusParser.Func, 0); }
	public dataType(): DataTypeContext {
		return this.getRuleContext(0, DataTypeContext);
	}
	public nameNode(): NameNodeContext {
		return this.getRuleContext(0, NameNodeContext);
	}
	public parameterList(): ParameterListContext {
		return this.getRuleContext(0, ParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_externFunctionDecl; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterExternFunctionDecl) {
			listener.enterExternFunctionDecl(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitExternFunctionDecl) {
			listener.exitExternFunctionDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitExternFunctionDecl) {
			return visitor.visitExternFunctionDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDefContext extends ParserRuleContext {
	public Func(): TerminalNode { return this.getToken(DaedalusParser.Func, 0); }
	public dataType(): DataTypeContext {
		return this.getRuleContext(0, DataTypeContext);
	}
	public nameNode(): NameNodeContext {
		return this.getRuleContext(0, NameNodeContext);
	}
	public parameterList(): ParameterListContext {
		return this.getRuleContext(0, ParameterListContext);
	}
	public statementBlock(): StatementBlockContext {
		return this.getRuleContext(0, StatementBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_functionDef; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterFunctionDef) {
			listener.enterFunctionDef(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitFunctionDef) {
			listener.exitFunctionDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitFunctionDef) {
			return visitor.visitFunctionDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstDefContext extends ParserRuleContext {
	public Const(): TerminalNode { return this.getToken(DaedalusParser.Const, 0); }
	public dataType(): DataTypeContext {
		return this.getRuleContext(0, DataTypeContext);
	}
	public constValueDef(): ConstValueDefContext[];
	public constValueDef(i: number): ConstValueDefContext;
	public constValueDef(i?: number): ConstValueDefContext | ConstValueDefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstValueDefContext);
		} else {
			return this.getRuleContext(i, ConstValueDefContext);
		}
	}
	public constArrayDef(): ConstArrayDefContext[];
	public constArrayDef(i: number): ConstArrayDefContext;
	public constArrayDef(i?: number): ConstArrayDefContext | ConstArrayDefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstArrayDefContext);
		} else {
			return this.getRuleContext(i, ConstArrayDefContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_constDef; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterConstDef) {
			listener.enterConstDef(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitConstDef) {
			listener.exitConstDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitConstDef) {
			return visitor.visitConstDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassDefContext extends ParserRuleContext {
	public Class(): TerminalNode { return this.getToken(DaedalusParser.Class, 0); }
	public nameNode(): NameNodeContext {
		return this.getRuleContext(0, NameNodeContext);
	}
	public varDecl(): VarDeclContext[];
	public varDecl(i: number): VarDeclContext;
	public varDecl(i?: number): VarDeclContext | VarDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarDeclContext);
		} else {
			return this.getRuleContext(i, VarDeclContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_classDef; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterClassDef) {
			listener.enterClassDef(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitClassDef) {
			listener.exitClassDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitClassDef) {
			return visitor.visitClassDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrototypeDefContext extends ParserRuleContext {
	public Prototype(): TerminalNode { return this.getToken(DaedalusParser.Prototype, 0); }
	public nameNode(): NameNodeContext {
		return this.getRuleContext(0, NameNodeContext);
	}
	public parentReference(): ParentReferenceContext {
		return this.getRuleContext(0, ParentReferenceContext);
	}
	public statementBlock(): StatementBlockContext {
		return this.getRuleContext(0, StatementBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_prototypeDef; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterPrototypeDef) {
			listener.enterPrototypeDef(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitPrototypeDef) {
			listener.exitPrototypeDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitPrototypeDef) {
			return visitor.visitPrototypeDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstanceDefContext extends ParserRuleContext {
	public Instance(): TerminalNode { return this.getToken(DaedalusParser.Instance, 0); }
	public nameNode(): NameNodeContext {
		return this.getRuleContext(0, NameNodeContext);
	}
	public parentReference(): ParentReferenceContext {
		return this.getRuleContext(0, ParentReferenceContext);
	}
	public statementBlock(): StatementBlockContext {
		return this.getRuleContext(0, StatementBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_instanceDef; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterInstanceDef) {
			listener.enterInstanceDef(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitInstanceDef) {
			listener.exitInstanceDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitInstanceDef) {
			return visitor.visitInstanceDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstanceDeclContext extends ParserRuleContext {
	public Instance(): TerminalNode { return this.getToken(DaedalusParser.Instance, 0); }
	public nameNode(): NameNodeContext[];
	public nameNode(i: number): NameNodeContext;
	public nameNode(i?: number): NameNodeContext | NameNodeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameNodeContext);
		} else {
			return this.getRuleContext(i, NameNodeContext);
		}
	}
	public parentReference(): ParentReferenceContext {
		return this.getRuleContext(0, ParentReferenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_instanceDecl; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterInstanceDecl) {
			listener.enterInstanceDecl(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitInstanceDecl) {
			listener.exitInstanceDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitInstanceDecl) {
			return visitor.visitInstanceDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarDeclContext extends ParserRuleContext {
	public Var(): TerminalNode { return this.getToken(DaedalusParser.Var, 0); }
	public dataType(): DataTypeContext {
		return this.getRuleContext(0, DataTypeContext);
	}
	public varValueDecl(): VarValueDeclContext[];
	public varValueDecl(i: number): VarValueDeclContext;
	public varValueDecl(i?: number): VarValueDeclContext | VarValueDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarValueDeclContext);
		} else {
			return this.getRuleContext(i, VarValueDeclContext);
		}
	}
	public varArrayDecl(): VarArrayDeclContext[];
	public varArrayDecl(i: number): VarArrayDeclContext;
	public varArrayDecl(i?: number): VarArrayDeclContext | VarArrayDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarArrayDeclContext);
		} else {
			return this.getRuleContext(i, VarArrayDeclContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_varDecl; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterVarDecl) {
			listener.enterVarDecl(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitVarDecl) {
			listener.exitVarDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitVarDecl) {
			return visitor.visitVarDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstArrayDefContext extends ParserRuleContext {
	public nameNode(): NameNodeContext {
		return this.getRuleContext(0, NameNodeContext);
	}
	public arraySize(): ArraySizeContext {
		return this.getRuleContext(0, ArraySizeContext);
	}
	public constArrayAssignment(): ConstArrayAssignmentContext {
		return this.getRuleContext(0, ConstArrayAssignmentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_constArrayDef; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterConstArrayDef) {
			listener.enterConstArrayDef(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitConstArrayDef) {
			listener.exitConstArrayDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitConstArrayDef) {
			return visitor.visitConstArrayDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstArrayAssignmentContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_constArrayAssignment; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterConstArrayAssignment) {
			listener.enterConstArrayAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitConstArrayAssignment) {
			listener.exitConstArrayAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitConstArrayAssignment) {
			return visitor.visitConstArrayAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstValueDefContext extends ParserRuleContext {
	public nameNode(): NameNodeContext {
		return this.getRuleContext(0, NameNodeContext);
	}
	public constValueAssignment(): ConstValueAssignmentContext {
		return this.getRuleContext(0, ConstValueAssignmentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_constValueDef; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterConstValueDef) {
			listener.enterConstValueDef(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitConstValueDef) {
			listener.exitConstValueDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitConstValueDef) {
			return visitor.visitConstValueDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstValueAssignmentContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_constValueAssignment; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterConstValueAssignment) {
			listener.enterConstValueAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitConstValueAssignment) {
			listener.exitConstValueAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitConstValueAssignment) {
			return visitor.visitConstValueAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarArrayDeclContext extends ParserRuleContext {
	public nameNode(): NameNodeContext {
		return this.getRuleContext(0, NameNodeContext);
	}
	public arraySize(): ArraySizeContext {
		return this.getRuleContext(0, ArraySizeContext);
	}
	public varArrayAssignment(): VarArrayAssignmentContext | undefined {
		return this.tryGetRuleContext(0, VarArrayAssignmentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_varArrayDecl; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterVarArrayDecl) {
			listener.enterVarArrayDecl(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitVarArrayDecl) {
			listener.exitVarArrayDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitVarArrayDecl) {
			return visitor.visitVarArrayDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarArrayAssignmentContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_varArrayAssignment; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterVarArrayAssignment) {
			listener.enterVarArrayAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitVarArrayAssignment) {
			listener.exitVarArrayAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitVarArrayAssignment) {
			return visitor.visitVarArrayAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarValueDeclContext extends ParserRuleContext {
	public nameNode(): NameNodeContext {
		return this.getRuleContext(0, NameNodeContext);
	}
	public varValueAssignment(): VarValueAssignmentContext | undefined {
		return this.tryGetRuleContext(0, VarValueAssignmentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_varValueDecl; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterVarValueDecl) {
			listener.enterVarValueDecl(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitVarValueDecl) {
			listener.exitVarValueDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitVarValueDecl) {
			return visitor.visitVarValueDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarValueAssignmentContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_varValueAssignment; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterVarValueAssignment) {
			listener.enterVarValueAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitVarValueAssignment) {
			listener.exitVarValueAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitVarValueAssignment) {
			return visitor.visitVarValueAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	public parameterDecl(): ParameterDeclContext[];
	public parameterDecl(i: number): ParameterDeclContext;
	public parameterDecl(i?: number): ParameterDeclContext | ParameterDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterDeclContext);
		} else {
			return this.getRuleContext(i, ParameterDeclContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_parameterList; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterParameterList) {
			listener.enterParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitParameterList) {
			listener.exitParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitParameterList) {
			return visitor.visitParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterDeclContext extends ParserRuleContext {
	public Var(): TerminalNode { return this.getToken(DaedalusParser.Var, 0); }
	public dataType(): DataTypeContext {
		return this.getRuleContext(0, DataTypeContext);
	}
	public nameNode(): NameNodeContext {
		return this.getRuleContext(0, NameNodeContext);
	}
	public arraySize(): ArraySizeContext | undefined {
		return this.tryGetRuleContext(0, ArraySizeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_parameterDecl; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterParameterDecl) {
			listener.enterParameterDecl(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitParameterDecl) {
			listener.exitParameterDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitParameterDecl) {
			return visitor.visitParameterDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementBlockContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public ifBlockStatement(): IfBlockStatementContext[];
	public ifBlockStatement(i: number): IfBlockStatementContext;
	public ifBlockStatement(i?: number): IfBlockStatementContext | IfBlockStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IfBlockStatementContext);
		} else {
			return this.getRuleContext(i, IfBlockStatementContext);
		}
	}
	public whileStatement(): WhileStatementContext[];
	public whileStatement(i: number): WhileStatementContext;
	public whileStatement(i?: number): WhileStatementContext | WhileStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WhileStatementContext);
		} else {
			return this.getRuleContext(i, WhileStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_statementBlock; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterStatementBlock) {
			listener.enterStatementBlock(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitStatementBlock) {
			listener.exitStatementBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitStatementBlock) {
			return visitor.visitStatementBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public constDef(): ConstDefContext | undefined {
		return this.tryGetRuleContext(0, ConstDefContext);
	}
	public varDecl(): VarDeclContext | undefined {
		return this.tryGetRuleContext(0, VarDeclContext);
	}
	public breakStatement(): BreakStatementContext | undefined {
		return this.tryGetRuleContext(0, BreakStatementContext);
	}
	public continueStatement(): ContinueStatementContext | undefined {
		return this.tryGetRuleContext(0, ContinueStatementContext);
	}
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_statement; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public nameNode(): NameNodeContext {
		return this.getRuleContext(0, NameNodeContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_functionCall; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public reference(): ReferenceContext {
		return this.getRuleContext(0, ReferenceContext);
	}
	public assignmentOperator(): AssignmentOperatorContext {
		return this.getRuleContext(0, AssignmentOperatorContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_assignment; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseBlockContext extends ParserRuleContext {
	public Else(): TerminalNode { return this.getToken(DaedalusParser.Else, 0); }
	public statementBlock(): StatementBlockContext {
		return this.getRuleContext(0, StatementBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_elseBlock; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterElseBlock) {
			listener.enterElseBlock(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitElseBlock) {
			listener.exitElseBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitElseBlock) {
			return visitor.visitElseBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseIfBlockContext extends ParserRuleContext {
	public _exp!: ExpressionContext;
	public _body!: StatementBlockContext;
	public Else(): TerminalNode { return this.getToken(DaedalusParser.Else, 0); }
	public If(): TerminalNode { return this.getToken(DaedalusParser.If, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statementBlock(): StatementBlockContext {
		return this.getRuleContext(0, StatementBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_elseIfBlock; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterElseIfBlock) {
			listener.enterElseIfBlock(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitElseIfBlock) {
			listener.exitElseIfBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitElseIfBlock) {
			return visitor.visitElseIfBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfBlockContext extends ParserRuleContext {
	public _exp!: ExpressionContext;
	public _body!: StatementBlockContext;
	public If(): TerminalNode { return this.getToken(DaedalusParser.If, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statementBlock(): StatementBlockContext {
		return this.getRuleContext(0, StatementBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_ifBlock; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterIfBlock) {
			listener.enterIfBlock(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitIfBlock) {
			listener.exitIfBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitIfBlock) {
			return visitor.visitIfBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfBlockStatementContext extends ParserRuleContext {
	public ifBlock(): IfBlockContext {
		return this.getRuleContext(0, IfBlockContext);
	}
	public elseIfBlock(): ElseIfBlockContext[];
	public elseIfBlock(i: number): ElseIfBlockContext;
	public elseIfBlock(i?: number): ElseIfBlockContext | ElseIfBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElseIfBlockContext);
		} else {
			return this.getRuleContext(i, ElseIfBlockContext);
		}
	}
	public elseBlock(): ElseBlockContext | undefined {
		return this.tryGetRuleContext(0, ElseBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_ifBlockStatement; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterIfBlockStatement) {
			listener.enterIfBlockStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitIfBlockStatement) {
			listener.exitIfBlockStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitIfBlockStatement) {
			return visitor.visitIfBlockStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public Return(): TerminalNode { return this.getToken(DaedalusParser.Return, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_returnStatement; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	public While(): TerminalNode { return this.getToken(DaedalusParser.While, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statementBlock(): StatementBlockContext {
		return this.getRuleContext(0, StatementBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_whileStatement; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	public Break(): TerminalNode { return this.getToken(DaedalusParser.Break, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_breakStatement; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterBreakStatement) {
			listener.enterBreakStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitBreakStatement) {
			listener.exitBreakStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	public Continue(): TerminalNode { return this.getToken(DaedalusParser.Continue, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_continueStatement; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterContinueStatement) {
			listener.enterContinueStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitContinueStatement) {
			listener.exitContinueStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitContinueStatement) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class BracketExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterBracketExpression) {
			listener.enterBracketExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitBracketExpression) {
			listener.exitBracketExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitBracketExpression) {
			return visitor.visitBracketExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryExpressionContext extends ExpressionContext {
	public _oper!: UnaryOperatorContext;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public unaryOperator(): UnaryOperatorContext | undefined {
		return this.tryGetRuleContext(0, UnaryOperatorContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterUnaryExpression) {
			listener.enterUnaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitUnaryExpression) {
			listener.exitUnaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitUnaryExpression) {
			return visitor.visitUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _oper!: MultOperatorContext;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public multOperator(): MultOperatorContext | undefined {
		return this.tryGetRuleContext(0, MultOperatorContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterMultExpression) {
			listener.enterMultExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitMultExpression) {
			listener.exitMultExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitMultExpression) {
			return visitor.visitMultExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _oper!: AddOperatorContext;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public addOperator(): AddOperatorContext | undefined {
		return this.tryGetRuleContext(0, AddOperatorContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterAddExpression) {
			listener.enterAddExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitAddExpression) {
			listener.exitAddExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitAddExpression) {
			return visitor.visitAddExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitMoveExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _oper!: BitMoveOperatorContext;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public bitMoveOperator(): BitMoveOperatorContext | undefined {
		return this.tryGetRuleContext(0, BitMoveOperatorContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterBitMoveExpression) {
			listener.enterBitMoveExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitBitMoveExpression) {
			listener.exitBitMoveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitBitMoveExpression) {
			return visitor.visitBitMoveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CompExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _oper!: CompOperatorContext;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public compOperator(): CompOperatorContext | undefined {
		return this.tryGetRuleContext(0, CompOperatorContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterCompExpression) {
			listener.enterCompExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitCompExpression) {
			listener.exitCompExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitCompExpression) {
			return visitor.visitCompExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _oper!: EqOperatorContext;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public eqOperator(): EqOperatorContext | undefined {
		return this.tryGetRuleContext(0, EqOperatorContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterEqExpression) {
			listener.enterEqExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitEqExpression) {
			listener.exitEqExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitEqExpression) {
			return visitor.visitEqExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BinAndExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _oper!: BinAndOperatorContext;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public binAndOperator(): BinAndOperatorContext | undefined {
		return this.tryGetRuleContext(0, BinAndOperatorContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterBinAndExpression) {
			listener.enterBinAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitBinAndExpression) {
			listener.exitBinAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitBinAndExpression) {
			return visitor.visitBinAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BinOrExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _oper!: BinOrOperatorContext;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public binOrOperator(): BinOrOperatorContext | undefined {
		return this.tryGetRuleContext(0, BinOrOperatorContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterBinOrExpression) {
			listener.enterBinOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitBinOrExpression) {
			listener.exitBinOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitBinOrExpression) {
			return visitor.visitBinOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogAndExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _oper!: LogAndOperatorContext;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public logAndOperator(): LogAndOperatorContext | undefined {
		return this.tryGetRuleContext(0, LogAndOperatorContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterLogAndExpression) {
			listener.enterLogAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitLogAndExpression) {
			listener.exitLogAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitLogAndExpression) {
			return visitor.visitLogAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogOrExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _oper!: LogOrOperatorContext;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public logOrOperator(): LogOrOperatorContext | undefined {
		return this.tryGetRuleContext(0, LogOrOperatorContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterLogOrExpression) {
			listener.enterLogOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitLogOrExpression) {
			listener.exitLogOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitLogOrExpression) {
			return visitor.visitLogOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ValueExpressionContext extends ExpressionContext {
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterValueExpression) {
			listener.enterValueExpression(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitValueExpression) {
			listener.exitValueExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitValueExpression) {
			return visitor.visitValueExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayIndexContext extends ParserRuleContext {
	public IntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(DaedalusParser.IntegerLiteral, 0); }
	public reference(): ReferenceContext | undefined {
		return this.tryGetRuleContext(0, ReferenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_arrayIndex; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterArrayIndex) {
			listener.enterArrayIndex(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitArrayIndex) {
			listener.exitArrayIndex(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitArrayIndex) {
			return visitor.visitArrayIndex(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArraySizeContext extends ParserRuleContext {
	public IntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(DaedalusParser.IntegerLiteral, 0); }
	public reference(): ReferenceContext | undefined {
		return this.tryGetRuleContext(0, ReferenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_arraySize; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterArraySize) {
			listener.enterArraySize(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitArraySize) {
			listener.exitArraySize(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitArraySize) {
			return visitor.visitArraySize(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_value; }
	public copyFrom(ctx: ValueContext): void {
		super.copyFrom(ctx);
	}
}
export class IntegerLiteralValueContext extends ValueContext {
	public IntegerLiteral(): TerminalNode { return this.getToken(DaedalusParser.IntegerLiteral, 0); }
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterIntegerLiteralValue) {
			listener.enterIntegerLiteralValue(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitIntegerLiteralValue) {
			listener.exitIntegerLiteralValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitIntegerLiteralValue) {
			return visitor.visitIntegerLiteralValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FloatLiteralValueContext extends ValueContext {
	public FloatLiteral(): TerminalNode { return this.getToken(DaedalusParser.FloatLiteral, 0); }
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterFloatLiteralValue) {
			listener.enterFloatLiteralValue(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitFloatLiteralValue) {
			listener.exitFloatLiteralValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitFloatLiteralValue) {
			return visitor.visitFloatLiteralValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringLiteralValueContext extends ValueContext {
	public StringLiteral(): TerminalNode { return this.getToken(DaedalusParser.StringLiteral, 0); }
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterStringLiteralValue) {
			listener.enterStringLiteralValue(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitStringLiteralValue) {
			listener.exitStringLiteralValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitStringLiteralValue) {
			return visitor.visitStringLiteralValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NullLiteralValueContext extends ValueContext {
	public Null(): TerminalNode { return this.getToken(DaedalusParser.Null, 0); }
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterNullLiteralValue) {
			listener.enterNullLiteralValue(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitNullLiteralValue) {
			listener.exitNullLiteralValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitNullLiteralValue) {
			return visitor.visitNullLiteralValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NoFuncLiteralValueContext extends ValueContext {
	public NoFunc(): TerminalNode { return this.getToken(DaedalusParser.NoFunc, 0); }
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterNoFuncLiteralValue) {
			listener.enterNoFuncLiteralValue(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitNoFuncLiteralValue) {
			listener.exitNoFuncLiteralValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitNoFuncLiteralValue) {
			return visitor.visitNoFuncLiteralValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallValueContext extends ValueContext {
	public functionCall(): FunctionCallContext {
		return this.getRuleContext(0, FunctionCallContext);
	}
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterFunctionCallValue) {
			listener.enterFunctionCallValue(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitFunctionCallValue) {
			listener.exitFunctionCallValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitFunctionCallValue) {
			return visitor.visitFunctionCallValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ReferenceValueContext extends ValueContext {
	public reference(): ReferenceContext {
		return this.getRuleContext(0, ReferenceContext);
	}
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterReferenceValue) {
			listener.enterReferenceValue(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitReferenceValue) {
			listener.exitReferenceValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitReferenceValue) {
			return visitor.visitReferenceValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReferenceAtomContext extends ParserRuleContext {
	public nameNode(): NameNodeContext {
		return this.getRuleContext(0, NameNodeContext);
	}
	public arrayIndex(): ArrayIndexContext | undefined {
		return this.tryGetRuleContext(0, ArrayIndexContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_referenceAtom; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterReferenceAtom) {
			listener.enterReferenceAtom(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitReferenceAtom) {
			listener.exitReferenceAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitReferenceAtom) {
			return visitor.visitReferenceAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReferenceContext extends ParserRuleContext {
	public referenceAtom(): ReferenceAtomContext[];
	public referenceAtom(i: number): ReferenceAtomContext;
	public referenceAtom(i?: number): ReferenceAtomContext | ReferenceAtomContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ReferenceAtomContext);
		} else {
			return this.getRuleContext(i, ReferenceAtomContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_reference; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterReference) {
			listener.enterReference(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitReference) {
			listener.exitReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitReference) {
			return visitor.visitReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataTypeContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(DaedalusParser.Identifier, 0); }
	public Void(): TerminalNode | undefined { return this.tryGetToken(DaedalusParser.Void, 0); }
	public Int(): TerminalNode | undefined { return this.tryGetToken(DaedalusParser.Int, 0); }
	public Float(): TerminalNode | undefined { return this.tryGetToken(DaedalusParser.Float, 0); }
	public String(): TerminalNode | undefined { return this.tryGetToken(DaedalusParser.String, 0); }
	public Func(): TerminalNode | undefined { return this.tryGetToken(DaedalusParser.Func, 0); }
	public Instance(): TerminalNode | undefined { return this.tryGetToken(DaedalusParser.Instance, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_dataType; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterDataType) {
			listener.enterDataType(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitDataType) {
			listener.exitDataType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitDataType) {
			return visitor.visitDataType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameNodeContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(DaedalusParser.Identifier, 0); }
	public While(): TerminalNode | undefined { return this.tryGetToken(DaedalusParser.While, 0); }
	public Break(): TerminalNode | undefined { return this.tryGetToken(DaedalusParser.Break, 0); }
	public Continue(): TerminalNode | undefined { return this.tryGetToken(DaedalusParser.Continue, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_nameNode; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterNameNode) {
			listener.enterNameNode(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitNameNode) {
			listener.exitNameNode(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitNameNode) {
			return visitor.visitNameNode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParentReferenceContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(DaedalusParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_parentReference; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterParentReference) {
			listener.enterParentReference(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitParentReference) {
			listener.exitParentReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitParentReference) {
			return visitor.visitParentReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_assignmentOperator; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterAssignmentOperator) {
			listener.enterAssignmentOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitAssignmentOperator) {
			listener.exitAssignmentOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitAssignmentOperator) {
			return visitor.visitAssignmentOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_addOperator; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterAddOperator) {
			listener.enterAddOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitAddOperator) {
			listener.exitAddOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitAddOperator) {
			return visitor.visitAddOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BitMoveOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_bitMoveOperator; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterBitMoveOperator) {
			listener.enterBitMoveOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitBitMoveOperator) {
			listener.exitBitMoveOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitBitMoveOperator) {
			return visitor.visitBitMoveOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_compOperator; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterCompOperator) {
			listener.enterCompOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitCompOperator) {
			listener.exitCompOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitCompOperator) {
			return visitor.visitCompOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EqOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_eqOperator; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterEqOperator) {
			listener.enterEqOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitEqOperator) {
			listener.exitEqOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitEqOperator) {
			return visitor.visitEqOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_unaryOperator; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterUnaryOperator) {
			listener.enterUnaryOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitUnaryOperator) {
			listener.exitUnaryOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitUnaryOperator) {
			return visitor.visitUnaryOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_multOperator; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterMultOperator) {
			listener.enterMultOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitMultOperator) {
			listener.exitMultOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitMultOperator) {
			return visitor.visitMultOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinAndOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_binAndOperator; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterBinAndOperator) {
			listener.enterBinAndOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitBinAndOperator) {
			listener.exitBinAndOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitBinAndOperator) {
			return visitor.visitBinAndOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinOrOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_binOrOperator; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterBinOrOperator) {
			listener.enterBinOrOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitBinOrOperator) {
			listener.exitBinOrOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitBinOrOperator) {
			return visitor.visitBinOrOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogAndOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_logAndOperator; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterLogAndOperator) {
			listener.enterLogAndOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitLogAndOperator) {
			listener.exitLogAndOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitLogAndOperator) {
			return visitor.visitLogAndOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogOrOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DaedalusParser.RULE_logOrOperator; }
	// @Override
	public enterRule(listener: DaedalusListener): void {
		if (listener.enterLogOrOperator) {
			listener.enterLogOrOperator(this);
		}
	}
	// @Override
	public exitRule(listener: DaedalusListener): void {
		if (listener.exitLogOrOperator) {
			listener.exitLogOrOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DaedalusVisitor<Result>): Result {
		if (visitor.visitLogOrOperator) {
			return visitor.visitLogOrOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


