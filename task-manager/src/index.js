const express = require('express')
const mongoose = require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Sever is up on port:' + port )
})



// const myFunction = async () => {
//     const password = 'Red123456'
//     const hashedPassword = await bcrypt.hash(password, 8)        
    
//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcrypt.compare('red123456', hashedPassword)
//     console.log(isMatch)
// }

// myFunction()

