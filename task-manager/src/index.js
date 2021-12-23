const express = require('express')
const mongoose = require('./db/mongoose')

const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
// Create api for add new user
app.post('/users', (req,res) => {
    const user = new User(req.body)
    user.save().then((user) => {
        res.send(user)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

// Create api for find all users
app.get('/users', (req,res) => {
    User.find({}).then((users) => {
        res.send(users)
    }).catch((error) => {
        res.status(500).send()
    })
})

// Create api for find user with ID
app.get('/users/:id', (req,res) => {
    console.log(req.params)
    const _id = req.params.id

    User.findById(_id).then((user) => {
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }).catch((e) =>{
        res.status(500).send()
    })
})

// Create api for create new task
app.post('/tasks', (req,res) => {
    const task = new Task(req.body)
    task.save().then((result) => {
        res.status(201).send(task)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

app.listen(port, () => {
    console.log('Sever is up on port:' + port )
})