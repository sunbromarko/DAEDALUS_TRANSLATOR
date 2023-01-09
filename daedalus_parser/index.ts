import glob from "glob";
import { ParseFile } from "./ParseFile";

const files = glob.sync("./daedalus_parser/_input/**/*.d");
for (const file of files) {
  ParseFile(file);
}
console.debug("Done");

// console.log(tree)
