const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

const userOne={
    name: 'Mike',
    email :  "tuanlinh3667@gmail.com",
    age : "33",
    password: "test123456"
}
beforeEach(async () => {
    await User.deleteMany()
    await new User(userOne).save()
})
test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: "Alena",
        email :  "tonyvnpsp12@gmail.com",
        age : "33",
        password: "test123456"
    }).expect(201)
})

test('Should login existing user', async () => {
    await ( request(app).post('/users/login')).send({
        email :  userOne.email,
        password: userOne.password
    })
})

test('Should login nonexisting user', async () => {
    await ( request(app).post('/users/login')).send({
        email :  userOne.email,
        password: 'thisisnotpassword'
    }).expect(400)
})