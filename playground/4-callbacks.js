setTimeout(() => {
    console.log("Two seconds are up")
}, 2000)

// const names = ["tony", "ah", "Jamires"]
// const shortNames = names.filter((name) => {
//     return name.length <= 3
// })
// console.log(shortNames)

// const geocode = (address, callback) => {
//     const data = {
//         latitude: 0,
//         longitude: 0
//     }
//     return data
// }
// const data = geocode("New York")
// console.log(data)

const geocode = (address, callback) =>{
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback(data)
    }, 2000)
}

geocode("New York", (data) => {
    console.log(data)
})