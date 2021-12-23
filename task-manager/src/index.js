const express = require('express')
const mongoose = require('./db/mongoose')
const User = require('./models/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
// Create api for add new user
app.post('/user', (req,res) => {
    const user = new User(req.body)
    user.save().then((result) => {
        res.send(user)
    }).catch((error) => {
        res.send(error)
    })
})

app.listen(port, () => {
    console.log('Sever is up on port:' + port )
})