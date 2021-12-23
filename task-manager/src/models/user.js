const mongoose = require('mongoose')
const  validator = require('validator')

// Insert document with Mongoose
const User = mongoose.model('User', {
    name: {
        type: String,
        minlength: 4,
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
    //make password field with require string, greater 6 characters, trim space, not contain "password"
    password : {
        type : String,
        require: true,
        minlength: 7,
        validate(password){
            if(password.toLowerCase().includes('password')){
                throw new Error('Password cannot contain "password"')
            }
        },
        trim: true,
    }
 })

module.exports = User