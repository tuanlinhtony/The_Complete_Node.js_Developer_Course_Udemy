const mongoose = require('../src/db/mongoose')
const User = require('../src/models/user')

// update data of id : 61c464f9f6f14d83bd526820
User.findByIdAndUpdate('61c464f9f6f14d83bd526820', {age : 16}).then((user) => {
    console.log(user)
    return User.countDocuments({age: 16})
}).then ((result) => {
    console.log(result)
}).catch((e) =>{
    console.log(e)
})