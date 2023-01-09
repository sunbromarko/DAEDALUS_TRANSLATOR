// Generated from /Users/sunbro.marko/Documents/_MY_GAMES_PROJECTS/UTILS/DAEDALUS_TRANSLATOR/zen_parser/grammar/Zen.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class ZenParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, MeshAndBsp=8, 
		Whitespace=9, Newline=10, Int=11, Date=12, Time=13, Value=14, Name=15;
	public static final int
		RULE_main = 0, RULE_head = 1, RULE_block = 2, RULE_blockName = 3, RULE_classPath = 4, 
		RULE_attr = 5;
	private static String[] makeRuleNames() {
		return new String[] {
			"main", "head", "block", "blockName", "classPath", "attr"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'['", "']'", "'[]'", "'%'", "':'", "'\u00A7'", "'='"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, "MeshAndBsp", "Whitespace", 
			"Newline", "Int", "Date", "Time", "Value", "Name"
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
	public String getGrammarFileName() { return "Zen.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public ZenParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class MainContext extends ParserRuleContext {
		public BlockContext body;
		public HeadContext head() {
			return getRuleContext(HeadContext.class,0);
		}
		public TerminalNode EOF() { return getToken(ZenParser.EOF, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public MainContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_main; }
	}

	public final MainContext main() throws RecognitionException {
		MainContext _localctx = new MainContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_main);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(12);
			head();
			{
			setState(13);
			((MainContext)_localctx).body = block();
			}
			setState(14);
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

	public static class HeadContext extends ParserRuleContext {
		public Token version;
		public Token zenType;
		public Token saveGame;
		public Token date;
		public Token time;
		public Token user;
		public Token objectsCount;
		public List<TerminalNode> Name() { return getTokens(ZenParser.Name); }
		public TerminalNode Name(int i) {
			return getToken(ZenParser.Name, i);
		}
		public List<TerminalNode> Int() { return getTokens(ZenParser.Int); }
		public TerminalNode Int(int i) {
			return getToken(ZenParser.Int, i);
		}
		public TerminalNode Date() { return getToken(ZenParser.Date, 0); }
		public TerminalNode Time() { return getToken(ZenParser.Time, 0); }
		public HeadContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_head; }
	}

	public final HeadContext head() throws RecognitionException {
		HeadContext _localctx = new HeadContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_head);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(16);
			match(Name);
			setState(17);
			match(Name);
			setState(18);
			match(Name);
			{
			setState(19);
			((HeadContext)_localctx).version = match(Int);
			}
			setState(20);
			match(Name);
			{
			setState(21);
			((HeadContext)_localctx).zenType = match(Name);
			}
			setState(22);
			match(Name);
			{
			setState(23);
			((HeadContext)_localctx).saveGame = match(Int);
			}
			setState(24);
			match(Name);
			{
			setState(25);
			((HeadContext)_localctx).date = match(Date);
			}
			{
			setState(26);
			((HeadContext)_localctx).time = match(Time);
			}
			setState(27);
			match(Name);
			{
			setState(28);
			((HeadContext)_localctx).user = match(Name);
			}
			setState(29);
			match(Name);
			setState(30);
			match(Name);
			{
			setState(31);
			((HeadContext)_localctx).objectsCount = match(Int);
			}
			setState(32);
			match(Name);
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

	public static class BlockContext extends ParserRuleContext {
		public Token leftIndex;
		public Token rightIndex;
		public BlockNameContext blockName() {
			return getRuleContext(BlockNameContext.class,0);
		}
		public ClassPathContext classPath() {
			return getRuleContext(ClassPathContext.class,0);
		}
		public List<TerminalNode> Int() { return getTokens(ZenParser.Int); }
		public TerminalNode Int(int i) {
			return getToken(ZenParser.Int, i);
		}
		public List<BlockContext> block() {
			return getRuleContexts(BlockContext.class);
		}
		public BlockContext block(int i) {
			return getRuleContext(BlockContext.class,i);
		}
		public List<AttrContext> attr() {
			return getRuleContexts(AttrContext.class);
		}
		public AttrContext attr(int i) {
			return getRuleContext(AttrContext.class,i);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(34);
			match(T__0);
			setState(35);
			blockName();
			setState(36);
			classPath();
			{
			setState(37);
			((BlockContext)_localctx).leftIndex = match(Int);
			}
			{
			setState(38);
			((BlockContext)_localctx).rightIndex = match(Int);
			}
			setState(39);
			match(T__1);
			setState(44);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__0 || _la==Name) {
				{
				setState(42);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__0:
					{
					setState(40);
					block();
					}
					break;
				case Name:
					{
					setState(41);
					attr();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(46);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(47);
			match(T__2);
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

	public static class BlockNameContext extends ParserRuleContext {
		public TerminalNode Name() { return getToken(ZenParser.Name, 0); }
		public BlockNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_blockName; }
	}

	public final BlockNameContext blockName() throws RecognitionException {
		BlockNameContext _localctx = new BlockNameContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_blockName);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(49);
			_la = _input.LA(1);
			if ( !(_la==T__3 || _la==Name) ) {
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

	public static class ClassPathContext extends ParserRuleContext {
		public List<TerminalNode> Name() { return getTokens(ZenParser.Name); }
		public TerminalNode Name(int i) {
			return getToken(ZenParser.Name, i);
		}
		public ClassPathContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classPath; }
	}

	public final ClassPathContext classPath() throws RecognitionException {
		ClassPathContext _localctx = new ClassPathContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_classPath);
		int _la;
		try {
			setState(61);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Name:
				enterOuterAlt(_localctx, 1);
				{
				setState(51);
				match(Name);
				setState(56);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__4) {
					{
					{
					setState(52);
					match(T__4);
					setState(53);
					match(Name);
					}
					}
					setState(58);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case T__5:
				enterOuterAlt(_localctx, 2);
				{
				setState(59);
				match(T__5);
				}
				break;
			case T__3:
				enterOuterAlt(_localctx, 3);
				{
				setState(60);
				match(T__3);
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

	public static class AttrContext extends ParserRuleContext {
		public TerminalNode Name() { return getToken(ZenParser.Name, 0); }
		public TerminalNode Value() { return getToken(ZenParser.Value, 0); }
		public AttrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_attr; }
	}

	public final AttrContext attr() throws RecognitionException {
		AttrContext _localctx = new AttrContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_attr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(63);
			match(Name);
			setState(64);
			match(T__6);
			setState(65);
			match(Value);
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

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\21F\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3"+
		"\4\3\4\3\4\3\4\7\4-\n\4\f\4\16\4\60\13\4\3\4\3\4\3\5\3\5\3\6\3\6\3\6\7"+
		"\69\n\6\f\6\16\6<\13\6\3\6\3\6\5\6@\n\6\3\7\3\7\3\7\3\7\3\7\2\2\b\2\4"+
		"\6\b\n\f\2\3\4\2\6\6\21\21\2D\2\16\3\2\2\2\4\22\3\2\2\2\6$\3\2\2\2\b\63"+
		"\3\2\2\2\n?\3\2\2\2\fA\3\2\2\2\16\17\5\4\3\2\17\20\5\6\4\2\20\21\7\2\2"+
		"\3\21\3\3\2\2\2\22\23\7\21\2\2\23\24\7\21\2\2\24\25\7\21\2\2\25\26\7\r"+
		"\2\2\26\27\7\21\2\2\27\30\7\21\2\2\30\31\7\21\2\2\31\32\7\r\2\2\32\33"+
		"\7\21\2\2\33\34\7\16\2\2\34\35\7\17\2\2\35\36\7\21\2\2\36\37\7\21\2\2"+
		"\37 \7\21\2\2 !\7\21\2\2!\"\7\r\2\2\"#\7\21\2\2#\5\3\2\2\2$%\7\3\2\2%"+
		"&\5\b\5\2&\'\5\n\6\2\'(\7\r\2\2()\7\r\2\2).\7\4\2\2*-\5\6\4\2+-\5\f\7"+
		"\2,*\3\2\2\2,+\3\2\2\2-\60\3\2\2\2.,\3\2\2\2./\3\2\2\2/\61\3\2\2\2\60"+
		".\3\2\2\2\61\62\7\5\2\2\62\7\3\2\2\2\63\64\t\2\2\2\64\t\3\2\2\2\65:\7"+
		"\21\2\2\66\67\7\7\2\2\679\7\21\2\28\66\3\2\2\29<\3\2\2\2:8\3\2\2\2:;\3"+
		"\2\2\2;@\3\2\2\2<:\3\2\2\2=@\7\b\2\2>@\7\6\2\2?\65\3\2\2\2?=\3\2\2\2?"+
		">\3\2\2\2@\13\3\2\2\2AB\7\21\2\2BC\7\t\2\2CD\7\20\2\2D\r\3\2\2\2\6,.:"+
		"?";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}