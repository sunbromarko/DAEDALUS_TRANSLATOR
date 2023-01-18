import glob from "glob";
import { ParseFile } from "./parseFile";

const files = glob.sync("./asc_parser/_input/**/*.asc");
for (const file of files) {
  ParseFile(file);
}
console.debug("Done");

// console.log(tree)
