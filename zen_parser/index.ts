import glob from "glob";
import { ParseFile } from "./ParseFile";

const files = glob.sync("./zen_parser/_input/**/*.zen");
for (const file of files) {
  ParseFile(file);
}
console.debug("Done");

// console.log(tree)
