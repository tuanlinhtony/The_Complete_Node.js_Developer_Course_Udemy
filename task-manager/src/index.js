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

// Create api for find all tasks
app.get("/tasks", (req,res) => {
    Task.find({}).then((tasks) =>{
        res.send(tasks)
    }).catch((e) => {
        res.send(e)
    })
})

// Create api for find a task by id
app.get("/tasks/:id", (req,res) => {
    const _id = req.params.id
    Task.findById(_id).then((task) =>{
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

app.listen(port, () => {
    console.log('Sever is up on port:' + port )
})