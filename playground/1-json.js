const fs = require('fs')
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// // console.log(bookJSON)
// // const parseData = JSON.parse(bookJSON)
// // console.log(parseData.author)
// fs.writeFileSync('1-json.json',bookJSON)
// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// console.log(dataBuffer.toString())
// const data = JSON.parse(dataJSON)
// console.log(data.title)

//Change value in object json
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const book = JSON.parse(dataJSON)
console.log(book)
book.title = 'HO CHI MINH, A LIFE'
book.author = "WILLIAM J. DUIKER"
const bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJSON)
console.log(book)
