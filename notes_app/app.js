const fs = require("fs");
const getNotes = require("./utils.js");
const validator = require("validator");
const chalk = require("chalk");
const nodemon = require("nodemon")
//fs.writeFileSync('notes.txt', "this file was created by Node.js");
//fs.appendFileSync('notes.txt', " test appendFilesync");
// fs.copyFile("notes.txt", ["./notes-app", false]);
// console.log(getNotes)
if(validator.isEmail("test")){
    console.log(chalk.blueBright("Yes"));
}
else{
    console.log(chalk.yellow("No"));
}
    
//Currently, I am using nodemon module, I had have the issue when I only install it with no global
//the error I received is:
// nodemon : The term 'nodemon' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the 
// spelling of the name, or if a path was included, verify that the path is correct and try again.
// At line:1 char:1
// + nodemon -v
//     + CategoryInfo          : ObjectNotFound: (nodemon:String) [], CommandNotFoundException