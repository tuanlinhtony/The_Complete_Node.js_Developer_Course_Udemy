const fs = require("fs");
//fs.writeFileSync('notes.txt', "this file was created by Node.js");
//fs.appendFileSync('notes.txt', " test appendFilesync");
fs.copyFile("notes.txt", ["./notes-app", false]);
