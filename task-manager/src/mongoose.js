const mongoose = require('mongoose')
const  validator = require('validator')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

// // Create a model for tasks
// const Task = mongoose.model('Tasks', {
//     description: {
//         type: String
//     },
//     completed:{
//         type: Boolean
//     }
// })

// const task = new Task({
//     description: 'Clean my house',
//     completed: false
// })

// task.save().then((result) => {
//     console.log(result)
// }).catch((error) =>{
//     console.log(error)
// })

// Insert document with Mongoose
const User = mongoose.model('User', {
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        validate(email){
            if(!validator.isEmail(email)){
               throw new Error('Email is invalid') 
            }
        },
        lowercase: true,
        trim: true
    },
    age : {
        type : Number,
        default: 0,
        validate(value) {
            if(value <= 0){
                throw new Error('Ag must be a postive number')
            }
        }
    },
    password : {
        type : String,
        require: true,
        validate(password){
            if(!validator.isLength(password, {min:6})){
                throw new Error('Password must be long than 6 characters')
            }
            
        },
        trim: true,
    }
 })

const me = new User({
    name: 'Tony',
    email: '     TONYHIGH@gmail.com     ',
    password: 123456,
    age: 20
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error!', error)
})