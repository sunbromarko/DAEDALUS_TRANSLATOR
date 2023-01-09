import { CharStreams, CommonTokenStream, DiagnosticErrorListener } from "antlr4ts";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { DaedalusLexer } from "./grammar/DaedalusLexer";
import { DaedalusParser } from "./grammar/DaedalusParser";

import { readFileSync } from "fs";
import { ToTSListener } from "./listener";

// Create the lexer and parser
ParseFile("./_input/BAU_900_Ricelord.d");

function ParseFile(filePath: string) {
  const file = readFileSync(filePath, "utf8");
  let inputStream = CharStreams.fromString(file);
  let lexer = new DaedalusLexer(inputStream);
  let tokenStream = new CommonTokenStream(lexer);
  let parser = new DaedalusParser(tokenStream);
  parser.addErrorListener(new DiagnosticErrorListener());

  // Parse the input, where `compilationUnit` is whatever entry point you defined
  let tree = parser.daedalusFile();

  let walker = new ParseTreeWalker();
  const newFilePath = filePath.replace(".d", ".ts").replace("_input", "_output");
  let listener = new ToTSListener(newFilePath);

  walker.walk(listener, tree);
}
// console.log(tree)
