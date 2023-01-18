import { CharStreams, CommonTokenStream, DiagnosticErrorListener } from "antlr4ts";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";

import { readFileSync } from "fs";
import { AnimationListener } from "./grammar/AnimationListener";
import { AnimationParser, FileContext, PropertyContext } from "./grammar/AnimationParser";
import { AnimationLexer } from "./grammar/AnimationLexer";


export function ParseFile(filePath: string) {
  const file = readFileSync(filePath, "utf8");
  let inputStream = CharStreams.fromString(file);
  let lexer = new AnimationLexer(inputStream);
  let tokenStream = new CommonTokenStream(lexer);
  let parser = new AnimationParser(tokenStream);
  parser.addErrorListener(new DiagnosticErrorListener());

  // Parse the input, where `compilationUnit` is whatever entry point you defined
  let tree = parser.file();

  let walker = new ParseTreeWalker();
  const newFilePath = filePath.replace(".d", ".ts").replace("_input", "_output");
  let listener = new ToTSListener();

  walker.walk(listener as AnimationListener, tree);
}

class ToTSListener implements AnimationListener {
  animationFile = {}

  enterFile (ctx: FileContext){
    const properties = ctx.property()
    console.log(properties.length);
    

    for (const prop of properties){
      // console.log(prop.text);
      
      const key = prop.key().ID().text

      const value = prop.value()
      const object = prop.object()
      console.log({ key ,value:value?.text, hasObject:!!object});       
      

      if(value){
      }
      // const object = prop.object()
      // if(object){
        
      //   const props = object.property()
      // } 
    }
  };
}
