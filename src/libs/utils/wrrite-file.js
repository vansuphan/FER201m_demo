import * as fs from "node:fs";

export const readFile = (path="../../../db2.json") => {
  fs.readFile(path, "utf8", (err, jsonString) => {
    if (err) {
      return;
    }
    try {
      const customer = JSON.parse(jsonString);
    } catch (err) {
      console.log("Error parsing JSON string:", err);
    }
  });
}

const updatedJSON = {
  "name":"arif updated",
  "surname":"shariati updated"
}

export const writeFile = (path = "../../../db2.json") => {
  fs.writeFile(path, JSON.stringify(updatedJSON), (err) => {
    if (err) console.log('Error writing file:', err);
})
}