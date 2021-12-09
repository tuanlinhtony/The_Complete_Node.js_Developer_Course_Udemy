const express = require('express')
const app = express()

app.get('', (request, response) => {
    response.send("Hello Express!!!!")
})

app.get("/help", (req, res) => {
    res.send("This is help page!")
})

app.get("/about", (req, res) => {
    res.send("This is about page!")
})

app.get("/weather", (req, res) => {
    res.send("This is weather page!")
})


app.listen(3000, () => {
    console.log("Server is up on port 3000")
})