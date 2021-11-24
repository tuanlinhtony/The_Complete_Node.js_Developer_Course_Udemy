const fs = require('fs')

//create function getNotes
const getNotes = function(){
    return 'Your notes...'
}
//create function addnote
const addNote = function(title, body){
    const notes = loadNotes() //call loadNotes function
    const duplicateNotes = notes.filter(function(notes){
        return notes.title === title
    })

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes)
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

