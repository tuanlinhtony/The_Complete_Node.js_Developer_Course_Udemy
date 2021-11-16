const fs = require("fs");
const getNotes = require("./utils.js");
const validator = require("validator");
const chalk = require("chalk");
//fs.writeFileSync('notes.txt', "this file was created by Node.js");
//fs.appendFileSync('notes.txt', " test appendFilesync");
// fs.copyFile("notes.txt", ["./notes-app", false]);
// console.log(getNotes)
if(validator.isEmail("test")){
    console.log(chalk.blueBright("Yes"));
}
else{
    console.log(chalk.redBright("No"));
}
    