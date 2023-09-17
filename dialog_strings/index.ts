import { readFileSync, writeFileSync } from "fs";
import glob from "glob";

const result = [];

function ParseFile(file: string) {
  const dialogStringPattern = /,"(?<key>.+)"\);.+\/\/(?<value>.+)/gm;
  const dialogs = [...file.matchAll(dialogStringPattern)];

  for (const match of dialogs) {
    const { key, value } = match.groups;
    result.push([key, value]);
  }

  const optionsStringsPattern = /Info_AddChoice.+,"(?<value>.+)",(?<key>.+)\);/gm;
  const options = [...file.matchAll(optionsStringsPattern)];

  for (const match of options) {
    const { key, value } = match.groups;
    result.push([key, value]);
  }
}

const files = glob.sync("./daedalus_parser/_input/**/*.d");
for (const file of files) {
  const filetext = readFileSync(file, "latin1");
  ParseFile(filetext);
}

const resultTsFile = `const dictionary = new Map(${JSON.stringify(result)})`;
writeFileSync("./dialog_strings/result.ts", resultTsFile);

console.log(result);
console.debug("Done");
