const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

// // Create a model for tasks with validation
// const Task = mongoose.model('Tasks', {
//     description: {
//         type: String,
//         require: true,
//         trim: true,
//         minlength: 1    
//     },
//     completed:{
//         type: Boolean,
//         default: false
//     }
// })

// const task = new Task({
//     description: '  test  '
// })

// task.save().then((result) => {
//     console.log(result)
// }).catch((error) =>{
//     console.log(error)
// })

// // Insert document with Mongoose
// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         require: true
//     },
//     email: {
//         type: String,
//         require: true,
//         validate(email){
//             if(!validator.isEmail(email)){
//                throw new Error('Email is invalid') 
//             }
//         },
//         lowercase: true,
//         trim: true
//     },
//     age : {
//         type : Number,
//         default: 0,
//         validate(value) {
//             if(value <= 0){
//                 throw new Error('Ag must be a postive number')
//             }
//         }
//     },
//     //make password field with require string, greater 6 characters, trim space, not contain "password"
//     password : {
//         type : String,
//         require: true,
//         minlength: 7,
//         validate(password){
//             if(password.toLowerCase().includes('password')){
//                 throw new Error('Password cannot contain "password"')
//             }
//         },
//         trim: true,
//     }
//  })

// const me = new User({
//     name: 'Tony',
//     email: '     TONYHIGH@gmail.com     ',
//     password: '1234567',
//     age: 20
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })