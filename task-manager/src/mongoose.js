const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

// Create a model for tasks
const Task = mongoose.model('Tasks', {
    description: {
        type: String
    },
    completed:{
        type: Boolean
    }
})

const task = new Task({
    description: 'Clean my house',
    completed: false
})

task.save().then((result) => {
    console.log(result)
}).catch((error) =>{
    console.log(error)
})

// // Insert document with Mongoose
// const User = mongoose.model('User', {
//     name: {
//         type: String,
//     },
//     age : {
//         type : Number
//     }
//  })

// const me = new User({
//     name: 'Tony',
//     age: 31
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })