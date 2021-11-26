const { notEqual } = require('assert')
const chalk = require('chalk')
const fs = require('fs')
// This lesson helps me to create the command to add something in server side like add new user, new account etc. 
// I thought so. This spent 5 times rewatch this lesson, currently I got it. so great!!! I feel so happy that 
// I had understanded it finally. 
//create function getNotes
const getNotes = () => {
    return 'Your notes...'
}
//create function addnote
const addNote = (title, body) => {
    const notes = loadNotes() //call loadNotes function
    //the varriable to check duplication notes.title
    const duplicateNotes = notes.filter((notes) => notes.title === title)
    // the condition allows write this note to notes.json
    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes) //call saveNotes function below
        console.log('New note added')
    }
    else{
        console.log('Note title taken')
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    }
    else{
        console.log(chalk.red.inverse('No note found!'))
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () =>{
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}

