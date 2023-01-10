import { CharStreams, CommonTokenStream, DiagnosticErrorListener } from "antlr4ts";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { mkdir, readFileSync, writeFileSync } from "fs";
import { ZenLexer } from "./grammar/ZenLexer";
import { BlockContext, HeadContext, MainContext, ZenParser } from "./grammar/ZenParser";
import { ZenListener } from "./grammar/ZenListener";
import _ from "lodash";
import { dirname } from "path";

import util from "util";



function writeFile(path: string, contents: string, errorCallback = (err: any) => {}) {
  mkdir(dirname(path), { recursive: true }, function (err) {
    if (err) return errorCallback(err);

    writeFileSync(path, contents);
  });
}

export function ParseFile(filePath: string) {
  const file = readFileSync(filePath, "utf8");
  let inputStream = CharStreams.fromString(file);
  let lexer = new ZenLexer(inputStream);
  let tokenStream = new CommonTokenStream(lexer);
  let parser = new ZenParser(tokenStream);
  parser.addErrorListener(new DiagnosticErrorListener());

  // Parse the input, where `compilationUnit` is whatever entry point you defined
  let tree = parser.main();

  let walker = new ParseTreeWalker();
  const newFilePath = filePath.replace(".zen", ".ts").replace("_input", "_output");
  let listener = new ToJSONListener();

  walker.walk(listener as ZenListener, tree);

  writeFile(newFilePath, listener.result);
}

type zenValueTypes = "bool" | "color" | "enum" | "float" | "int" | "raw" | "rawFloat" | "string" | "vec3";

class ToJSONListener implements ZenListener {
  result: string = "";

  printLine(line: string) {
    this.result += line + "\n";
  }

  printObjectNested(obj: any, name) {
    this.printLine(`${name}: {`);
    const keys = Object.keys(obj);
    for (const key of keys) {
      const value = obj[key];
      if (typeof value === "object") {
        this.printObjectNested(value, key);
      } else {
        this.printLine(`${key}:${value},`);
      }
    }
    this.printLine(`},`);
  }

  printArrayRecursive(array: any[]) {
    for (const obj of array) {
      if (typeof obj === "object") {
        this.printLine("{");
        const keys = Object.keys(obj);
        for (const key of keys) {
          const value = obj[key];
          if (typeof value === "object") {
            this.printObjectNested(value, key);
          } else {
            this.printLine(`${key}:${value},`);
          }
        }
        this.printLine("},");
      } else {
        this.printLine(`${obj},`);
      }
    }
  }

  firstTry = true;

  parseValue(rawValue: string) {
    const [valueType, value] = rawValue.split(":");
    const valueAsString = `${value}`;
    let parsedValue: any;
    switch (valueType) {
      case "bool":
        parsedValue = value === "true";
        break;
      case "color":
        parsedValue = valueAsString;
        break;
      case "enum":
        parsedValue = valueAsString;
        break;
      case "float":
        parsedValue = parseFloat(value);
        break;
      case "int":
        parsedValue = parseInt(value);
        break;
      case "raw":
        parsedValue = valueAsString;
        break;
      case "rawFloat":
        parsedValue = value.split(" ").map((v) => parseFloat(v));
        break;
      case "string":
        parsedValue = valueAsString;
        break;
      case "vec3":
        parsedValue = value.split(" ").map((v) => parseFloat(v));
        break;
      default:
        parsedValue = valueAsString;
        break;
    }
    return parsedValue;
  }

  blockHandler(ctx: BlockContext) {
    const blockResult = {};
    const blockName = ctx.blockName().text;
    const classPath = ctx.classPath().text;
    const leftIndex = ctx._leftIndex.text;
    const rightIndex = ctx._rightIndex.text;
    blockResult["blockName"] = blockName;
    blockResult["classPath"] = classPath;
    blockResult["leftIndex"] = leftIndex;
    blockResult["rightIndex"] = rightIndex;

    const attr = ctx.attr();
    for (const a of attr) {
      const attrName = a.Name().text;
      const attrValue = a.Value().text.replace("\r", "");
      let parsedValue = this.parseValue(attrValue);

      // const valueType = attrValue.childCount;
      if (!attrName.includes("childs")) {
        blockResult[attrName] = parsedValue;
      }
    }
    const blocks = ctx.block();
    if (blocks.length > 0) {
      blockResult["childs"] = [];

      for (const block of blocks) {
        blockResult["childs"].push(this.blockHandler(block));
      }
    }
    return blockResult;
  }

  enterMain(ctx: MainContext) {
    const resultArray = [];
    const head = ctx.head();
    const HighLevelBlock = ctx.block();
    const blocks = HighLevelBlock.block();

    for (const block of blocks) {
      resultArray.push(this.blockHandler(block));
    }

    const result = JSON.stringify(resultArray, null, 2);

    this.result = `export default ${result};`
  }
}
