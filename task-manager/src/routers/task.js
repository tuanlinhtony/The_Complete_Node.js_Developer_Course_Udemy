const express = require('express')
const router = new express.Router()
const Task = require('../models/task')

// Create a new task
router.post('/tasks', async (req,res) => {
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
router.get("/tasks", async (req,res) => {
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
router.get("/tasks/:id", async (req,res) => {
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
router.patch("/tasks/:id", async (req,res) => {
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

// Delete a task by id
router.delete('/tasks/:id', async (req,res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if(!task){
            return res.status(404).send('Not found this task'),
            console.log('Not found this task')
        }
        res.status(200).send(task)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router