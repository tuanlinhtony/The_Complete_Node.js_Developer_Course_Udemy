const express = require('express')
const mongoose = require('./db/mongoose')

const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

// Add new user
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

// Show all users
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

// Find a user with ID
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

// Update a user with id
app.patch("/users/:id", async (req,res) =>{
    const id = req.params.id

    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'age', 'password']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send({error : 'Invalid updates!'})
    }

    try {
        const user = await User.findByIdAndUpdate(id, req.body, { new: true, runValidator: true})
        if(!user){
            return res.status(404).send(),
            console.log("Can't find any user with this id")
        }
        res.send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})

// Create a new task
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

// Show all tasks
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

// Find a task by id
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
    // })4
})

// Update a task by id
app.patch("/tasks/:id", async (req,res) => {
    const id = req.params.id
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send({error : 'Invalid updates!'})
    }

    try {
        const task = await Task.findByIdAndUpdate(id, req.body, { new: true , runValidator: true})
        if(!task){
            return res.status(404).send(),
            console.log("Can't find any task with this id")
        }
        res.status(200).send(task)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.listen(port, () => {
    console.log('Sever is up on port:' + port )
})