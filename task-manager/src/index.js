const express = require('express')
const mongoose = require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const auth = require('./middleware/auth')
const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon')
// })


app.use(express.json())

app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Sever is up on port:' + port )
})

const jwt = require('jsonwebtoken')

const myFunction = async () => {
    const token = jwt.sign({_id : 'abc123'}, 'thisisjsonwebtoken', {expiresIn: '5 seconds' })
    console.log(token)

    const data = jwt.verify(token, 'thisisjsonwebtoken')
    console.log(data)
}

myFunction()


// const myFunction = async () => {
//     const password = 'Red123456'
//     const hashedPassword = await bcrypt.hash(password, 8)        
    
//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcrypt.compare('red123456', hashedPassword)
//     console.log(isMatch)
// }

// myFunction()

