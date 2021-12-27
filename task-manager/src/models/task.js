const mongoose = require('mongoose')
const  validator = require('validator')

const taskSchema = new mongoose.Schema()

// Create a model for tasks with validation
const Task = mongoose.model('Tasks', {
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 1    
    },
    completed:{
        type: Boolean,
        default: false
    }
})

module.exports = Task