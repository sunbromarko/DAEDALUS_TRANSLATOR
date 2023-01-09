// Generated from /Users/sunbro.marko/Documents/_MY_GAMES_PROJECTS/UTILS/DAEDALUS_TRANSLATOR/zen_parser/Zen.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class ZenLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, MeshAndBsp=8, 
		Whitespace=9, Newline=10, Int=11, Date=12, Time=13, Value=14, Name=15;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "MeshAndBsp", 
			"Whitespace", "Newline", "Int", "Date", "Time", "Value", "Name", "Latin1Supplement", 
			"LatinExtendedA", "LatinExtendedB", "Cyrillic", "CyrillicSupplement", 
			"Letter", "Digit", "FirstChar", "NextChar", "Type"
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


	public ZenLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Zen.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\21\u00f6\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31"+
		"\t\31\4\32\t\32\3\2\3\2\3\3\3\3\3\4\3\4\3\4\3\5\3\5\3\6\3\6\3\7\3\7\3"+
		"\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t"+
		"\3\t\3\t\3\t\3\t\7\tY\n\t\f\t\16\t\\\13\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t"+
		"\3\n\6\nf\n\n\r\n\16\ng\3\n\3\n\3\13\3\13\5\13n\n\13\3\13\5\13q\n\13\3"+
		"\13\3\13\3\f\5\fv\n\f\3\f\6\fy\n\f\r\f\16\fz\3\r\3\r\5\r\177\n\r\3\r\3"+
		"\r\3\r\5\r\u0084\n\r\3\r\3\r\3\r\5\r\u0089\n\r\3\r\5\r\u008c\n\r\3\r\5"+
		"\r\u008f\n\r\3\16\3\16\5\16\u0093\n\16\3\16\3\16\3\16\5\16\u0098\n\16"+
		"\3\16\3\16\3\16\5\16\u009d\n\16\3\17\3\17\3\17\7\17\u00a2\n\17\f\17\16"+
		"\17\u00a5\13\17\3\20\3\20\7\20\u00a9\n\20\f\20\16\20\u00ac\13\20\3\21"+
		"\3\21\3\22\3\22\3\23\3\23\3\24\3\24\3\25\3\25\3\26\3\26\3\26\3\26\3\26"+
		"\3\26\5\26\u00be\n\26\3\27\3\27\3\30\3\30\5\30\u00c4\n\30\3\31\3\31\3"+
		"\31\5\31\u00c9\n\31\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32"+
		"\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32"+
		"\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32"+
		"\3\32\3\32\3\32\3\32\5\32\u00f5\n\32\3Z\2\33\3\3\5\4\7\5\t\6\13\7\r\b"+
		"\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\2#\2%\2\'\2)\2+\2"+
		"-\2/\2\61\2\63\2\3\2\f\4\2\13\13\"\"\3\2\f\f\3\2\u0082\u0101\3\2\u0102"+
		"\u0181\3\2\u0182\u0251\3\2\u0402\u0501\3\2\u0502\u0531\4\2C\\c|\3\2\62"+
		";\4\2/\60^^\2\u010b\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2"+
		"\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3"+
		"\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2"+
		"\2\3\65\3\2\2\2\5\67\3\2\2\2\79\3\2\2\2\t<\3\2\2\2\13>\3\2\2\2\r@\3\2"+
		"\2\2\17B\3\2\2\2\21D\3\2\2\2\23e\3\2\2\2\25p\3\2\2\2\27u\3\2\2\2\31|\3"+
		"\2\2\2\33\u0090\3\2\2\2\35\u009e\3\2\2\2\37\u00a6\3\2\2\2!\u00ad\3\2\2"+
		"\2#\u00af\3\2\2\2%\u00b1\3\2\2\2\'\u00b3\3\2\2\2)\u00b5\3\2\2\2+\u00bd"+
		"\3\2\2\2-\u00bf\3\2\2\2/\u00c3\3\2\2\2\61\u00c8\3\2\2\2\63\u00f4\3\2\2"+
		"\2\65\66\7]\2\2\66\4\3\2\2\2\678\7_\2\28\6\3\2\2\29:\7]\2\2:;\7_\2\2;"+
		"\b\3\2\2\2<=\7\'\2\2=\n\3\2\2\2>?\7<\2\2?\f\3\2\2\2@A\7\u00a9\2\2A\16"+
		"\3\2\2\2BC\7?\2\2C\20\3\2\2\2DE\7]\2\2EF\7O\2\2FG\7g\2\2GH\7u\2\2HI\7"+
		"j\2\2IJ\7C\2\2JK\7p\2\2KL\7f\2\2LM\7D\2\2MN\7u\2\2NO\7r\2\2OP\7\"\2\2"+
		"PQ\7\'\2\2QR\7\"\2\2RS\7\62\2\2ST\7\"\2\2TU\7\62\2\2UV\7_\2\2VZ\3\2\2"+
		"\2WY\13\2\2\2XW\3\2\2\2Y\\\3\2\2\2Z[\3\2\2\2ZX\3\2\2\2[]\3\2\2\2\\Z\3"+
		"\2\2\2]^\7]\2\2^_\7_\2\2_`\7\f\2\2`a\7\13\2\2ab\3\2\2\2bc\b\t\2\2c\22"+
		"\3\2\2\2df\t\2\2\2ed\3\2\2\2fg\3\2\2\2ge\3\2\2\2gh\3\2\2\2hi\3\2\2\2i"+
		"j\b\n\2\2j\24\3\2\2\2km\7\17\2\2ln\7\f\2\2ml\3\2\2\2mn\3\2\2\2nq\3\2\2"+
		"\2oq\7\f\2\2pk\3\2\2\2po\3\2\2\2qr\3\2\2\2rs\b\13\2\2s\26\3\2\2\2tv\7"+
		"/\2\2ut\3\2\2\2uv\3\2\2\2vx\3\2\2\2wy\5-\27\2xw\3\2\2\2yz\3\2\2\2zx\3"+
		"\2\2\2z{\3\2\2\2{\30\3\2\2\2|~\5-\27\2}\177\5-\27\2~}\3\2\2\2~\177\3\2"+
		"\2\2\177\u0080\3\2\2\2\u0080\u0081\7\60\2\2\u0081\u0083\5-\27\2\u0082"+
		"\u0084\5-\27\2\u0083\u0082\3\2\2\2\u0083\u0084\3\2\2\2\u0084\u0085\3\2"+
		"\2\2\u0085\u0086\7\60\2\2\u0086\u0088\5-\27\2\u0087\u0089\5-\27\2\u0088"+
		"\u0087\3\2\2\2\u0088\u0089\3\2\2\2\u0089\u008b\3\2\2\2\u008a\u008c\5-"+
		"\27\2\u008b\u008a\3\2\2\2\u008b\u008c\3\2\2\2\u008c\u008e\3\2\2\2\u008d"+
		"\u008f\5-\27\2\u008e\u008d\3\2\2\2\u008e\u008f\3\2\2\2\u008f\32\3\2\2"+
		"\2\u0090\u0092\5-\27\2\u0091\u0093\5-\27\2\u0092\u0091\3\2\2\2\u0092\u0093"+
		"\3\2\2\2\u0093\u0094\3\2\2\2\u0094\u0095\7<\2\2\u0095\u0097\5-\27\2\u0096"+
		"\u0098\5-\27\2\u0097\u0096\3\2\2\2\u0097\u0098\3\2\2\2\u0098\u0099\3\2"+
		"\2\2\u0099\u009a\7<\2\2\u009a\u009c\5-\27\2\u009b\u009d\5-\27\2\u009c"+
		"\u009b\3\2\2\2\u009c\u009d\3\2\2\2\u009d\34\3\2\2\2\u009e\u009f\5\63\32"+
		"\2\u009f\u00a3\7<\2\2\u00a0\u00a2\n\3\2\2\u00a1\u00a0\3\2\2\2\u00a2\u00a5"+
		"\3\2\2\2\u00a3\u00a1\3\2\2\2\u00a3\u00a4\3\2\2\2\u00a4\36\3\2\2\2\u00a5"+
		"\u00a3\3\2\2\2\u00a6\u00aa\5/\30\2\u00a7\u00a9\5\61\31\2\u00a8\u00a7\3"+
		"\2\2\2\u00a9\u00ac\3\2\2\2\u00aa\u00a8\3\2\2\2\u00aa\u00ab\3\2\2\2\u00ab"+
		" \3\2\2\2\u00ac\u00aa\3\2\2\2\u00ad\u00ae\t\4\2\2\u00ae\"\3\2\2\2\u00af"+
		"\u00b0\t\5\2\2\u00b0$\3\2\2\2\u00b1\u00b2\t\6\2\2\u00b2&\3\2\2\2\u00b3"+
		"\u00b4\t\7\2\2\u00b4(\3\2\2\2\u00b5\u00b6\t\b\2\2\u00b6*\3\2\2\2\u00b7"+
		"\u00be\t\t\2\2\u00b8\u00be\5!\21\2\u00b9\u00be\5#\22\2\u00ba\u00be\5%"+
		"\23\2\u00bb\u00be\5\'\24\2\u00bc\u00be\5)\25\2\u00bd\u00b7\3\2\2\2\u00bd"+
		"\u00b8\3\2\2\2\u00bd\u00b9\3\2\2\2\u00bd\u00ba\3\2\2\2\u00bd\u00bb\3\2"+
		"\2\2\u00bd\u00bc\3\2\2\2\u00be,\3\2\2\2\u00bf\u00c0\t\n\2\2\u00c0.\3\2"+
		"\2\2\u00c1\u00c4\5+\26\2\u00c2\u00c4\7a\2\2\u00c3\u00c1\3\2\2\2\u00c3"+
		"\u00c2\3\2\2\2\u00c4\60\3\2\2\2\u00c5\u00c9\5/\30\2\u00c6\u00c9\5-\27"+
		"\2\u00c7\u00c9\t\13\2\2\u00c8\u00c5\3\2\2\2\u00c8\u00c6\3\2\2\2\u00c8"+
		"\u00c7\3\2\2\2\u00c9\62\3\2\2\2\u00ca\u00cb\7d\2\2\u00cb\u00cc\7q\2\2"+
		"\u00cc\u00cd\7q\2\2\u00cd\u00f5\7n\2\2\u00ce\u00cf\7e\2\2\u00cf\u00d0"+
		"\7q\2\2\u00d0\u00d1\7n\2\2\u00d1\u00d2\7q\2\2\u00d2\u00f5\7t\2\2\u00d3"+
		"\u00d4\7g\2\2\u00d4\u00d5\7p\2\2\u00d5\u00d6\7w\2\2\u00d6\u00f5\7o\2\2"+
		"\u00d7\u00d8\7h\2\2\u00d8\u00d9\7n\2\2\u00d9\u00da\7q\2\2\u00da\u00db"+
		"\7c\2\2\u00db\u00f5\7v\2\2\u00dc\u00dd\7k\2\2\u00dd\u00de\7p\2\2\u00de"+
		"\u00f5\7v\2\2\u00df\u00e0\7t\2\2\u00e0\u00e1\7c\2\2\u00e1\u00f5\7y\2\2"+
		"\u00e2\u00e3\7t\2\2\u00e3\u00e4\7c\2\2\u00e4\u00e5\7y\2\2\u00e5\u00e6"+
		"\7H\2\2\u00e6\u00e7\7n\2\2\u00e7\u00e8\7q\2\2\u00e8\u00e9\7c\2\2\u00e9"+
		"\u00f5\7v\2\2\u00ea\u00eb\7u\2\2\u00eb\u00ec\7v\2\2\u00ec\u00ed\7t\2\2"+
		"\u00ed\u00ee\7k\2\2\u00ee\u00ef\7p\2\2\u00ef\u00f5\7i\2\2\u00f0\u00f1"+
		"\7x\2\2\u00f1\u00f2\7g\2\2\u00f2\u00f3\7e\2\2\u00f3\u00f5\7\65\2\2\u00f4"+
		"\u00ca\3\2\2\2\u00f4\u00ce\3\2\2\2\u00f4\u00d3\3\2\2\2\u00f4\u00d7\3\2"+
		"\2\2\u00f4\u00dc\3\2\2\2\u00f4\u00df\3\2\2\2\u00f4\u00e2\3\2\2\2\u00f4"+
		"\u00ea\3\2\2\2\u00f4\u00f0\3\2\2\2\u00f5\64\3\2\2\2\27\2Zgmpuz~\u0083"+
		"\u0088\u008b\u008e\u0092\u0097\u009c\u00a3\u00aa\u00bd\u00c3\u00c8\u00f4"+
		"\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}