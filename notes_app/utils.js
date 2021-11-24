const fs = require('fs')
// This lesson helps me to create the command to add something in server side like add new user, new account etc. 
// I thought so. This spent 5 times rewatch this lesson, currently I got it. so great!!! I feel so happy that 
// I had understanded it finally. 
//create function getNotes
const getNotes = function(){
    return 'Your notes...'
}
//create function addnote
const addNote = function(title, body){
    const notes = loadNotes() //call loadNotes function
    //the varriable to check duplication notes.title
    const duplicateNotes = notes.filter(function(notes){
        return notes.title === title
    })
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

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function(){
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
    addNote: addNote
}

