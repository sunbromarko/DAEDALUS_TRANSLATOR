// Generated from /Users/sunbro.marko/Documents/_MY_GAMES_PROJECTS/UTILS/DAEDALUS_TRANSLATOR/asc_parser/grammar/Animation.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class AnimationLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		ID=1, INT=2, FloatLiteral=3, STRING=4, Digit=5, PointFloat=6, ExponentFloat=7, 
		Exponent=8, INT_FLOAT_SEQUENCE=9, ASTERISK=10, WS=11, OPEN_BRACE=12, CLOSE_BRACE=13;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"ID", "Char", "NextChar", "Letter", "DIGIT", "INT", "FloatLiteral", "STRING", 
			"Digit", "PointFloat", "ExponentFloat", "Exponent", "INT_FLOAT_SEQUENCE", 
			"ASTERISK", "WS", "OPEN_BRACE", "CLOSE_BRACE"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, "'*'", null, 
			"'{'", "'}'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "ID", "INT", "FloatLiteral", "STRING", "Digit", "PointFloat", "ExponentFloat", 
			"Exponent", "INT_FLOAT_SEQUENCE", "ASTERISK", "WS", "OPEN_BRACE", "CLOSE_BRACE"
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


	public AnimationLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Animation.g4"; }

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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\17\u009e\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\3\2\5\2\'\n\2\3\2\3\2\7\2+\n\2\f\2\16\2.\13\2\3\3\3\3\3\4\3\4\5"+
		"\4\64\n\4\3\5\3\5\3\6\3\6\3\7\5\7;\n\7\3\7\6\7>\n\7\r\7\16\7?\3\b\3\b"+
		"\5\bD\n\b\3\t\3\t\3\t\3\t\3\t\5\tK\n\t\7\tM\n\t\f\t\16\tP\13\t\3\t\3\t"+
		"\3\n\3\n\3\13\5\13W\n\13\3\13\7\13Z\n\13\f\13\16\13]\13\13\3\13\3\13\6"+
		"\13a\n\13\r\13\16\13b\3\13\6\13f\n\13\r\13\16\13g\3\13\3\13\5\13l\n\13"+
		"\3\f\5\fo\n\f\3\f\6\fr\n\f\r\f\16\fs\3\f\5\fw\n\f\3\f\3\f\3\r\3\r\5\r"+
		"}\n\r\3\r\6\r\u0080\n\r\r\r\16\r\u0081\3\16\3\16\5\16\u0086\n\16\3\16"+
		"\3\16\3\16\5\16\u008b\n\16\7\16\u008d\n\16\f\16\16\16\u0090\13\16\3\17"+
		"\3\17\3\20\6\20\u0095\n\20\r\20\16\20\u0096\3\20\3\20\3\21\3\21\3\22\3"+
		"\22\2\2\23\3\3\5\2\7\2\t\2\13\2\r\4\17\5\21\6\23\7\25\b\27\t\31\n\33\13"+
		"\35\f\37\r!\16#\17\3\2\b\4\2C\\c|\3\2\62;\4\2--//\6\2\f\f\17\17$$^^\4"+
		"\2GGgg\5\2\13\f\17\17\"\"\2\u00b0\2\3\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2"+
		"\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33"+
		"\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\3&\3\2\2\2\5"+
		"/\3\2\2\2\7\63\3\2\2\2\t\65\3\2\2\2\13\67\3\2\2\2\r:\3\2\2\2\17C\3\2\2"+
		"\2\21E\3\2\2\2\23S\3\2\2\2\25k\3\2\2\2\27n\3\2\2\2\31z\3\2\2\2\33\u0085"+
		"\3\2\2\2\35\u0091\3\2\2\2\37\u0094\3\2\2\2!\u009a\3\2\2\2#\u009c\3\2\2"+
		"\2%\'\5\13\6\2&%\3\2\2\2&\'\3\2\2\2\'(\3\2\2\2(,\5\5\3\2)+\5\7\4\2*)\3"+
		"\2\2\2+.\3\2\2\2,*\3\2\2\2,-\3\2\2\2-\4\3\2\2\2.,\3\2\2\2/\60\5\t\5\2"+
		"\60\6\3\2\2\2\61\64\5\t\5\2\62\64\7a\2\2\63\61\3\2\2\2\63\62\3\2\2\2\64"+
		"\b\3\2\2\2\65\66\t\2\2\2\66\n\3\2\2\2\678\t\3\2\28\f\3\2\2\29;\t\4\2\2"+
		":9\3\2\2\2:;\3\2\2\2;=\3\2\2\2<>\5\13\6\2=<\3\2\2\2>?\3\2\2\2?=\3\2\2"+
		"\2?@\3\2\2\2@\16\3\2\2\2AD\5\25\13\2BD\5\27\f\2CA\3\2\2\2CB\3\2\2\2D\20"+
		"\3\2\2\2EN\7$\2\2FM\n\5\2\2GJ\7^\2\2HK\13\2\2\2IK\7\2\2\3JH\3\2\2\2JI"+
		"\3\2\2\2KM\3\2\2\2LF\3\2\2\2LG\3\2\2\2MP\3\2\2\2NL\3\2\2\2NO\3\2\2\2O"+
		"Q\3\2\2\2PN\3\2\2\2QR\7$\2\2R\22\3\2\2\2ST\t\3\2\2T\24\3\2\2\2UW\t\4\2"+
		"\2VU\3\2\2\2VW\3\2\2\2W[\3\2\2\2XZ\5\23\n\2YX\3\2\2\2Z]\3\2\2\2[Y\3\2"+
		"\2\2[\\\3\2\2\2\\^\3\2\2\2][\3\2\2\2^`\7\60\2\2_a\5\23\n\2`_\3\2\2\2a"+
		"b\3\2\2\2b`\3\2\2\2bc\3\2\2\2cl\3\2\2\2df\5\23\n\2ed\3\2\2\2fg\3\2\2\2"+
		"ge\3\2\2\2gh\3\2\2\2hi\3\2\2\2ij\7\60\2\2jl\3\2\2\2kV\3\2\2\2ke\3\2\2"+
		"\2l\26\3\2\2\2mo\t\4\2\2nm\3\2\2\2no\3\2\2\2ov\3\2\2\2pr\5\23\n\2qp\3"+
		"\2\2\2rs\3\2\2\2sq\3\2\2\2st\3\2\2\2tw\3\2\2\2uw\5\25\13\2vq\3\2\2\2v"+
		"u\3\2\2\2wx\3\2\2\2xy\5\31\r\2y\30\3\2\2\2z|\t\6\2\2{}\t\4\2\2|{\3\2\2"+
		"\2|}\3\2\2\2}\177\3\2\2\2~\u0080\5\23\n\2\177~\3\2\2\2\u0080\u0081\3\2"+
		"\2\2\u0081\177\3\2\2\2\u0081\u0082\3\2\2\2\u0082\32\3\2\2\2\u0083\u0086"+
		"\5\r\7\2\u0084\u0086\5\17\b\2\u0085\u0083\3\2\2\2\u0085\u0084\3\2\2\2"+
		"\u0086\u008e\3\2\2\2\u0087\u008a\5\37\20\2\u0088\u008b\5\r\7\2\u0089\u008b"+
		"\5\17\b\2\u008a\u0088\3\2\2\2\u008a\u0089\3\2\2\2\u008b\u008d\3\2\2\2"+
		"\u008c\u0087\3\2\2\2\u008d\u0090\3\2\2\2\u008e\u008c\3\2\2\2\u008e\u008f"+
		"\3\2\2\2\u008f\34\3\2\2\2\u0090\u008e\3\2\2\2\u0091\u0092\7,\2\2\u0092"+
		"\36\3\2\2\2\u0093\u0095\t\7\2\2\u0094\u0093\3\2\2\2\u0095\u0096\3\2\2"+
		"\2\u0096\u0094\3\2\2\2\u0096\u0097\3\2\2\2\u0097\u0098\3\2\2\2\u0098\u0099"+
		"\b\20\2\2\u0099 \3\2\2\2\u009a\u009b\7}\2\2\u009b\"\3\2\2\2\u009c\u009d"+
		"\7\177\2\2\u009d$\3\2\2\2\32\2&,\63:?CJLNV[bgknsv|\u0081\u0085\u008a\u008e"+
		"\u0096\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}