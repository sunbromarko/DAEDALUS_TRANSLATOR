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
		Exponent=8, INT_FLOAT_SEQUENCE=9, ASTERISK=10, WS=11, Newline=12, OPEN_BRACE=13, 
		CLOSE_BRACE=14;
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
			"ASTERISK", "WS", "Newline", "OPEN_BRACE", "CLOSE_BRACE"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, "'*'", null, 
			null, "'{'", "'}'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "ID", "INT", "FloatLiteral", "STRING", "Digit", "PointFloat", "ExponentFloat", 
			"Exponent", "INT_FLOAT_SEQUENCE", "ASTERISK", "WS", "Newline", "OPEN_BRACE", 
			"CLOSE_BRACE"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\20\u00a9\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\3\2\5\2)\n\2\3\2\3\2\7\2-\n\2\f\2\16\2\60\13\2\3\3\3\3"+
		"\3\4\3\4\5\4\66\n\4\3\5\3\5\3\6\3\6\3\7\5\7=\n\7\3\7\6\7@\n\7\r\7\16\7"+
		"A\3\b\3\b\5\bF\n\b\3\t\3\t\3\t\3\t\3\t\5\tM\n\t\7\tO\n\t\f\t\16\tR\13"+
		"\t\3\t\3\t\3\n\3\n\3\13\5\13Y\n\13\3\13\7\13\\\n\13\f\13\16\13_\13\13"+
		"\3\13\3\13\6\13c\n\13\r\13\16\13d\3\13\6\13h\n\13\r\13\16\13i\3\13\3\13"+
		"\5\13n\n\13\3\f\5\fq\n\f\3\f\6\ft\n\f\r\f\16\fu\3\f\5\fy\n\f\3\f\3\f\3"+
		"\r\3\r\5\r\177\n\r\3\r\6\r\u0082\n\r\r\r\16\r\u0083\3\16\3\16\5\16\u0088"+
		"\n\16\3\16\3\16\3\16\5\16\u008d\n\16\7\16\u008f\n\16\f\16\16\16\u0092"+
		"\13\16\3\17\3\17\3\20\6\20\u0097\n\20\r\20\16\20\u0098\3\20\3\20\3\21"+
		"\3\21\5\21\u009f\n\21\3\21\5\21\u00a2\n\21\3\21\3\21\3\22\3\22\3\23\3"+
		"\23\2\2\24\3\3\5\2\7\2\t\2\13\2\r\4\17\5\21\6\23\7\25\b\27\t\31\n\33\13"+
		"\35\f\37\r!\16#\17%\20\3\2\b\4\2C\\c|\3\2\62;\4\2--//\6\2\f\f\17\17$$"+
		"^^\4\2GGgg\4\2\13\13\"\"\2\u00bd\2\3\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2"+
		"\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33"+
		"\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\3"+
		"(\3\2\2\2\5\61\3\2\2\2\7\65\3\2\2\2\t\67\3\2\2\2\139\3\2\2\2\r<\3\2\2"+
		"\2\17E\3\2\2\2\21G\3\2\2\2\23U\3\2\2\2\25m\3\2\2\2\27p\3\2\2\2\31|\3\2"+
		"\2\2\33\u0087\3\2\2\2\35\u0093\3\2\2\2\37\u0096\3\2\2\2!\u00a1\3\2\2\2"+
		"#\u00a5\3\2\2\2%\u00a7\3\2\2\2\')\5\13\6\2(\'\3\2\2\2()\3\2\2\2)*\3\2"+
		"\2\2*.\5\5\3\2+-\5\7\4\2,+\3\2\2\2-\60\3\2\2\2.,\3\2\2\2./\3\2\2\2/\4"+
		"\3\2\2\2\60.\3\2\2\2\61\62\5\t\5\2\62\6\3\2\2\2\63\66\5\t\5\2\64\66\7"+
		"a\2\2\65\63\3\2\2\2\65\64\3\2\2\2\66\b\3\2\2\2\678\t\2\2\28\n\3\2\2\2"+
		"9:\t\3\2\2:\f\3\2\2\2;=\t\4\2\2<;\3\2\2\2<=\3\2\2\2=?\3\2\2\2>@\5\13\6"+
		"\2?>\3\2\2\2@A\3\2\2\2A?\3\2\2\2AB\3\2\2\2B\16\3\2\2\2CF\5\25\13\2DF\5"+
		"\27\f\2EC\3\2\2\2ED\3\2\2\2F\20\3\2\2\2GP\7$\2\2HO\n\5\2\2IL\7^\2\2JM"+
		"\13\2\2\2KM\7\2\2\3LJ\3\2\2\2LK\3\2\2\2MO\3\2\2\2NH\3\2\2\2NI\3\2\2\2"+
		"OR\3\2\2\2PN\3\2\2\2PQ\3\2\2\2QS\3\2\2\2RP\3\2\2\2ST\7$\2\2T\22\3\2\2"+
		"\2UV\t\3\2\2V\24\3\2\2\2WY\t\4\2\2XW\3\2\2\2XY\3\2\2\2Y]\3\2\2\2Z\\\5"+
		"\23\n\2[Z\3\2\2\2\\_\3\2\2\2][\3\2\2\2]^\3\2\2\2^`\3\2\2\2_]\3\2\2\2`"+
		"b\7\60\2\2ac\5\23\n\2ba\3\2\2\2cd\3\2\2\2db\3\2\2\2de\3\2\2\2en\3\2\2"+
		"\2fh\5\23\n\2gf\3\2\2\2hi\3\2\2\2ig\3\2\2\2ij\3\2\2\2jk\3\2\2\2kl\7\60"+
		"\2\2ln\3\2\2\2mX\3\2\2\2mg\3\2\2\2n\26\3\2\2\2oq\t\4\2\2po\3\2\2\2pq\3"+
		"\2\2\2qx\3\2\2\2rt\5\23\n\2sr\3\2\2\2tu\3\2\2\2us\3\2\2\2uv\3\2\2\2vy"+
		"\3\2\2\2wy\5\25\13\2xs\3\2\2\2xw\3\2\2\2yz\3\2\2\2z{\5\31\r\2{\30\3\2"+
		"\2\2|~\t\6\2\2}\177\t\4\2\2~}\3\2\2\2~\177\3\2\2\2\177\u0081\3\2\2\2\u0080"+
		"\u0082\5\23\n\2\u0081\u0080\3\2\2\2\u0082\u0083\3\2\2\2\u0083\u0081\3"+
		"\2\2\2\u0083\u0084\3\2\2\2\u0084\32\3\2\2\2\u0085\u0088\5\r\7\2\u0086"+
		"\u0088\5\17\b\2\u0087\u0085\3\2\2\2\u0087\u0086\3\2\2\2\u0088\u0090\3"+
		"\2\2\2\u0089\u008c\5\37\20\2\u008a\u008d\5\r\7\2\u008b\u008d\5\17\b\2"+
		"\u008c\u008a\3\2\2\2\u008c\u008b\3\2\2\2\u008d\u008f\3\2\2\2\u008e\u0089"+
		"\3\2\2\2\u008f\u0092\3\2\2\2\u0090\u008e\3\2\2\2\u0090\u0091\3\2\2\2\u0091"+
		"\34\3\2\2\2\u0092\u0090\3\2\2\2\u0093\u0094\7,\2\2\u0094\36\3\2\2\2\u0095"+
		"\u0097\t\7\2\2\u0096\u0095\3\2\2\2\u0097\u0098\3\2\2\2\u0098\u0096\3\2"+
		"\2\2\u0098\u0099\3\2\2\2\u0099\u009a\3\2\2\2\u009a\u009b\b\20\2\2\u009b"+
		" \3\2\2\2\u009c\u009e\7\17\2\2\u009d\u009f\7\f\2\2\u009e\u009d\3\2\2\2"+
		"\u009e\u009f\3\2\2\2\u009f\u00a2\3\2\2\2\u00a0\u00a2\7\f\2\2\u00a1\u009c"+
		"\3\2\2\2\u00a1\u00a0\3\2\2\2\u00a2\u00a3\3\2\2\2\u00a3\u00a4\b\21\2\2"+
		"\u00a4\"\3\2\2\2\u00a5\u00a6\7}\2\2\u00a6$\3\2\2\2\u00a7\u00a8\7\177\2"+
		"\2\u00a8&\3\2\2\2\34\2(.\65<AELNPX]dimpux~\u0083\u0087\u008c\u0090\u0098"+
		"\u009e\u00a1\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}