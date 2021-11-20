const fs = require("fs");
const getNotes = require("./utils.js");
const validator = require("validator");
const chalk = require("chalk");
const nodemon = require("nodemon");
const yargs = require("yargs");

//fs.writeFileSync('notes.txt', "this file was created by Node.js");
//fs.appendFileSync('notes.txt', " test appendFilesync");
// fs.copyFile("notes.txt", ["./notes-app", false]);
// console.log(getNotes)
// if(validator.isEmail("test")){
//     console.log(chalk.blueBright("Yes"));
// }
// else{
//     console.log(chalk.yellow("No"));
// }
    
//Currently, I am using nodemon module, I had have the issue when I only install it with no global
//the error I received is:
// nodemon : The term 'nodemon' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the 
// spelling of the name, or if a path was included, verify that the path is correct and try again.
// At line:1 char:1
// + nodemon -v
//     + CategoryInfo          : ObjectNotFound: (nodemon:String) [], CommandNotFoundException
// console.log(process.argv);



//Customize yargs version
yargs.version('1.1.0')


yargs.command(
    {
        command: 'add',
        describe: 'Add a new note',
        handler: function(){
            console.log("Adding a new note!!");
        }
    }
)

//Creat remove command
yargs.command(
    {
        command:'remove',
        describe:'Remove a note',
        handler: function(){
            console.log("Removing the note")
        }
    }
)
//add, remove, read, list


//Challenge:
yargs.command(
    {
        command:'list',
        describe: "List all your notes",
        handler: function(){
            console.log("List your notes")
        }
    }
)
yargs.command(
    {
        command:'read',
        describe: "Read your notes",
        handler: function(){
            console.log("Read your notes")
        }
    }
)
console.log(yargs.argv);