const path = require('path')
const express = require('express')
const app = express()

console.log(path.join(__dirname, '../'))
const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

app.get('', (request, response) => {
    response.send("<h1>weather</h1>")
})

app.get("/help", (req, res) => {
    res.send("This is help page!")
})

app.get("/about", (req, res) => {
    res.send("This is about page!")
})

app.get("/weather", (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})


app.listen(3000, () => {
    console.log("Server is up on port 3000")
})