const mongoose = require('mongoose')
const  validator = require('validator')
const bcrypt = require('bcryptjs')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 4,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
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
                throw new Error('Age must be a postive number')
            }
        }
    },
    //make password field with require string, greater 6 characters, trim space, not contain "password"
    password : {
        type : String,
        required: true,
        minlength: 7,
        validate(password){
            if(password.toLowerCase().includes('password')){
                throw new Error('Password cannot contain "password"')
            }
        },
        trim: true,
    }
})
userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({email})

    if(!user){
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch){
        throw new Error('Unable to login')
    }

    return user


}
// Hash the plain text pass before saving
userSchema.pre('save', async function(next){
    const user = this

    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()


})


// Insert document with Mongoose
const User = mongoose.model('User', userSchema)

module.exports = User