// Generated from /Users/sunbro.marko/Documents/_MY_GAMES_PROJECTS/UTILS/DAEDALUS_TRANSLATOR/daedalus_parser/grammar/Daedalus.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class DaedalusParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, T__30=31, 
		T__31=32, T__32=33, Const=34, Var=35, If=36, Int=37, Else=38, Func=39, 
		String=40, Class=41, Void=42, Return=43, Float=44, Prototype=45, Instance=46, 
		Null=47, NoFunc=48, While=49, Break=50, Continue=51, Extern=52, Identifier=53, 
		IntegerLiteral=54, FloatLiteral=55, StringLiteral=56, Whitespace=57, Newline=58, 
		BlockComment=59, LineComment=60, UnexpectedCharacter=61;
	public static final int
		RULE_daedalusFile = 0, RULE_blockDef = 1, RULE_inlineDef = 2, RULE_externFunctionDecl = 3, 
		RULE_functionDef = 4, RULE_constDef = 5, RULE_classDef = 6, RULE_prototypeDef = 7, 
		RULE_instanceDef = 8, RULE_instanceDecl = 9, RULE_varDecl = 10, RULE_constArrayDef = 11, 
		RULE_constArrayAssignment = 12, RULE_constValueDef = 13, RULE_constValueAssignment = 14, 
		RULE_varArrayDecl = 15, RULE_varArrayAssignment = 16, RULE_varValueDecl = 17, 
		RULE_varValueAssignment = 18, RULE_parameterList = 19, RULE_parameterDecl = 20, 
		RULE_statementBlock = 21, RULE_statement = 22, RULE_functionCall = 23, 
		RULE_assignment = 24, RULE_elseBlock = 25, RULE_elseIfBlock = 26, RULE_ifBlock = 27, 
		RULE_ifBlockStatement = 28, RULE_returnStatement = 29, RULE_whileStatement = 30, 
		RULE_breakStatement = 31, RULE_continueStatement = 32, RULE_expression = 33, 
		RULE_arrayIndex = 34, RULE_arraySize = 35, RULE_value = 36, RULE_referenceAtom = 37, 
		RULE_reference = 38, RULE_dataType = 39, RULE_nameNode = 40, RULE_parentReference = 41, 
		RULE_assignmentOperator = 42, RULE_addOperator = 43, RULE_bitMoveOperator = 44, 
		RULE_compOperator = 45, RULE_eqOperator = 46, RULE_unaryOperator = 47, 
		RULE_multOperator = 48, RULE_binAndOperator = 49, RULE_binOrOperator = 50, 
		RULE_logAndOperator = 51, RULE_logOrOperator = 52;
	private static String[] makeRuleNames() {
		return new String[] {
			"daedalusFile", "blockDef", "inlineDef", "externFunctionDecl", "functionDef", 
			"constDef", "classDef", "prototypeDef", "instanceDef", "instanceDecl", 
			"varDecl", "constArrayDef", "constArrayAssignment", "constValueDef", 
			"constValueAssignment", "varArrayDecl", "varArrayAssignment", "varValueDecl", 
			"varValueAssignment", "parameterList", "parameterDecl", "statementBlock", 
			"statement", "functionCall", "assignment", "elseBlock", "elseIfBlock", 
			"ifBlock", "ifBlockStatement", "returnStatement", "whileStatement", "breakStatement", 
			"continueStatement", "expression", "arrayIndex", "arraySize", "value", 
			"referenceAtom", "reference", "dataType", "nameNode", "parentReference", 
			"assignmentOperator", "addOperator", "bitMoveOperator", "compOperator", 
			"eqOperator", "unaryOperator", "multOperator", "binAndOperator", "binOrOperator", 
			"logAndOperator", "logOrOperator"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "';'", "','", "'{'", "'}'", "'('", "')'", "'['", "']'", "'='", 
			"'.'", "'+='", "'-='", "'*='", "'/='", "'+'", "'-'", "'<<'", "'>>'", 
			"'<'", "'>'", "'<='", "'>='", "'=='", "'!='", "'!'", "'~'", "'*'", "'/'", 
			"'%'", "'&'", "'|'", "'&&'", "'||'", null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, "'while'", "'break'", 
			"'continue'", "'extern'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, "Const", 
			"Var", "If", "Int", "Else", "Func", "String", "Class", "Void", "Return", 
			"Float", "Prototype", "Instance", "Null", "NoFunc", "While", "Break", 
			"Continue", "Extern", "Identifier", "IntegerLiteral", "FloatLiteral", 
			"StringLiteral", "Whitespace", "Newline", "BlockComment", "LineComment", 
			"UnexpectedCharacter"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Daedalus.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public DaedalusParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class DaedalusFileContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(DaedalusParser.EOF, 0); }
		public List<BlockDefContext> blockDef() {
			return getRuleContexts(BlockDefContext.class);
		}
		public BlockDefContext blockDef(int i) {
			return getRuleContext(BlockDefContext.class,i);
		}
		public List<InlineDefContext> inlineDef() {
			return getRuleContexts(InlineDefContext.class);
		}
		public InlineDefContext inlineDef(int i) {
			return getRuleContext(InlineDefContext.class,i);
		}
		public DaedalusFileContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_daedalusFile; }
	}

	public final DaedalusFileContext daedalusFile() throws RecognitionException {
		DaedalusFileContext _localctx = new DaedalusFileContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_daedalusFile);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(110);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
			while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1+1 ) {
					{
					setState(108);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
					case 1:
						{
						setState(106);
						blockDef();
						}
						break;
					case 2:
						{
						setState(107);
						inlineDef();
						}
						break;
					}
					} 
				}
				setState(112);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
			}
			setState(113);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BlockDefContext extends ParserRuleContext {
		public FunctionDefContext functionDef() {
			return getRuleContext(FunctionDefContext.class,0);
		}
		public ClassDefContext classDef() {
			return getRuleContext(ClassDefContext.class,0);
		}
		public PrototypeDefContext prototypeDef() {
			return getRuleContext(PrototypeDefContext.class,0);
		}
		public InstanceDefContext instanceDef() {
			return getRuleContext(InstanceDefContext.class,0);
		}
		public BlockDefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_blockDef; }
	}

	public final BlockDefContext blockDef() throws RecognitionException {
		BlockDefContext _localctx = new BlockDefContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_blockDef);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(119);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Func:
				{
				setState(115);
				functionDef();
				}
				break;
			case Class:
				{
				setState(116);
				classDef();
				}
				break;
			case Prototype:
				{
				setState(117);
				prototypeDef();
				}
				break;
			case Instance:
				{
				setState(118);
				instanceDef();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(122);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__0) {
				{
				setState(121);
				match(T__0);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InlineDefContext extends ParserRuleContext {
		public ExternFunctionDeclContext externFunctionDecl() {
			return getRuleContext(ExternFunctionDeclContext.class,0);
		}
		public ConstDefContext constDef() {
			return getRuleContext(ConstDefContext.class,0);
		}
		public VarDeclContext varDecl() {
			return getRuleContext(VarDeclContext.class,0);
		}
		public InstanceDeclContext instanceDecl() {
			return getRuleContext(InstanceDeclContext.class,0);
		}
		public InlineDefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_inlineDef; }
	}

	public final InlineDefContext inlineDef() throws RecognitionException {
		InlineDefContext _localctx = new InlineDefContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_inlineDef);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(128);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Extern:
				{
				setState(124);
				externFunctionDecl();
				}
				break;
			case Const:
				{
				setState(125);
				constDef();
				}
				break;
			case Var:
				{
				setState(126);
				varDecl();
				}
				break;
			case Instance:
				{
				setState(127);
				instanceDecl();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(130);
			match(T__0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExternFunctionDeclContext extends ParserRuleContext {
		public TerminalNode Extern() { return getToken(DaedalusParser.Extern, 0); }
		public TerminalNode Func() { return getToken(DaedalusParser.Func, 0); }
		public DataTypeContext dataType() {
			return getRuleContext(DataTypeContext.class,0);
		}
		public NameNodeContext nameNode() {
			return getRuleContext(NameNodeContext.class,0);
		}
		public ParameterListContext parameterList() {
			return getRuleContext(ParameterListContext.class,0);
		}
		public ExternFunctionDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_externFunctionDecl; }
	}

	public final ExternFunctionDeclContext externFunctionDecl() throws RecognitionException {
		ExternFunctionDeclContext _localctx = new ExternFunctionDeclContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_externFunctionDecl);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(132);
			match(Extern);
			setState(133);
			match(Func);
			setState(134);
			dataType();
			setState(135);
			nameNode();
			setState(136);
			parameterList();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionDefContext extends ParserRuleContext {
		public TerminalNode Func() { return getToken(DaedalusParser.Func, 0); }
		public DataTypeContext dataType() {
			return getRuleContext(DataTypeContext.class,0);
		}
		public NameNodeContext nameNode() {
			return getRuleContext(NameNodeContext.class,0);
		}
		public ParameterListContext parameterList() {
			return getRuleContext(ParameterListContext.class,0);
		}
		public StatementBlockContext statementBlock() {
			return getRuleContext(StatementBlockContext.class,0);
		}
		public FunctionDefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionDef; }
	}

	public final FunctionDefContext functionDef() throws RecognitionException {
		FunctionDefContext _localctx = new FunctionDefContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_functionDef);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(138);
			match(Func);
			setState(139);
			dataType();
			setState(140);
			nameNode();
			setState(141);
			parameterList();
			setState(142);
			statementBlock();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConstDefContext extends ParserRuleContext {
		public TerminalNode Const() { return getToken(DaedalusParser.Const, 0); }
		public DataTypeContext dataType() {
			return getRuleContext(DataTypeContext.class,0);
		}
		public List<ConstValueDefContext> constValueDef() {
			return getRuleContexts(ConstValueDefContext.class);
		}
		public ConstValueDefContext constValueDef(int i) {
			return getRuleContext(ConstValueDefContext.class,i);
		}
		public List<ConstArrayDefContext> constArrayDef() {
			return getRuleContexts(ConstArrayDefContext.class);
		}
		public ConstArrayDefContext constArrayDef(int i) {
			return getRuleContext(ConstArrayDefContext.class,i);
		}
		public ConstDefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constDef; }
	}

	public final ConstDefContext constDef() throws RecognitionException {
		ConstDefContext _localctx = new ConstDefContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_constDef);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(144);
			match(Const);
			setState(145);
			dataType();
			setState(148);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				{
				setState(146);
				constValueDef();
				}
				break;
			case 2:
				{
				setState(147);
				constArrayDef();
				}
				break;
			}
			setState(157);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__1) {
				{
				{
				setState(150);
				match(T__1);
				setState(153);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
				case 1:
					{
					setState(151);
					constValueDef();
					}
					break;
				case 2:
					{
					setState(152);
					constArrayDef();
					}
					break;
				}
				}
				}
				setState(159);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassDefContext extends ParserRuleContext {
		public TerminalNode Class() { return getToken(DaedalusParser.Class, 0); }
		public NameNodeContext nameNode() {
			return getRuleContext(NameNodeContext.class,0);
		}
		public List<VarDeclContext> varDecl() {
			return getRuleContexts(VarDeclContext.class);
		}
		public VarDeclContext varDecl(int i) {
			return getRuleContext(VarDeclContext.class,i);
		}
		public ClassDefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classDef; }
	}

	public final ClassDefContext classDef() throws RecognitionException {
		ClassDefContext _localctx = new ClassDefContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_classDef);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(160);
			match(Class);
			setState(161);
			nameNode();
			setState(162);
			match(T__2);
			setState(168);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
			while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1+1 ) {
					{
					{
					setState(163);
					varDecl();
					setState(164);
					match(T__0);
					}
					} 
				}
				setState(170);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
			}
			setState(171);
			match(T__3);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrototypeDefContext extends ParserRuleContext {
		public TerminalNode Prototype() { return getToken(DaedalusParser.Prototype, 0); }
		public NameNodeContext nameNode() {
			return getRuleContext(NameNodeContext.class,0);
		}
		public ParentReferenceContext parentReference() {
			return getRuleContext(ParentReferenceContext.class,0);
		}
		public StatementBlockContext statementBlock() {
			return getRuleContext(StatementBlockContext.class,0);
		}
		public PrototypeDefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prototypeDef; }
	}

	public final PrototypeDefContext prototypeDef() throws RecognitionException {
		PrototypeDefContext _localctx = new PrototypeDefContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_prototypeDef);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(173);
			match(Prototype);
			setState(174);
			nameNode();
			setState(175);
			match(T__4);
			setState(176);
			parentReference();
			setState(177);
			match(T__5);
			setState(178);
			statementBlock();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InstanceDefContext extends ParserRuleContext {
		public TerminalNode Instance() { return getToken(DaedalusParser.Instance, 0); }
		public NameNodeContext nameNode() {
			return getRuleContext(NameNodeContext.class,0);
		}
		public ParentReferenceContext parentReference() {
			return getRuleContext(ParentReferenceContext.class,0);
		}
		public StatementBlockContext statementBlock() {
			return getRuleContext(StatementBlockContext.class,0);
		}
		public InstanceDefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_instanceDef; }
	}

	public final InstanceDefContext instanceDef() throws RecognitionException {
		InstanceDefContext _localctx = new InstanceDefContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_instanceDef);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(180);
			match(Instance);
			setState(181);
			nameNode();
			setState(182);
			match(T__4);
			setState(183);
			parentReference();
			setState(184);
			match(T__5);
			setState(185);
			statementBlock();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InstanceDeclContext extends ParserRuleContext {
		public TerminalNode Instance() { return getToken(DaedalusParser.Instance, 0); }
		public List<NameNodeContext> nameNode() {
			return getRuleContexts(NameNodeContext.class);
		}
		public NameNodeContext nameNode(int i) {
			return getRuleContext(NameNodeContext.class,i);
		}
		public ParentReferenceContext parentReference() {
			return getRuleContext(ParentReferenceContext.class,0);
		}
		public InstanceDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_instanceDecl; }
	}

	public final InstanceDeclContext instanceDecl() throws RecognitionException {
		InstanceDeclContext _localctx = new InstanceDeclContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_instanceDecl);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(187);
			match(Instance);
			setState(188);
			nameNode();
			setState(193);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1+1 ) {
					{
					{
					setState(189);
					match(T__1);
					setState(190);
					nameNode();
					}
					} 
				}
				setState(195);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			}
			setState(196);
			match(T__4);
			setState(197);
			parentReference();
			setState(198);
			match(T__5);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VarDeclContext extends ParserRuleContext {
		public TerminalNode Var() { return getToken(DaedalusParser.Var, 0); }
		public DataTypeContext dataType() {
			return getRuleContext(DataTypeContext.class,0);
		}
		public List<VarValueDeclContext> varValueDecl() {
			return getRuleContexts(VarValueDeclContext.class);
		}
		public VarValueDeclContext varValueDecl(int i) {
			return getRuleContext(VarValueDeclContext.class,i);
		}
		public List<VarArrayDeclContext> varArrayDecl() {
			return getRuleContexts(VarArrayDeclContext.class);
		}
		public VarArrayDeclContext varArrayDecl(int i) {
			return getRuleContext(VarArrayDeclContext.class,i);
		}
		public VarDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varDecl; }
	}

	public final VarDeclContext varDecl() throws RecognitionException {
		VarDeclContext _localctx = new VarDeclContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_varDecl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(200);
			match(Var);
			setState(201);
			dataType();
			setState(204);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				{
				setState(202);
				varValueDecl();
				}
				break;
			case 2:
				{
				setState(203);
				varArrayDecl();
				}
				break;
			}
			setState(213);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__1) {
				{
				{
				setState(206);
				match(T__1);
				setState(209);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
				case 1:
					{
					setState(207);
					varValueDecl();
					}
					break;
				case 2:
					{
					setState(208);
					varArrayDecl();
					}
					break;
				}
				}
				}
				setState(215);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConstArrayDefContext extends ParserRuleContext {
		public NameNodeContext nameNode() {
			return getRuleContext(NameNodeContext.class,0);
		}
		public ArraySizeContext arraySize() {
			return getRuleContext(ArraySizeContext.class,0);
		}
		public ConstArrayAssignmentContext constArrayAssignment() {
			return getRuleContext(ConstArrayAssignmentContext.class,0);
		}
		public ConstArrayDefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constArrayDef; }
	}

	public final ConstArrayDefContext constArrayDef() throws RecognitionException {
		ConstArrayDefContext _localctx = new ConstArrayDefContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_constArrayDef);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(216);
			nameNode();
			setState(217);
			match(T__6);
			setState(218);
			arraySize();
			setState(219);
			match(T__7);
			setState(220);
			constArrayAssignment();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConstArrayAssignmentContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public ConstArrayAssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constArrayAssignment; }
	}

	public final ConstArrayAssignmentContext constArrayAssignment() throws RecognitionException {
		ConstArrayAssignmentContext _localctx = new ConstArrayAssignmentContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_constArrayAssignment);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(222);
			match(T__8);
			setState(223);
			match(T__2);
			{
			setState(224);
			expression(0);
			setState(229);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
			while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1+1 ) {
					{
					{
					setState(225);
					match(T__1);
					setState(226);
					expression(0);
					}
					} 
				}
				setState(231);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
			}
			}
			setState(232);
			match(T__3);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConstValueDefContext extends ParserRuleContext {
		public NameNodeContext nameNode() {
			return getRuleContext(NameNodeContext.class,0);
		}
		public ConstValueAssignmentContext constValueAssignment() {
			return getRuleContext(ConstValueAssignmentContext.class,0);
		}
		public ConstValueDefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constValueDef; }
	}

	public final ConstValueDefContext constValueDef() throws RecognitionException {
		ConstValueDefContext _localctx = new ConstValueDefContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_constValueDef);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(234);
			nameNode();
			setState(235);
			constValueAssignment();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConstValueAssignmentContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ConstValueAssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constValueAssignment; }
	}

	public final ConstValueAssignmentContext constValueAssignment() throws RecognitionException {
		ConstValueAssignmentContext _localctx = new ConstValueAssignmentContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_constValueAssignment);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(237);
			match(T__8);
			setState(238);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VarArrayDeclContext extends ParserRuleContext {
		public NameNodeContext nameNode() {
			return getRuleContext(NameNodeContext.class,0);
		}
		public ArraySizeContext arraySize() {
			return getRuleContext(ArraySizeContext.class,0);
		}
		public VarArrayAssignmentContext varArrayAssignment() {
			return getRuleContext(VarArrayAssignmentContext.class,0);
		}
		public VarArrayDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varArrayDecl; }
	}

	public final VarArrayDeclContext varArrayDecl() throws RecognitionException {
		VarArrayDeclContext _localctx = new VarArrayDeclContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_varArrayDecl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(240);
			nameNode();
			setState(241);
			match(T__6);
			setState(242);
			arraySize();
			setState(243);
			match(T__7);
			setState(245);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__8) {
				{
				setState(244);
				varArrayAssignment();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VarArrayAssignmentContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public VarArrayAssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varArrayAssignment; }
	}

	public final VarArrayAssignmentContext varArrayAssignment() throws RecognitionException {
		VarArrayAssignmentContext _localctx = new VarArrayAssignmentContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_varArrayAssignment);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(247);
			match(T__8);
			setState(248);
			match(T__2);
			setState(249);
			expression(0);
			setState(254);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__1) {
				{
				{
				setState(250);
				match(T__1);
				setState(251);
				expression(0);
				}
				}
				setState(256);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(257);
			match(T__3);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VarValueDeclContext extends ParserRuleContext {
		public NameNodeContext nameNode() {
			return getRuleContext(NameNodeContext.class,0);
		}
		public VarValueAssignmentContext varValueAssignment() {
			return getRuleContext(VarValueAssignmentContext.class,0);
		}
		public VarValueDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varValueDecl; }
	}

	public final VarValueDeclContext varValueDecl() throws RecognitionException {
		VarValueDeclContext _localctx = new VarValueDeclContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_varValueDecl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(259);
			nameNode();
			setState(261);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__8) {
				{
				setState(260);
				varValueAssignment();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VarValueAssignmentContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public VarValueAssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varValueAssignment; }
	}

	public final VarValueAssignmentContext varValueAssignment() throws RecognitionException {
		VarValueAssignmentContext _localctx = new VarValueAssignmentContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_varValueAssignment);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(263);
			match(T__8);
			setState(264);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParameterListContext extends ParserRuleContext {
		public List<ParameterDeclContext> parameterDecl() {
			return getRuleContexts(ParameterDeclContext.class);
		}
		public ParameterDeclContext parameterDecl(int i) {
			return getRuleContext(ParameterDeclContext.class,i);
		}
		public ParameterListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameterList; }
	}

	public final ParameterListContext parameterList() throws RecognitionException {
		ParameterListContext _localctx = new ParameterListContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_parameterList);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(266);
			match(T__4);
			setState(275);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Var) {
				{
				setState(267);
				parameterDecl();
				setState(272);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,17,_ctx);
				while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1+1 ) {
						{
						{
						setState(268);
						match(T__1);
						setState(269);
						parameterDecl();
						}
						} 
					}
					setState(274);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,17,_ctx);
				}
				}
			}

			setState(277);
			match(T__5);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParameterDeclContext extends ParserRuleContext {
		public TerminalNode Var() { return getToken(DaedalusParser.Var, 0); }
		public DataTypeContext dataType() {
			return getRuleContext(DataTypeContext.class,0);
		}
		public NameNodeContext nameNode() {
			return getRuleContext(NameNodeContext.class,0);
		}
		public ArraySizeContext arraySize() {
			return getRuleContext(ArraySizeContext.class,0);
		}
		public ParameterDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameterDecl; }
	}

	public final ParameterDeclContext parameterDecl() throws RecognitionException {
		ParameterDeclContext _localctx = new ParameterDeclContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_parameterDecl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(279);
			match(Var);
			setState(280);
			dataType();
			setState(281);
			nameNode();
			setState(286);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__6) {
				{
				setState(282);
				match(T__6);
				setState(283);
				arraySize();
				setState(284);
				match(T__7);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementBlockContext extends ParserRuleContext {
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public List<IfBlockStatementContext> ifBlockStatement() {
			return getRuleContexts(IfBlockStatementContext.class);
		}
		public IfBlockStatementContext ifBlockStatement(int i) {
			return getRuleContext(IfBlockStatementContext.class,i);
		}
		public List<WhileStatementContext> whileStatement() {
			return getRuleContexts(WhileStatementContext.class);
		}
		public WhileStatementContext whileStatement(int i) {
			return getRuleContext(WhileStatementContext.class,i);
		}
		public StatementBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statementBlock; }
	}

	public final StatementBlockContext statementBlock() throws RecognitionException {
		StatementBlockContext _localctx = new StatementBlockContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_statementBlock);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(288);
			match(T__2);
			setState(303);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,23,_ctx);
			while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1+1 ) {
					{
					{
					setState(299);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,22,_ctx) ) {
					case 1:
						{
						{
						setState(289);
						statement();
						setState(290);
						match(T__0);
						}
						}
						break;
					case 2:
						{
						{
						setState(294);
						_errHandler.sync(this);
						switch (_input.LA(1)) {
						case If:
							{
							setState(292);
							ifBlockStatement();
							}
							break;
						case While:
							{
							setState(293);
							whileStatement();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						setState(297);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==T__0) {
							{
							setState(296);
							match(T__0);
							}
						}

						}
						}
						break;
					}
					}
					} 
				}
				setState(305);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,23,_ctx);
			}
			setState(306);
			match(T__3);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public AssignmentContext assignment() {
			return getRuleContext(AssignmentContext.class,0);
		}
		public ReturnStatementContext returnStatement() {
			return getRuleContext(ReturnStatementContext.class,0);
		}
		public ConstDefContext constDef() {
			return getRuleContext(ConstDefContext.class,0);
		}
		public VarDeclContext varDecl() {
			return getRuleContext(VarDeclContext.class,0);
		}
		public BreakStatementContext breakStatement() {
			return getRuleContext(BreakStatementContext.class,0);
		}
		public ContinueStatementContext continueStatement() {
			return getRuleContext(ContinueStatementContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_statement);
		try {
			setState(315);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,24,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(308);
				assignment();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(309);
				returnStatement();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(310);
				constDef();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(311);
				varDecl();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(312);
				breakStatement();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(313);
				continueStatement();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(314);
				expression(0);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionCallContext extends ParserRuleContext {
		public NameNodeContext nameNode() {
			return getRuleContext(NameNodeContext.class,0);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public FunctionCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionCall; }
	}

	public final FunctionCallContext functionCall() throws RecognitionException {
		FunctionCallContext _localctx = new FunctionCallContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_functionCall);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(317);
			nameNode();
			setState(318);
			match(T__4);
			setState(327);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__4) | (1L << T__14) | (1L << T__15) | (1L << T__24) | (1L << T__25) | (1L << Null) | (1L << NoFunc) | (1L << While) | (1L << Break) | (1L << Continue) | (1L << Identifier) | (1L << IntegerLiteral) | (1L << FloatLiteral) | (1L << StringLiteral))) != 0)) {
				{
				setState(319);
				expression(0);
				setState(324);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,25,_ctx);
				while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1+1 ) {
						{
						{
						setState(320);
						match(T__1);
						setState(321);
						expression(0);
						}
						} 
					}
					setState(326);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,25,_ctx);
				}
				}
			}

			setState(329);
			match(T__5);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignmentContext extends ParserRuleContext {
		public ReferenceContext reference() {
			return getRuleContext(ReferenceContext.class,0);
		}
		public AssignmentOperatorContext assignmentOperator() {
			return getRuleContext(AssignmentOperatorContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public AssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignment; }
	}

	public final AssignmentContext assignment() throws RecognitionException {
		AssignmentContext _localctx = new AssignmentContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_assignment);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(331);
			reference();
			setState(332);
			assignmentOperator();
			setState(333);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElseBlockContext extends ParserRuleContext {
		public TerminalNode Else() { return getToken(DaedalusParser.Else, 0); }
		public StatementBlockContext statementBlock() {
			return getRuleContext(StatementBlockContext.class,0);
		}
		public ElseBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elseBlock; }
	}

	public final ElseBlockContext elseBlock() throws RecognitionException {
		ElseBlockContext _localctx = new ElseBlockContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_elseBlock);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(335);
			match(Else);
			setState(336);
			statementBlock();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElseIfBlockContext extends ParserRuleContext {
		public TerminalNode Else() { return getToken(DaedalusParser.Else, 0); }
		public TerminalNode If() { return getToken(DaedalusParser.If, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public StatementBlockContext statementBlock() {
			return getRuleContext(StatementBlockContext.class,0);
		}
		public ElseIfBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elseIfBlock; }
	}

	public final ElseIfBlockContext elseIfBlock() throws RecognitionException {
		ElseIfBlockContext _localctx = new ElseIfBlockContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_elseIfBlock);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(338);
			match(Else);
			setState(339);
			match(If);
			setState(340);
			expression(0);
			setState(341);
			statementBlock();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IfBlockContext extends ParserRuleContext {
		public TerminalNode If() { return getToken(DaedalusParser.If, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public StatementBlockContext statementBlock() {
			return getRuleContext(StatementBlockContext.class,0);
		}
		public IfBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifBlock; }
	}

	public final IfBlockContext ifBlock() throws RecognitionException {
		IfBlockContext _localctx = new IfBlockContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_ifBlock);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(343);
			match(If);
			setState(344);
			expression(0);
			setState(345);
			statementBlock();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IfBlockStatementContext extends ParserRuleContext {
		public IfBlockContext ifBlock() {
			return getRuleContext(IfBlockContext.class,0);
		}
		public List<ElseIfBlockContext> elseIfBlock() {
			return getRuleContexts(ElseIfBlockContext.class);
		}
		public ElseIfBlockContext elseIfBlock(int i) {
			return getRuleContext(ElseIfBlockContext.class,i);
		}
		public ElseBlockContext elseBlock() {
			return getRuleContext(ElseBlockContext.class,0);
		}
		public IfBlockStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifBlockStatement; }
	}

	public final IfBlockStatementContext ifBlockStatement() throws RecognitionException {
		IfBlockStatementContext _localctx = new IfBlockStatementContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_ifBlockStatement);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(347);
			ifBlock();
			setState(351);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,27,_ctx);
			while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1+1 ) {
					{
					{
					setState(348);
					elseIfBlock();
					}
					} 
				}
				setState(353);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,27,_ctx);
			}
			setState(355);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Else) {
				{
				setState(354);
				elseBlock();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ReturnStatementContext extends ParserRuleContext {
		public TerminalNode Return() { return getToken(DaedalusParser.Return, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ReturnStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_returnStatement; }
	}

	public final ReturnStatementContext returnStatement() throws RecognitionException {
		ReturnStatementContext _localctx = new ReturnStatementContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_returnStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(357);
			match(Return);
			setState(359);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__4) | (1L << T__14) | (1L << T__15) | (1L << T__24) | (1L << T__25) | (1L << Null) | (1L << NoFunc) | (1L << While) | (1L << Break) | (1L << Continue) | (1L << Identifier) | (1L << IntegerLiteral) | (1L << FloatLiteral) | (1L << StringLiteral))) != 0)) {
				{
				setState(358);
				expression(0);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WhileStatementContext extends ParserRuleContext {
		public TerminalNode While() { return getToken(DaedalusParser.While, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public StatementBlockContext statementBlock() {
			return getRuleContext(StatementBlockContext.class,0);
		}
		public WhileStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whileStatement; }
	}

	public final WhileStatementContext whileStatement() throws RecognitionException {
		WhileStatementContext _localctx = new WhileStatementContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_whileStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(361);
			match(While);
			setState(362);
			match(T__4);
			setState(363);
			expression(0);
			setState(364);
			match(T__5);
			setState(365);
			statementBlock();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BreakStatementContext extends ParserRuleContext {
		public TerminalNode Break() { return getToken(DaedalusParser.Break, 0); }
		public BreakStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_breakStatement; }
	}

	public final BreakStatementContext breakStatement() throws RecognitionException {
		BreakStatementContext _localctx = new BreakStatementContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_breakStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(367);
			match(Break);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ContinueStatementContext extends ParserRuleContext {
		public TerminalNode Continue() { return getToken(DaedalusParser.Continue, 0); }
		public ContinueStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_continueStatement; }
	}

	public final ContinueStatementContext continueStatement() throws RecognitionException {
		ContinueStatementContext _localctx = new ContinueStatementContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_continueStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(369);
			match(Continue);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	 
		public ExpressionContext() { }
		public void copyFrom(ExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class BitMoveExpressionContext extends ExpressionContext {
		public BitMoveOperatorContext oper;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public BitMoveOperatorContext bitMoveOperator() {
			return getRuleContext(BitMoveOperatorContext.class,0);
		}
		public BitMoveExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ValueExpressionContext extends ExpressionContext {
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public ValueExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class EqExpressionContext extends ExpressionContext {
		public EqOperatorContext oper;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public EqOperatorContext eqOperator() {
			return getRuleContext(EqOperatorContext.class,0);
		}
		public EqExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class AddExpressionContext extends ExpressionContext {
		public AddOperatorContext oper;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public AddOperatorContext addOperator() {
			return getRuleContext(AddOperatorContext.class,0);
		}
		public AddExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class CompExpressionContext extends ExpressionContext {
		public CompOperatorContext oper;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public CompOperatorContext compOperator() {
			return getRuleContext(CompOperatorContext.class,0);
		}
		public CompExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LogOrExpressionContext extends ExpressionContext {
		public LogOrOperatorContext oper;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public LogOrOperatorContext logOrOperator() {
			return getRuleContext(LogOrOperatorContext.class,0);
		}
		public LogOrExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class BinAndExpressionContext extends ExpressionContext {
		public BinAndOperatorContext oper;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public BinAndOperatorContext binAndOperator() {
			return getRuleContext(BinAndOperatorContext.class,0);
		}
		public BinAndExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class BinOrExpressionContext extends ExpressionContext {
		public BinOrOperatorContext oper;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public BinOrOperatorContext binOrOperator() {
			return getRuleContext(BinOrOperatorContext.class,0);
		}
		public BinOrExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class MultExpressionContext extends ExpressionContext {
		public MultOperatorContext oper;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public MultOperatorContext multOperator() {
			return getRuleContext(MultOperatorContext.class,0);
		}
		public MultExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class BracketExpressionContext extends ExpressionContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public BracketExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class UnaryExpressionContext extends ExpressionContext {
		public UnaryOperatorContext oper;
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public UnaryOperatorContext unaryOperator() {
			return getRuleContext(UnaryOperatorContext.class,0);
		}
		public UnaryExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LogAndExpressionContext extends ExpressionContext {
		public LogAndOperatorContext oper;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public LogAndOperatorContext logAndOperator() {
			return getRuleContext(LogAndOperatorContext.class,0);
		}
		public LogAndExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 66;
		enterRecursionRule(_localctx, 66, RULE_expression, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(380);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__4:
				{
				_localctx = new BracketExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(372);
				match(T__4);
				setState(373);
				expression(0);
				setState(374);
				match(T__5);
				}
				break;
			case T__14:
			case T__15:
			case T__24:
			case T__25:
				{
				_localctx = new UnaryExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				{
				setState(376);
				((UnaryExpressionContext)_localctx).oper = unaryOperator();
				}
				setState(377);
				expression(11);
				}
				break;
			case Null:
			case NoFunc:
			case While:
			case Break:
			case Continue:
			case Identifier:
			case IntegerLiteral:
			case FloatLiteral:
			case StringLiteral:
				{
				_localctx = new ValueExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(379);
				value();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(420);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,32,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(418);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,31,_ctx) ) {
					case 1:
						{
						_localctx = new MultExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(382);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						{
						setState(383);
						((MultExpressionContext)_localctx).oper = multOperator();
						}
						setState(384);
						expression(11);
						}
						break;
					case 2:
						{
						_localctx = new AddExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(386);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						{
						setState(387);
						((AddExpressionContext)_localctx).oper = addOperator();
						}
						setState(388);
						expression(10);
						}
						break;
					case 3:
						{
						_localctx = new BitMoveExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(390);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						{
						setState(391);
						((BitMoveExpressionContext)_localctx).oper = bitMoveOperator();
						}
						setState(392);
						expression(9);
						}
						break;
					case 4:
						{
						_localctx = new CompExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(394);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						{
						setState(395);
						((CompExpressionContext)_localctx).oper = compOperator();
						}
						setState(396);
						expression(8);
						}
						break;
					case 5:
						{
						_localctx = new EqExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(398);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						{
						setState(399);
						((EqExpressionContext)_localctx).oper = eqOperator();
						}
						setState(400);
						expression(7);
						}
						break;
					case 6:
						{
						_localctx = new BinAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(402);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						{
						setState(403);
						((BinAndExpressionContext)_localctx).oper = binAndOperator();
						}
						setState(404);
						expression(6);
						}
						break;
					case 7:
						{
						_localctx = new BinOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(406);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						{
						setState(407);
						((BinOrExpressionContext)_localctx).oper = binOrOperator();
						}
						setState(408);
						expression(5);
						}
						break;
					case 8:
						{
						_localctx = new LogAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(410);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						{
						setState(411);
						((LogAndExpressionContext)_localctx).oper = logAndOperator();
						}
						setState(412);
						expression(4);
						}
						break;
					case 9:
						{
						_localctx = new LogOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(414);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						{
						setState(415);
						((LogOrExpressionContext)_localctx).oper = logOrOperator();
						}
						setState(416);
						expression(3);
						}
						break;
					}
					} 
				}
				setState(422);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,32,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class ArrayIndexContext extends ParserRuleContext {
		public TerminalNode IntegerLiteral() { return getToken(DaedalusParser.IntegerLiteral, 0); }
		public ReferenceContext reference() {
			return getRuleContext(ReferenceContext.class,0);
		}
		public ArrayIndexContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayIndex; }
	}

	public final ArrayIndexContext arrayIndex() throws RecognitionException {
		ArrayIndexContext _localctx = new ArrayIndexContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_arrayIndex);
		try {
			setState(425);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IntegerLiteral:
				enterOuterAlt(_localctx, 1);
				{
				setState(423);
				match(IntegerLiteral);
				}
				break;
			case While:
			case Break:
			case Continue:
			case Identifier:
				enterOuterAlt(_localctx, 2);
				{
				setState(424);
				reference();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArraySizeContext extends ParserRuleContext {
		public TerminalNode IntegerLiteral() { return getToken(DaedalusParser.IntegerLiteral, 0); }
		public ReferenceContext reference() {
			return getRuleContext(ReferenceContext.class,0);
		}
		public ArraySizeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arraySize; }
	}

	public final ArraySizeContext arraySize() throws RecognitionException {
		ArraySizeContext _localctx = new ArraySizeContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_arraySize);
		try {
			setState(429);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IntegerLiteral:
				enterOuterAlt(_localctx, 1);
				{
				setState(427);
				match(IntegerLiteral);
				}
				break;
			case While:
			case Break:
			case Continue:
			case Identifier:
				enterOuterAlt(_localctx, 2);
				{
				setState(428);
				reference();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ValueContext extends ParserRuleContext {
		public ValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_value; }
	 
		public ValueContext() { }
		public void copyFrom(ValueContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class IntegerLiteralValueContext extends ValueContext {
		public TerminalNode IntegerLiteral() { return getToken(DaedalusParser.IntegerLiteral, 0); }
		public IntegerLiteralValueContext(ValueContext ctx) { copyFrom(ctx); }
	}
	public static class FunctionCallValueContext extends ValueContext {
		public FunctionCallContext functionCall() {
			return getRuleContext(FunctionCallContext.class,0);
		}
		public FunctionCallValueContext(ValueContext ctx) { copyFrom(ctx); }
	}
	public static class FloatLiteralValueContext extends ValueContext {
		public TerminalNode FloatLiteral() { return getToken(DaedalusParser.FloatLiteral, 0); }
		public FloatLiteralValueContext(ValueContext ctx) { copyFrom(ctx); }
	}
	public static class StringLiteralValueContext extends ValueContext {
		public TerminalNode StringLiteral() { return getToken(DaedalusParser.StringLiteral, 0); }
		public StringLiteralValueContext(ValueContext ctx) { copyFrom(ctx); }
	}
	public static class NoFuncLiteralValueContext extends ValueContext {
		public TerminalNode NoFunc() { return getToken(DaedalusParser.NoFunc, 0); }
		public NoFuncLiteralValueContext(ValueContext ctx) { copyFrom(ctx); }
	}
	public static class NullLiteralValueContext extends ValueContext {
		public TerminalNode Null() { return getToken(DaedalusParser.Null, 0); }
		public NullLiteralValueContext(ValueContext ctx) { copyFrom(ctx); }
	}
	public static class ReferenceValueContext extends ValueContext {
		public ReferenceContext reference() {
			return getRuleContext(ReferenceContext.class,0);
		}
		public ReferenceValueContext(ValueContext ctx) { copyFrom(ctx); }
	}

	public final ValueContext value() throws RecognitionException {
		ValueContext _localctx = new ValueContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_value);
		try {
			setState(438);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,35,_ctx) ) {
			case 1:
				_localctx = new IntegerLiteralValueContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(431);
				match(IntegerLiteral);
				}
				break;
			case 2:
				_localctx = new FloatLiteralValueContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(432);
				match(FloatLiteral);
				}
				break;
			case 3:
				_localctx = new StringLiteralValueContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(433);
				match(StringLiteral);
				}
				break;
			case 4:
				_localctx = new NullLiteralValueContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(434);
				match(Null);
				}
				break;
			case 5:
				_localctx = new NoFuncLiteralValueContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(435);
				match(NoFunc);
				}
				break;
			case 6:
				_localctx = new FunctionCallValueContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(436);
				functionCall();
				}
				break;
			case 7:
				_localctx = new ReferenceValueContext(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(437);
				reference();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ReferenceAtomContext extends ParserRuleContext {
		public NameNodeContext nameNode() {
			return getRuleContext(NameNodeContext.class,0);
		}
		public ArrayIndexContext arrayIndex() {
			return getRuleContext(ArrayIndexContext.class,0);
		}
		public ReferenceAtomContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_referenceAtom; }
	}

	public final ReferenceAtomContext referenceAtom() throws RecognitionException {
		ReferenceAtomContext _localctx = new ReferenceAtomContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_referenceAtom);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(440);
			nameNode();
			setState(445);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,36,_ctx) ) {
			case 1:
				{
				setState(441);
				match(T__6);
				setState(442);
				arrayIndex();
				setState(443);
				match(T__7);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ReferenceContext extends ParserRuleContext {
		public List<ReferenceAtomContext> referenceAtom() {
			return getRuleContexts(ReferenceAtomContext.class);
		}
		public ReferenceAtomContext referenceAtom(int i) {
			return getRuleContext(ReferenceAtomContext.class,i);
		}
		public ReferenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_reference; }
	}

	public final ReferenceContext reference() throws RecognitionException {
		ReferenceContext _localctx = new ReferenceContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_reference);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(447);
			referenceAtom();
			setState(452);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,37,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(448);
					match(T__9);
					setState(449);
					referenceAtom();
					}
					} 
				}
				setState(454);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,37,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataTypeContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(DaedalusParser.Identifier, 0); }
		public TerminalNode Void() { return getToken(DaedalusParser.Void, 0); }
		public TerminalNode Int() { return getToken(DaedalusParser.Int, 0); }
		public TerminalNode Float() { return getToken(DaedalusParser.Float, 0); }
		public TerminalNode String() { return getToken(DaedalusParser.String, 0); }
		public TerminalNode Func() { return getToken(DaedalusParser.Func, 0); }
		public TerminalNode Instance() { return getToken(DaedalusParser.Instance, 0); }
		public DataTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataType; }
	}

	public final DataTypeContext dataType() throws RecognitionException {
		DataTypeContext _localctx = new DataTypeContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_dataType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(455);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Int) | (1L << Func) | (1L << String) | (1L << Void) | (1L << Float) | (1L << Instance) | (1L << Identifier))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NameNodeContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(DaedalusParser.Identifier, 0); }
		public TerminalNode While() { return getToken(DaedalusParser.While, 0); }
		public TerminalNode Break() { return getToken(DaedalusParser.Break, 0); }
		public TerminalNode Continue() { return getToken(DaedalusParser.Continue, 0); }
		public NameNodeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nameNode; }
	}

	public final NameNodeContext nameNode() throws RecognitionException {
		NameNodeContext _localctx = new NameNodeContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_nameNode);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(457);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << While) | (1L << Break) | (1L << Continue) | (1L << Identifier))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParentReferenceContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(DaedalusParser.Identifier, 0); }
		public ParentReferenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parentReference; }
	}

	public final ParentReferenceContext parentReference() throws RecognitionException {
		ParentReferenceContext _localctx = new ParentReferenceContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_parentReference);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(459);
			match(Identifier);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignmentOperatorContext extends ParserRuleContext {
		public AssignmentOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignmentOperator; }
	}

	public final AssignmentOperatorContext assignmentOperator() throws RecognitionException {
		AssignmentOperatorContext _localctx = new AssignmentOperatorContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_assignmentOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(461);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__8) | (1L << T__10) | (1L << T__11) | (1L << T__12) | (1L << T__13))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AddOperatorContext extends ParserRuleContext {
		public AddOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_addOperator; }
	}

	public final AddOperatorContext addOperator() throws RecognitionException {
		AddOperatorContext _localctx = new AddOperatorContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_addOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(463);
			_la = _input.LA(1);
			if ( !(_la==T__14 || _la==T__15) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BitMoveOperatorContext extends ParserRuleContext {
		public BitMoveOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bitMoveOperator; }
	}

	public final BitMoveOperatorContext bitMoveOperator() throws RecognitionException {
		BitMoveOperatorContext _localctx = new BitMoveOperatorContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_bitMoveOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(465);
			_la = _input.LA(1);
			if ( !(_la==T__16 || _la==T__17) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CompOperatorContext extends ParserRuleContext {
		public CompOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compOperator; }
	}

	public final CompOperatorContext compOperator() throws RecognitionException {
		CompOperatorContext _localctx = new CompOperatorContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_compOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(467);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__18) | (1L << T__19) | (1L << T__20) | (1L << T__21))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EqOperatorContext extends ParserRuleContext {
		public EqOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_eqOperator; }
	}

	public final EqOperatorContext eqOperator() throws RecognitionException {
		EqOperatorContext _localctx = new EqOperatorContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_eqOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(469);
			_la = _input.LA(1);
			if ( !(_la==T__22 || _la==T__23) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UnaryOperatorContext extends ParserRuleContext {
		public UnaryOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unaryOperator; }
	}

	public final UnaryOperatorContext unaryOperator() throws RecognitionException {
		UnaryOperatorContext _localctx = new UnaryOperatorContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_unaryOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(471);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__14) | (1L << T__15) | (1L << T__24) | (1L << T__25))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MultOperatorContext extends ParserRuleContext {
		public MultOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_multOperator; }
	}

	public final MultOperatorContext multOperator() throws RecognitionException {
		MultOperatorContext _localctx = new MultOperatorContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_multOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(473);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__26) | (1L << T__27) | (1L << T__28))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BinAndOperatorContext extends ParserRuleContext {
		public BinAndOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_binAndOperator; }
	}

	public final BinAndOperatorContext binAndOperator() throws RecognitionException {
		BinAndOperatorContext _localctx = new BinAndOperatorContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_binAndOperator);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(475);
			match(T__29);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BinOrOperatorContext extends ParserRuleContext {
		public BinOrOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_binOrOperator; }
	}

	public final BinOrOperatorContext binOrOperator() throws RecognitionException {
		BinOrOperatorContext _localctx = new BinOrOperatorContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_binOrOperator);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(477);
			match(T__30);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LogAndOperatorContext extends ParserRuleContext {
		public LogAndOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_logAndOperator; }
	}

	public final LogAndOperatorContext logAndOperator() throws RecognitionException {
		LogAndOperatorContext _localctx = new LogAndOperatorContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_logAndOperator);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(479);
			match(T__31);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LogOrOperatorContext extends ParserRuleContext {
		public LogOrOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_logOrOperator; }
	}

	public final LogOrOperatorContext logOrOperator() throws RecognitionException {
		LogOrOperatorContext _localctx = new LogOrOperatorContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_logOrOperator);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(481);
			match(T__32);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 33:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 10);
		case 1:
			return precpred(_ctx, 9);
		case 2:
			return precpred(_ctx, 8);
		case 3:
			return precpred(_ctx, 7);
		case 4:
			return precpred(_ctx, 6);
		case 5:
			return precpred(_ctx, 5);
		case 6:
			return precpred(_ctx, 4);
		case 7:
			return precpred(_ctx, 3);
		case 8:
			return precpred(_ctx, 2);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3?\u01e6\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\3\2\3\2\7\2o\n\2\f\2\16\2r\13\2\3\2\3\2\3\3\3"+
		"\3\3\3\3\3\5\3z\n\3\3\3\5\3}\n\3\3\4\3\4\3\4\3\4\5\4\u0083\n\4\3\4\3\4"+
		"\3\5\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\5\7\u0097"+
		"\n\7\3\7\3\7\3\7\5\7\u009c\n\7\7\7\u009e\n\7\f\7\16\7\u00a1\13\7\3\b\3"+
		"\b\3\b\3\b\3\b\3\b\7\b\u00a9\n\b\f\b\16\b\u00ac\13\b\3\b\3\b\3\t\3\t\3"+
		"\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\7\13"+
		"\u00c2\n\13\f\13\16\13\u00c5\13\13\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f"+
		"\5\f\u00cf\n\f\3\f\3\f\3\f\5\f\u00d4\n\f\7\f\u00d6\n\f\f\f\16\f\u00d9"+
		"\13\f\3\r\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\7\16\u00e6\n\16"+
		"\f\16\16\16\u00e9\13\16\3\16\3\16\3\17\3\17\3\17\3\20\3\20\3\20\3\21\3"+
		"\21\3\21\3\21\3\21\5\21\u00f8\n\21\3\22\3\22\3\22\3\22\3\22\7\22\u00ff"+
		"\n\22\f\22\16\22\u0102\13\22\3\22\3\22\3\23\3\23\5\23\u0108\n\23\3\24"+
		"\3\24\3\24\3\25\3\25\3\25\3\25\7\25\u0111\n\25\f\25\16\25\u0114\13\25"+
		"\5\25\u0116\n\25\3\25\3\25\3\26\3\26\3\26\3\26\3\26\3\26\3\26\5\26\u0121"+
		"\n\26\3\27\3\27\3\27\3\27\3\27\3\27\5\27\u0129\n\27\3\27\5\27\u012c\n"+
		"\27\5\27\u012e\n\27\7\27\u0130\n\27\f\27\16\27\u0133\13\27\3\27\3\27\3"+
		"\30\3\30\3\30\3\30\3\30\3\30\3\30\5\30\u013e\n\30\3\31\3\31\3\31\3\31"+
		"\3\31\7\31\u0145\n\31\f\31\16\31\u0148\13\31\5\31\u014a\n\31\3\31\3\31"+
		"\3\32\3\32\3\32\3\32\3\33\3\33\3\33\3\34\3\34\3\34\3\34\3\34\3\35\3\35"+
		"\3\35\3\35\3\36\3\36\7\36\u0160\n\36\f\36\16\36\u0163\13\36\3\36\5\36"+
		"\u0166\n\36\3\37\3\37\5\37\u016a\n\37\3 \3 \3 \3 \3 \3 \3!\3!\3\"\3\""+
		"\3#\3#\3#\3#\3#\3#\3#\3#\3#\5#\u017f\n#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#"+
		"\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#\3#"+
		"\3#\3#\3#\7#\u01a5\n#\f#\16#\u01a8\13#\3$\3$\5$\u01ac\n$\3%\3%\5%\u01b0"+
		"\n%\3&\3&\3&\3&\3&\3&\3&\5&\u01b9\n&\3\'\3\'\3\'\3\'\3\'\5\'\u01c0\n\'"+
		"\3(\3(\3(\7(\u01c5\n(\f(\16(\u01c8\13(\3)\3)\3*\3*\3+\3+\3,\3,\3-\3-\3"+
		".\3.\3/\3/\3\60\3\60\3\61\3\61\3\62\3\62\3\63\3\63\3\64\3\64\3\65\3\65"+
		"\3\66\3\66\3\66\np\u00aa\u00c3\u00e7\u0112\u0131\u0146\u0161\3D\67\2\4"+
		"\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNP"+
		"RTVXZ\\^`bdfhj\2\13\b\2\'\')*,,..\60\60\67\67\4\2\63\65\67\67\4\2\13\13"+
		"\r\20\3\2\21\22\3\2\23\24\3\2\25\30\3\2\31\32\4\2\21\22\33\34\3\2\35\37"+
		"\2\u01ec\2p\3\2\2\2\4y\3\2\2\2\6\u0082\3\2\2\2\b\u0086\3\2\2\2\n\u008c"+
		"\3\2\2\2\f\u0092\3\2\2\2\16\u00a2\3\2\2\2\20\u00af\3\2\2\2\22\u00b6\3"+
		"\2\2\2\24\u00bd\3\2\2\2\26\u00ca\3\2\2\2\30\u00da\3\2\2\2\32\u00e0\3\2"+
		"\2\2\34\u00ec\3\2\2\2\36\u00ef\3\2\2\2 \u00f2\3\2\2\2\"\u00f9\3\2\2\2"+
		"$\u0105\3\2\2\2&\u0109\3\2\2\2(\u010c\3\2\2\2*\u0119\3\2\2\2,\u0122\3"+
		"\2\2\2.\u013d\3\2\2\2\60\u013f\3\2\2\2\62\u014d\3\2\2\2\64\u0151\3\2\2"+
		"\2\66\u0154\3\2\2\28\u0159\3\2\2\2:\u015d\3\2\2\2<\u0167\3\2\2\2>\u016b"+
		"\3\2\2\2@\u0171\3\2\2\2B\u0173\3\2\2\2D\u017e\3\2\2\2F\u01ab\3\2\2\2H"+
		"\u01af\3\2\2\2J\u01b8\3\2\2\2L\u01ba\3\2\2\2N\u01c1\3\2\2\2P\u01c9\3\2"+
		"\2\2R\u01cb\3\2\2\2T\u01cd\3\2\2\2V\u01cf\3\2\2\2X\u01d1\3\2\2\2Z\u01d3"+
		"\3\2\2\2\\\u01d5\3\2\2\2^\u01d7\3\2\2\2`\u01d9\3\2\2\2b\u01db\3\2\2\2"+
		"d\u01dd\3\2\2\2f\u01df\3\2\2\2h\u01e1\3\2\2\2j\u01e3\3\2\2\2lo\5\4\3\2"+
		"mo\5\6\4\2nl\3\2\2\2nm\3\2\2\2or\3\2\2\2pq\3\2\2\2pn\3\2\2\2qs\3\2\2\2"+
		"rp\3\2\2\2st\7\2\2\3t\3\3\2\2\2uz\5\n\6\2vz\5\16\b\2wz\5\20\t\2xz\5\22"+
		"\n\2yu\3\2\2\2yv\3\2\2\2yw\3\2\2\2yx\3\2\2\2z|\3\2\2\2{}\7\3\2\2|{\3\2"+
		"\2\2|}\3\2\2\2}\5\3\2\2\2~\u0083\5\b\5\2\177\u0083\5\f\7\2\u0080\u0083"+
		"\5\26\f\2\u0081\u0083\5\24\13\2\u0082~\3\2\2\2\u0082\177\3\2\2\2\u0082"+
		"\u0080\3\2\2\2\u0082\u0081\3\2\2\2\u0083\u0084\3\2\2\2\u0084\u0085\7\3"+
		"\2\2\u0085\7\3\2\2\2\u0086\u0087\7\66\2\2\u0087\u0088\7)\2\2\u0088\u0089"+
		"\5P)\2\u0089\u008a\5R*\2\u008a\u008b\5(\25\2\u008b\t\3\2\2\2\u008c\u008d"+
		"\7)\2\2\u008d\u008e\5P)\2\u008e\u008f\5R*\2\u008f\u0090\5(\25\2\u0090"+
		"\u0091\5,\27\2\u0091\13\3\2\2\2\u0092\u0093\7$\2\2\u0093\u0096\5P)\2\u0094"+
		"\u0097\5\34\17\2\u0095\u0097\5\30\r\2\u0096\u0094\3\2\2\2\u0096\u0095"+
		"\3\2\2\2\u0097\u009f\3\2\2\2\u0098\u009b\7\4\2\2\u0099\u009c\5\34\17\2"+
		"\u009a\u009c\5\30\r\2\u009b\u0099\3\2\2\2\u009b\u009a\3\2\2\2\u009c\u009e"+
		"\3\2\2\2\u009d\u0098\3\2\2\2\u009e\u00a1\3\2\2\2\u009f\u009d\3\2\2\2\u009f"+
		"\u00a0\3\2\2\2\u00a0\r\3\2\2\2\u00a1\u009f\3\2\2\2\u00a2\u00a3\7+\2\2"+
		"\u00a3\u00a4\5R*\2\u00a4\u00aa\7\5\2\2\u00a5\u00a6\5\26\f\2\u00a6\u00a7"+
		"\7\3\2\2\u00a7\u00a9\3\2\2\2\u00a8\u00a5\3\2\2\2\u00a9\u00ac\3\2\2\2\u00aa"+
		"\u00ab\3\2\2\2\u00aa\u00a8\3\2\2\2\u00ab\u00ad\3\2\2\2\u00ac\u00aa\3\2"+
		"\2\2\u00ad\u00ae\7\6\2\2\u00ae\17\3\2\2\2\u00af\u00b0\7/\2\2\u00b0\u00b1"+
		"\5R*\2\u00b1\u00b2\7\7\2\2\u00b2\u00b3\5T+\2\u00b3\u00b4\7\b\2\2\u00b4"+
		"\u00b5\5,\27\2\u00b5\21\3\2\2\2\u00b6\u00b7\7\60\2\2\u00b7\u00b8\5R*\2"+
		"\u00b8\u00b9\7\7\2\2\u00b9\u00ba\5T+\2\u00ba\u00bb\7\b\2\2\u00bb\u00bc"+
		"\5,\27\2\u00bc\23\3\2\2\2\u00bd\u00be\7\60\2\2\u00be\u00c3\5R*\2\u00bf"+
		"\u00c0\7\4\2\2\u00c0\u00c2\5R*\2\u00c1\u00bf\3\2\2\2\u00c2\u00c5\3\2\2"+
		"\2\u00c3\u00c4\3\2\2\2\u00c3\u00c1\3\2\2\2\u00c4\u00c6\3\2\2\2\u00c5\u00c3"+
		"\3\2\2\2\u00c6\u00c7\7\7\2\2\u00c7\u00c8\5T+\2\u00c8\u00c9\7\b\2\2\u00c9"+
		"\25\3\2\2\2\u00ca\u00cb\7%\2\2\u00cb\u00ce\5P)\2\u00cc\u00cf\5$\23\2\u00cd"+
		"\u00cf\5 \21\2\u00ce\u00cc\3\2\2\2\u00ce\u00cd\3\2\2\2\u00cf\u00d7\3\2"+
		"\2\2\u00d0\u00d3\7\4\2\2\u00d1\u00d4\5$\23\2\u00d2\u00d4\5 \21\2\u00d3"+
		"\u00d1\3\2\2\2\u00d3\u00d2\3\2\2\2\u00d4\u00d6\3\2\2\2\u00d5\u00d0\3\2"+
		"\2\2\u00d6\u00d9\3\2\2\2\u00d7\u00d5\3\2\2\2\u00d7\u00d8\3\2\2\2\u00d8"+
		"\27\3\2\2\2\u00d9\u00d7\3\2\2\2\u00da\u00db\5R*\2\u00db\u00dc\7\t\2\2"+
		"\u00dc\u00dd\5H%\2\u00dd\u00de\7\n\2\2\u00de\u00df\5\32\16\2\u00df\31"+
		"\3\2\2\2\u00e0\u00e1\7\13\2\2\u00e1\u00e2\7\5\2\2\u00e2\u00e7\5D#\2\u00e3"+
		"\u00e4\7\4\2\2\u00e4\u00e6\5D#\2\u00e5\u00e3\3\2\2\2\u00e6\u00e9\3\2\2"+
		"\2\u00e7\u00e8\3\2\2\2\u00e7\u00e5\3\2\2\2\u00e8\u00ea\3\2\2\2\u00e9\u00e7"+
		"\3\2\2\2\u00ea\u00eb\7\6\2\2\u00eb\33\3\2\2\2\u00ec\u00ed\5R*\2\u00ed"+
		"\u00ee\5\36\20\2\u00ee\35\3\2\2\2\u00ef\u00f0\7\13\2\2\u00f0\u00f1\5D"+
		"#\2\u00f1\37\3\2\2\2\u00f2\u00f3\5R*\2\u00f3\u00f4\7\t\2\2\u00f4\u00f5"+
		"\5H%\2\u00f5\u00f7\7\n\2\2\u00f6\u00f8\5\"\22\2\u00f7\u00f6\3\2\2\2\u00f7"+
		"\u00f8\3\2\2\2\u00f8!\3\2\2\2\u00f9\u00fa\7\13\2\2\u00fa\u00fb\7\5\2\2"+
		"\u00fb\u0100\5D#\2\u00fc\u00fd\7\4\2\2\u00fd\u00ff\5D#\2\u00fe\u00fc\3"+
		"\2\2\2\u00ff\u0102\3\2\2\2\u0100\u00fe\3\2\2\2\u0100\u0101\3\2\2\2\u0101"+
		"\u0103\3\2\2\2\u0102\u0100\3\2\2\2\u0103\u0104\7\6\2\2\u0104#\3\2\2\2"+
		"\u0105\u0107\5R*\2\u0106\u0108\5&\24\2\u0107\u0106\3\2\2\2\u0107\u0108"+
		"\3\2\2\2\u0108%\3\2\2\2\u0109\u010a\7\13\2\2\u010a\u010b\5D#\2\u010b\'"+
		"\3\2\2\2\u010c\u0115\7\7\2\2\u010d\u0112\5*\26\2\u010e\u010f\7\4\2\2\u010f"+
		"\u0111\5*\26\2\u0110\u010e\3\2\2\2\u0111\u0114\3\2\2\2\u0112\u0113\3\2"+
		"\2\2\u0112\u0110\3\2\2\2\u0113\u0116\3\2\2\2\u0114\u0112\3\2\2\2\u0115"+
		"\u010d\3\2\2\2\u0115\u0116\3\2\2\2\u0116\u0117\3\2\2\2\u0117\u0118\7\b"+
		"\2\2\u0118)\3\2\2\2\u0119\u011a\7%\2\2\u011a\u011b\5P)\2\u011b\u0120\5"+
		"R*\2\u011c\u011d\7\t\2\2\u011d\u011e\5H%\2\u011e\u011f\7\n\2\2\u011f\u0121"+
		"\3\2\2\2\u0120\u011c\3\2\2\2\u0120\u0121\3\2\2\2\u0121+\3\2\2\2\u0122"+
		"\u0131\7\5\2\2\u0123\u0124\5.\30\2\u0124\u0125\7\3\2\2\u0125\u012e\3\2"+
		"\2\2\u0126\u0129\5:\36\2\u0127\u0129\5> \2\u0128\u0126\3\2\2\2\u0128\u0127"+
		"\3\2\2\2\u0129\u012b\3\2\2\2\u012a\u012c\7\3\2\2\u012b\u012a\3\2\2\2\u012b"+
		"\u012c\3\2\2\2\u012c\u012e\3\2\2\2\u012d\u0123\3\2\2\2\u012d\u0128\3\2"+
		"\2\2\u012e\u0130\3\2\2\2\u012f\u012d\3\2\2\2\u0130\u0133\3\2\2\2\u0131"+
		"\u0132\3\2\2\2\u0131\u012f\3\2\2\2\u0132\u0134\3\2\2\2\u0133\u0131\3\2"+
		"\2\2\u0134\u0135\7\6\2\2\u0135-\3\2\2\2\u0136\u013e\5\62\32\2\u0137\u013e"+
		"\5<\37\2\u0138\u013e\5\f\7\2\u0139\u013e\5\26\f\2\u013a\u013e\5@!\2\u013b"+
		"\u013e\5B\"\2\u013c\u013e\5D#\2\u013d\u0136\3\2\2\2\u013d\u0137\3\2\2"+
		"\2\u013d\u0138\3\2\2\2\u013d\u0139\3\2\2\2\u013d\u013a\3\2\2\2\u013d\u013b"+
		"\3\2\2\2\u013d\u013c\3\2\2\2\u013e/\3\2\2\2\u013f\u0140\5R*\2\u0140\u0149"+
		"\7\7\2\2\u0141\u0146\5D#\2\u0142\u0143\7\4\2\2\u0143\u0145\5D#\2\u0144"+
		"\u0142\3\2\2\2\u0145\u0148\3\2\2\2\u0146\u0147\3\2\2\2\u0146\u0144\3\2"+
		"\2\2\u0147\u014a\3\2\2\2\u0148\u0146\3\2\2\2\u0149\u0141\3\2\2\2\u0149"+
		"\u014a\3\2\2\2\u014a\u014b\3\2\2\2\u014b\u014c\7\b\2\2\u014c\61\3\2\2"+
		"\2\u014d\u014e\5N(\2\u014e\u014f\5V,\2\u014f\u0150\5D#\2\u0150\63\3\2"+
		"\2\2\u0151\u0152\7(\2\2\u0152\u0153\5,\27\2\u0153\65\3\2\2\2\u0154\u0155"+
		"\7(\2\2\u0155\u0156\7&\2\2\u0156\u0157\5D#\2\u0157\u0158\5,\27\2\u0158"+
		"\67\3\2\2\2\u0159\u015a\7&\2\2\u015a\u015b\5D#\2\u015b\u015c\5,\27\2\u015c"+
		"9\3\2\2\2\u015d\u0161\58\35\2\u015e\u0160\5\66\34\2\u015f\u015e\3\2\2"+
		"\2\u0160\u0163\3\2\2\2\u0161\u0162\3\2\2\2\u0161\u015f\3\2\2\2\u0162\u0165"+
		"\3\2\2\2\u0163\u0161\3\2\2\2\u0164\u0166\5\64\33\2\u0165\u0164\3\2\2\2"+
		"\u0165\u0166\3\2\2\2\u0166;\3\2\2\2\u0167\u0169\7-\2\2\u0168\u016a\5D"+
		"#\2\u0169\u0168\3\2\2\2\u0169\u016a\3\2\2\2\u016a=\3\2\2\2\u016b\u016c"+
		"\7\63\2\2\u016c\u016d\7\7\2\2\u016d\u016e\5D#\2\u016e\u016f\7\b\2\2\u016f"+
		"\u0170\5,\27\2\u0170?\3\2\2\2\u0171\u0172\7\64\2\2\u0172A\3\2\2\2\u0173"+
		"\u0174\7\65\2\2\u0174C\3\2\2\2\u0175\u0176\b#\1\2\u0176\u0177\7\7\2\2"+
		"\u0177\u0178\5D#\2\u0178\u0179\7\b\2\2\u0179\u017f\3\2\2\2\u017a\u017b"+
		"\5`\61\2\u017b\u017c\5D#\r\u017c\u017f\3\2\2\2\u017d\u017f\5J&\2\u017e"+
		"\u0175\3\2\2\2\u017e\u017a\3\2\2\2\u017e\u017d\3\2\2\2\u017f\u01a6\3\2"+
		"\2\2\u0180\u0181\f\f\2\2\u0181\u0182\5b\62\2\u0182\u0183\5D#\r\u0183\u01a5"+
		"\3\2\2\2\u0184\u0185\f\13\2\2\u0185\u0186\5X-\2\u0186\u0187\5D#\f\u0187"+
		"\u01a5\3\2\2\2\u0188\u0189\f\n\2\2\u0189\u018a\5Z.\2\u018a\u018b\5D#\13"+
		"\u018b\u01a5\3\2\2\2\u018c\u018d\f\t\2\2\u018d\u018e\5\\/\2\u018e\u018f"+
		"\5D#\n\u018f\u01a5\3\2\2\2\u0190\u0191\f\b\2\2\u0191\u0192\5^\60\2\u0192"+
		"\u0193\5D#\t\u0193\u01a5\3\2\2\2\u0194\u0195\f\7\2\2\u0195\u0196\5d\63"+
		"\2\u0196\u0197\5D#\b\u0197\u01a5\3\2\2\2\u0198\u0199\f\6\2\2\u0199\u019a"+
		"\5f\64\2\u019a\u019b\5D#\7\u019b\u01a5\3\2\2\2\u019c\u019d\f\5\2\2\u019d"+
		"\u019e\5h\65\2\u019e\u019f\5D#\6\u019f\u01a5\3\2\2\2\u01a0\u01a1\f\4\2"+
		"\2\u01a1\u01a2\5j\66\2\u01a2\u01a3\5D#\5\u01a3\u01a5\3\2\2\2\u01a4\u0180"+
		"\3\2\2\2\u01a4\u0184\3\2\2\2\u01a4\u0188\3\2\2\2\u01a4\u018c\3\2\2\2\u01a4"+
		"\u0190\3\2\2\2\u01a4\u0194\3\2\2\2\u01a4\u0198\3\2\2\2\u01a4\u019c\3\2"+
		"\2\2\u01a4\u01a0\3\2\2\2\u01a5\u01a8\3\2\2\2\u01a6\u01a4\3\2\2\2\u01a6"+
		"\u01a7\3\2\2\2\u01a7E\3\2\2\2\u01a8\u01a6\3\2\2\2\u01a9\u01ac\78\2\2\u01aa"+
		"\u01ac\5N(\2\u01ab\u01a9\3\2\2\2\u01ab\u01aa\3\2\2\2\u01acG\3\2\2\2\u01ad"+
		"\u01b0\78\2\2\u01ae\u01b0\5N(\2\u01af\u01ad\3\2\2\2\u01af\u01ae\3\2\2"+
		"\2\u01b0I\3\2\2\2\u01b1\u01b9\78\2\2\u01b2\u01b9\79\2\2\u01b3\u01b9\7"+
		":\2\2\u01b4\u01b9\7\61\2\2\u01b5\u01b9\7\62\2\2\u01b6\u01b9\5\60\31\2"+
		"\u01b7\u01b9\5N(\2\u01b8\u01b1\3\2\2\2\u01b8\u01b2\3\2\2\2\u01b8\u01b3"+
		"\3\2\2\2\u01b8\u01b4\3\2\2\2\u01b8\u01b5\3\2\2\2\u01b8\u01b6\3\2\2\2\u01b8"+
		"\u01b7\3\2\2\2\u01b9K\3\2\2\2\u01ba\u01bf\5R*\2\u01bb\u01bc\7\t\2\2\u01bc"+
		"\u01bd\5F$\2\u01bd\u01be\7\n\2\2\u01be\u01c0\3\2\2\2\u01bf\u01bb\3\2\2"+
		"\2\u01bf\u01c0\3\2\2\2\u01c0M\3\2\2\2\u01c1\u01c6\5L\'\2\u01c2\u01c3\7"+
		"\f\2\2\u01c3\u01c5\5L\'\2\u01c4\u01c2\3\2\2\2\u01c5\u01c8\3\2\2\2\u01c6"+
		"\u01c4\3\2\2\2\u01c6\u01c7\3\2\2\2\u01c7O\3\2\2\2\u01c8\u01c6\3\2\2\2"+
		"\u01c9\u01ca\t\2\2\2\u01caQ\3\2\2\2\u01cb\u01cc\t\3\2\2\u01ccS\3\2\2\2"+
		"\u01cd\u01ce\7\67\2\2\u01ceU\3\2\2\2\u01cf\u01d0\t\4\2\2\u01d0W\3\2\2"+
		"\2\u01d1\u01d2\t\5\2\2\u01d2Y\3\2\2\2\u01d3\u01d4\t\6\2\2\u01d4[\3\2\2"+
		"\2\u01d5\u01d6\t\7\2\2\u01d6]\3\2\2\2\u01d7\u01d8\t\b\2\2\u01d8_\3\2\2"+
		"\2\u01d9\u01da\t\t\2\2\u01daa\3\2\2\2\u01db\u01dc\t\n\2\2\u01dcc\3\2\2"+
		"\2\u01dd\u01de\7 \2\2\u01dee\3\2\2\2\u01df\u01e0\7!\2\2\u01e0g\3\2\2\2"+
		"\u01e1\u01e2\7\"\2\2\u01e2i\3\2\2\2\u01e3\u01e4\7#\2\2\u01e4k\3\2\2\2"+
		"(npy|\u0082\u0096\u009b\u009f\u00aa\u00c3\u00ce\u00d3\u00d7\u00e7\u00f7"+
		"\u0100\u0107\u0112\u0115\u0120\u0128\u012b\u012d\u0131\u013d\u0146\u0149"+
		"\u0161\u0165\u0169\u017e\u01a4\u01a6\u01ab\u01af\u01b8\u01bf\u01c6";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}