// // Asynchronous Basics
// console.log('Starting')

// setTimeout(() => {
//     console.log('Two Second Timer')
// }, 2000)

// setTimeout(() => {
//     console.log('Zero Second Timer')
// }, 0)
// console.log('Stopping')

const request = require('request')
const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidHVhbmxpbmh0b255IiwiYSI6ImNrd2tsNWtzYzF0NXAzMXFieG1lamUya24ifQ.qUIQEWeJj3b3-QZBZjXjdQ'

request({url:geocodeURL , json : true}, (error, response) => {
    const lat = response.body.features[0].center[1]
    const long = response.body.features[0].center[0]
    const latlong = lat + "," + long
    console.log(latlong)  
})



