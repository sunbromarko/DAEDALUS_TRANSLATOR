import { CharStreams, CommonTokenStream, DiagnosticErrorListener } from "antlr4ts";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";

import { mkdir, readFileSync, writeFileSync } from "fs";
import { AnimationListener } from "./grammar/AnimationListener";
import { AnimationParser, FileContext, ObjectContext, PropertyContext, ValueContext } from "./grammar/AnimationParser";
import { AnimationLexer } from "./grammar/AnimationLexer";
import _ from "lodash";
import { dirname } from "path";

function writeFile(path: string, contents: string, errorCallback = (err: any) => {}) {
  mkdir(dirname(path), { recursive: true }, function (err) {
    if (err) return errorCallback(err);

    writeFileSync(path, contents);
  });
}

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
  const newFilePath = filePath.replace(".asc", ".json").replace("_input", "_output");
  let listener = new ToTSListener();

  walker.walk(listener as AnimationListener, tree);

  writeFile(newFilePath, JSON.stringify(listener.animationFile, null, 2));
}

class ToTSListener implements AnimationListener {
  animationFile = {};

  handleObject(object: ObjectContext) {
    const result = {};
    const propertiesAddStrategy = new Map<string, "push" | "set">();

    const properties = object.property();
    for (const prop of properties) {
      const key = prop.key().text;
      const value = prop.value();
      if (value) {
        const newValue = this.handleValue(value);

        if (result[key]) {
          if (propertiesAddStrategy.get(key) === "push") {
            result[key].push(newValue);
          } else {
            result[key] = [result[key], newValue];
            propertiesAddStrategy.set(key, "push");
          }
        } else {
          result[key] = newValue;
          propertiesAddStrategy.set(key, "set");
        }
      }
      const object = prop.object();
      if (object) {
        const newValue = this.handleObject(object);

        if (result[key]) {
          if (propertiesAddStrategy.get(key) === "push") {
            result[key].push(newValue);
          } else {
            result[key] = [result[key], newValue];
            propertiesAddStrategy.set(key, "push");
          }
        } else {
          result[key] = newValue;
          propertiesAddStrategy.set(key, "set");
        }
      }
    }
    return result;
  }

  handleValue(rawValue: ValueContext) {
    const INT = rawValue.INT();
    const FLOAT = rawValue.FloatLiteral();
    const STRING = rawValue.STRING();
    const INT_FLOAT_SEQUENCE = rawValue.INT_FLOAT_SEQUENCE();

    if (INT) {
      return parseInt(INT.text);
    }
    if (FLOAT) {
      return parseFloat(FLOAT.text);
    }
    if (STRING) {
      return STRING.text.replaceAll('"', "");
    }
    if (INT_FLOAT_SEQUENCE) {
      const values = INT_FLOAT_SEQUENCE.text.split(/\s+|\t/);
      return values.map((value) => parseFloat(value));
    }
    throw new Error("Unknown value type");
  }

  enterFile(ctx: FileContext) {
    const properties = ctx.property();
    for (const prop of properties) {
      const key = prop.key().text;
      const value = prop.value();
      if (value) {
        // this.animationFile.push({[key]: this.handleValue(value)});
      }
      const object = prop.object();
      if (object) {
        if (this.animationFile[key]) {
          if (!Array.isArray(this.animationFile[key])) {
            this.animationFile[key] = [this.animationFile[key]];
          }

          this.animationFile[key].push(this.handleObject(object));
        } else {
          this.animationFile[key] = this.handleObject(object);
        }
      }
    }
  }

  exitFile(ctx: FileContext) {
    // console.log(JSON.stringify(this.animationFile));
  }
}
