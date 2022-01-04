const express = require('express')
const mongoose = require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

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

const Task = require('./models/task')
const User = require('./models/user')

const main = async ()=>{
    // const task = await Task.findById('61d16b64485decb3d4d0e623')
    // await task.populate('owner')
    // console.log(task.owner)

    const user = await User.findById('61d16998966c8e0547d98115')
    // console.log(typeof(user))
    await user.populate('tasks')
    // console.log(user.tasks)
}

main()
// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({_id : 'abc123'}, 'thisisjsonwebtoken', {expiresIn: '5 seconds' })
//     console.log(token)

//     const data = jwt.verify(token, 'thisisjsonwebtoken')
//     console.log(data)
// }

// myFunction()


// const myFunction = async () => {
//     const password = 'Red123456'
//     const hashedPassword = await bcrypt.hash(password, 8)        
    
//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcrypt.compare('red123456', hashedPassword)
//     console.log(isMatch)
// }

// myFunction()

