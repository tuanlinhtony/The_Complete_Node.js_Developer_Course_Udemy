const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')
const {userOneId , userOne, setupDatabase} = require('./fixtures/db')


beforeEach(setupDatabase)

//Test register a new user
test('Should signup a new user', async () => {
    const response = await request(app).post('/users').send({
        name: "Alena",
        email :  "tonyvnpsp12@gmail.com",
        age : "33",
        password: "test123456"
    }).expect(201)

    //Assert that ther database was changed correctly
    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull()

    //Assertions about the response
    expect(response.body).toMatchObject({
        user: {
            name: "Alena",
            email: "tonyvnpsp12@gmail.com"
        },
        token: user.tokens[0].token
    })
    expect(user.password).not.toBe('test123456')
})

//Test login
test('Should login existing user', async () => {
    const response = await ( request(app).post('/users/login')).send({
        email :  userOne.email,
        password: userOne.password
    }).expect(200)

    const user = await User.findById(userOneId)
    expect(response.body.token).toBe(user.tokens[1].token)
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
    const response = await request(app)
    .delete('/users/me')
    .set('Authorization', 'Bearer ' + userOne.tokens[0].token)
    .send()
    .expect(200)

    //Assert that ther database was changed correctly
    const user = await User.findById(userOneId)
    expect(user).toBeNull()
})

//Test not allow to delete account if wrong authencation
test('Should delete account for user', async () =>{
    await request(app)
    .delete('/users/me')
    .send()
    .expect(401)
})

//Test upload file
test('Should upload avatar image', async () => {
    await request(app)
    .post('/users/me/avatar')
    .set('Authorization', 'Bearer ' + userOne.tokens[0].token)
    .attach('avatar','tests/fixtures/profile-pic.jpg')
    .expect(200)

    const user = await User.findById(userOneId)
    expect(user.avatar).toEqual(expect.any(Buffer))
})

//Test update valid the name of the test user
test('Should update valid user fields', async () => {
    await request(app)
    .patch('/users/me')
    .set('Authorization', 'Bearer ' + userOne.tokens[0].token)
    .send({
        name: 'Jace'
    })
    .expect(200)

    const user = await User.findById(userOneId)
    expect(user.name).toEqual('Jace')
})

//Test update unvalid the name of the test user
test('Should update valid user fields', async () => {
    await request(app)
    .patch('/users/me')
    .set('Authorization', 'Bearer ' + userOne.tokens[0].token)
    .send({
        location: 'Ha Noi'
    })
    .expect(400)
})