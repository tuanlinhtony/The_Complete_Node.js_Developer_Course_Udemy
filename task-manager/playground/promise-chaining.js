const mongoose = require('../src/db/mongoose')
const User = require('../src/models/user')

// // update data of id : 61c464f9f6f14d83bd526820
// User.findByIdAndUpdate('61c464f9f6f14d83bd526820', {age : 16}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 16})
// }).then ((result) => {
//     console.log(result)
// }).catch((e) =>{
//     console.log(e)
// })

// use async/await to update data 
const updateAgeCount = async (id , age)=> {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeCount('61c464f9f6f14d83bd526820', 33).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})