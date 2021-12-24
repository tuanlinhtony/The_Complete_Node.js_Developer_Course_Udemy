const mongoose = require('../src/db/mongoose')
const Task = require('../src/models/task')

// 61c456a382eec200d3fbe1af
Task.findByIdAndRemove('61c456a382eec200d3fbe1af').then((task) => {
    console.log(task)
    return Task.countDocuments({completed: false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})