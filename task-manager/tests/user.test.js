const request = require('supertest')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const app = require('../src/app')
const User = require('../src/models/user')

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
beforeEach(async () => {
    await User.deleteMany()
    await new User(userOne).save()
})

//Test register a new user
test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: "Alena",
        email :  "tonyvnpsp12@gmail.com",
        age : "33",
        password: "test123456"
    }).expect(201)
})

//Test login
test('Should login existing user', async () => {
    await ( request(app).post('/users/login')).send({
        email :  userOne.email,
        password: userOne.password
    })
})

//Test failure login if wrong authencation
test('Should login nonexisting user', async () => {
    await ( request(app).post('/users/login')).send({
        email :  userOne.email,
        password: 'thisisnotpassword'
    }).expect(400)
}) 

console.log('Bearer ' + userOne.tokens[0].token)
// Test show profile of existing user
test('Should get profile for user', async () =>{
    await request(app)
    .get('/users/me')
    .set('Authorization', 'Bearer ' + userOne.tokens[0].token)
    .send()
    .expect(200)
})

//Test no show profile with wrong authencation
test('Should get profile for user', async () =>{
    await request(app)
    .get('/users/me')
    .send()
    .expect(401)
})

//Test delete account
test('Should delete account for user', async () =>{
    await request(app)
    .delete('/users/me')
    .set('Authorization', 'Bearer ' + userOne.tokens[0].token)
    .send()
    .expect(200)
})

//Test not allow to delete account if wrong authencation
test('Should delete account for user', async () =>{
    await request(app)
    .delete('/users/me')
    .send()
    .expect(401)
})