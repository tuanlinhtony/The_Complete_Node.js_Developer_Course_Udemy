const express = require('express')
const mongoose = require('./db/mongoose')

const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
// Create api for add new user
app.post('/users', async (req,res) => {
    const user = new User(req.body)

    try{
        await user.save()
        res.status(201).send(user)
        console.log(user.name + ' was created succesful!')
    }catch(e){
        res.status(400).send(e.message)
        console.log(e.message)
    }

    // user.save().then((user) => {
    //     res.send(user)
    // }).catch((error) => {
    //     res.status(400).send(error)
    // })
})

// Create api for find all users
app.get('/users', async (req,res) => {
    //refactor with async/await
    try{
        const users = await User.find({})
        res.status(201).send(users)
        console.log('Find all results')
    }catch(e){
        res.status(500).send(e.message)
    }

    // User.find({}).then((users) => {
    //     res.send(users)
    // }).catch((error) => {
    //     res.status(500).send()
    // })
})

// Create api for find user with ID
app.get('/users/:id', async (req,res) => {
    console.log(req.params)
    const _id = req.params.id
    //refactor with async/await
    try{
        const user = await User.findById(_id)
        if(!user){
            return res.status(404).send()
        }
        res.status(201).send(user)
        console.log('Found a result')
    }catch(e){
        res.status(500).send(e.message)
    }

    // User.findById(_id).then((user) => {
    //     if(!user){
    //         return res.status(404).send()
    //     }
    //     res.send(user)
    // }).catch((e) =>{
    //     res.status(500).send()
    // })
})

// Create api for create new task
app.post('/tasks', async (req,res) => {
    const task = new Task(req.body)

    //refactor with async/await
    try{
        await task.save()
        res.status(201).send(task)
    }catch(e){
        res.status(500).send(e)
    }
    // task.save().then((result) => {
    //     res.status(201).send(task)
    // }).catch((error) => {
    //     res.status(400).send(error)
    // })
})

// Create api for find all tasks
app.get("/tasks", async (req,res) => {
    //refactor with async/await
    try {
        const tasks = await Task.find({})
        res.status(200).send(tasks)
    } catch (e) {
        res.status(500).send(e)
    }
    // Task.find({}).then((tasks) =>{
    //     res.send(tasks)
    // }).catch((e) => {
    //     res.send(e)
    // })
})

// Create api for find a task by id
app.get("/tasks/:id", async (req,res) => {
    const _id = req.params.id

    //refactor with async/await
    try{
        const task = await Task.findById(_id)
        if(!task){
            return res.status(404).send()
        }
        res.status(201).send(task)
        console.log('Found a result')
    }catch(e){
        res.status(500).send(e.message)
    }

    // Task.findById(_id).then((task) =>{
    //     if(!task){
    //         return res.status(404).send()
    //     }
    //     res.send(task)
    // }).catch((e) => {
    //     res.status(500).send(e)
    // })
})

app.listen(port, () => {
    console.log('Sever is up on port:' + port )
})