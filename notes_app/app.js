const fs = require("fs")
const notes = require("./utils.js")
const validator = require("validator")
const chalk = require("chalk")
const nodemon = require("nodemon")
const yargs = require("yargs")

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
        handler: function(argv){
            notes.addNote(argv.title, argv.body)
        }
    }
)
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
        handler: function(argv){
            notes.removeNote(argv.title)
        }
    }
)
yargs.parse()
