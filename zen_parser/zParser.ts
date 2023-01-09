import { CharStreams, CommonTokenStream, DiagnosticErrorListener } from "antlr4ts";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";

import { readFileSync } from "fs";
import { ToTSListener } from "../daedalus_parser/listener";
import { ZenLexer } from "./grammar/ZenLexer";
import { ZenParser } from "./grammar/ZenParser";

const file = readFileSync("./targetScripts/BAU_900_Ricelord.d", "utf8");

// Create the lexer and parser
let inputStream = CharStreams.fromString(file);
let lexer = new ZenLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new ZenParser(tokenStream);
parser.addErrorListener(new DiagnosticErrorListener());

// Parse the input, where `compilationUnit` is whatever entry point you defined
let tree = parser.head();

let walker = new ParseTreeWalker();
// let listener = new ToTSListener();

// walker.walk(listener, tree);

// console.log(tree)
