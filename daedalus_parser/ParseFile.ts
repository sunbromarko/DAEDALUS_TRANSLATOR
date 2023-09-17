import { CharStreams, CommonTokenStream, DiagnosticErrorListener } from "antlr4ts";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { DaedalusLexer } from "./grammar/DaedalusLexer";
import { DaedalusParser } from "./grammar/DaedalusParser";
import { readFileSync } from "fs";
import { ToTSListener } from "./listener";
import { DaedalusListener } from "./grammar/DaedalusListener";
import { DialogsListener } from "./dialogs_listener";
import { DialogsConditionsParser } from "./dialogs_transformer";

export function ParseFile(filePath: string) {
  const file = readFileSync(filePath, "latin1");
  let inputStream = CharStreams.fromString(file);
  let lexer = new DaedalusLexer(inputStream);
  let tokenStream = new CommonTokenStream(lexer);
  let parser = new DaedalusParser(tokenStream);
  parser.addErrorListener(new DiagnosticErrorListener());

  // Parse the input, where `compilationUnit` is whatever entry point you defined
  let tree = parser.daedalusFile();

  let walker = new ParseTreeWalker();
  const newFilePath = filePath.replace(".d", ".yarn").replace("_input", "_output");
  let listener = new DialogsListener(newFilePath);

  walker.walk(new DialogsConditionsParser() as DaedalusListener, tree);
  // walker.walk(listener as DaedalusListener, tree);
}
