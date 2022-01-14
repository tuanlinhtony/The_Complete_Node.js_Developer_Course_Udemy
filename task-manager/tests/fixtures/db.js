const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('../../src/models/user')

const userOneId = new mongoose.Types.ObjectId() 
const userOne = {
    _id: userOneId,
    name: 'Mike',
    email :  "tuanlinh3667@gmail.com",
    age : "33",
    password: "test123456",
    tokens :[{
        token: jwt.sign({_id:userOneId}, process.env.JWT_SECRET)
    }]
}

const setupDatabase = async () => {
    await User.deleteMany()
    await new User(userOne).save()
}

module.exports = {
    userOneId,
    userOne,
    setupDatabase
}

