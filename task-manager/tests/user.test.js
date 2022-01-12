const request = require('supertest')
const app = require('../src/app')

test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: "Alena",
        email :  "tonyvnpsp12@gmail.com",
        age : "33",
        password: "test123456"
    }).expect(201)
})