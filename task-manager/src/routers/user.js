const express = require('express')
const router = new express.Router()
const User = require('../models/user')

// Add new user
router.post('/users', async (req,res) => {
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
router.get('/users', async (req,res) => {
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
router.get('/users/:id', async (req,res) => {
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
router.patch("/users/:id", async (req,res) =>{
    const id = req.params.id

    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'age', 'password']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send({error : 'Invalid updates!'})
    }

    try {
        const user = await User.findById(req.params.id)

        updates.forEach((update) => {user[update] = req.body[update]})
        await user.save()
        // const user = await User.findByIdAndUpdate(id, req.body, { new: true, runValidator: true})
        if(!user){
            return res.status(404).send(),
            console.log("Can't find any user with this id")
        }
        res.send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})

// Delete a user with id
router.delete('/users/:id', async (req,res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user){
            return res.status(404).send('Not found this user')
        }
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})

// Login in Users
router.post('/users/login' , async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        res.send(user)
    } catch (error) {
        res.status(400).send()
    }
})
module.exports = router