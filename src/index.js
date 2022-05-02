"use strict";
exports.__esModule = true;
var fs = require("fs");
// list of all the files in folder
var files = fs.readdirSync("./src");
console.log("files :>> ", files[0]);
