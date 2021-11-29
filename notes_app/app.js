const fs = require("fs")
const notes = require("./utils.js")
const validator = require("validator")
const chalk = require("chalk")
const nodemon = require("nodemon")
const yargs = require("yargs")

// Create add command
yargs.command(
    {
        command:'add',
        describe: "Add new notes",
        builder:{
            title:{
                describe:'Note title details',
                demandOption: true,
                type: 'string'
            },
            body:{
                describe: "Notes body",
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            notes.addNote(argv.title, argv.body)
        }
    }
)

//Create list command
yargs.command(
    {
        command: 'list',
        describe: 'list all notes',
        handler(){
            notes.listNotes()
        }
    }
)

// Create reading command
yargs.command(
    {
        command: 'read',
        describe: 'read your note',
        builder:{
            title:{
                describe: 'Note Title',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv){
            notes.readNotes(argv.title)
            console.log('Reading a note')
        }
    }
)
// Create remove command
yargs.command(
    {
        command: 'remove',
        describe: "Remove a notes",
        builder:{
            title:{
                describe:'Note title details',
                demandOption: true,
                type: 'string'
            },
            
        },
        handler(argv){
            notes.removeNote(argv.title)
        }
    }
)
yargs.parse()
