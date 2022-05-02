import * as fs from "fs";

// list of all the files in folder
const files = fs.readdirSync("./src");
console.log("files :>> ", files[0]);
