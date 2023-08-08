import glob from "glob";
import { ParseFile } from "./ParseFile";
import { ImportantListener } from "./important_listener";
import { writeFileSync } from "fs";

const files = glob.sync("./daedalus_parser/_input/**/*.d");
let listener = new ImportantListener();

for (const file of files) {
  ParseFile(file, listener);
}

const resultJson = [];

for (const { name, properties } of listener.dialogsInstances.values()) {
  if (properties.important !== "1") continue;

  const conditionFunc = listener.dialogsFunctions.get(properties.condition);

  resultJson.push({
    name,
    properties,
    conditionFuncText: conditionFunc ? conditionFunc.text : "Функция не найдена",
  });
}

writeFileSync("./importantDialogs.json", JSON.stringify(resultJson));
// console.log(resultJson);
