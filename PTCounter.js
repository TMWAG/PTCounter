"use strict";
const fs = require("fs");
const gcodeRegExp = /\.gcode/;
let gcodeFiles = new Set();
fs.readdir("./", "utf-8", (error, files) => {
  for (const file of files) {
    if (gcodeRegExp.test(file)) {
      console.log(typeof file);
      gcodeFiles.add(file.toString());
    }
  }
});
setTimeout(() => {
  console.log(gcodeFiles);
}, 10);
