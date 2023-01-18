grammar Animation;

file: property* EOF;

property: key (object|value);
object: OPEN_BRACE property* CLOSE_BRACE;

value: INT | INT_FLOAT_SEQUENCE | FloatLiteral | STRING | EOF;

key: ASTERISK ID;
ID: DIGIT? Char NextChar*;

fragment Char: Letter ;
fragment NextChar: Letter | '_';
fragment Letter: [A-Za-z];
fragment DIGIT: [0-9];

INT: [-+]? DIGIT+;
FloatLiteral: PointFloat | ExponentFloat;
STRING: '"' (~["\\\r\n] | '\\' (. | EOF))* '"';
Digit: [0-9];
PointFloat: [-+]? Digit* '.' Digit+ | Digit+ '.';
ExponentFloat: [-+]? (Digit+ | PointFloat) Exponent;
Exponent: [eE] [+-]? Digit+;
INT_FLOAT_SEQUENCE: (INT | FloatLiteral) (WS (INT | FloatLiteral))*;

ASTERISK: '*';
WS: [ \t\r\n]+ ->skip;
//WS: [ \t]+ -> skip;
//Newline: ('\r' '\n'? | '\n') -> skip;
OPEN_BRACE: '{';
CLOSE_BRACE: '}';

/*
grammar Animation;

file: property* EOF;

property: key (value | object);
object: OPEN_BRACE property* CLOSE_BRACE;

key: ASTERISK ID;
value: INT | FloatLiteral | STRING | INT_FLOAT_SEQUENCE;

ID: [A-Za-z_0-9]+;
DIGIT: [0-9];
INT: [0-9]+;
FloatLiteral: PointFloat | ExponentFloat;
STRING: '"' (~["\\\r\n] | '\\' (. | EOF))* '"';
Digit: [0-9];
PointFloat: [-+]? Digit* '.' Digit+ | Digit+ '.';
ExponentFloat: [-+]? (Digit+ | PointFloat) Exponent;
Exponent: [eE] [+-]? Digit+;
INT_FLOAT_SEQUENCE: (INT | FloatLiteral) (
		WS (INT | FloatLiteral)
	)*;

ASTERISK: '*';
WS: [ \t\r\n]+ -> skip;
// WS: [ \t]+ -> skip;
Newline: ('\r' '\n'? | '\n') -> skip;
OPEN_BRACE: '{';
CLOSE_BRACE: '}';
*/