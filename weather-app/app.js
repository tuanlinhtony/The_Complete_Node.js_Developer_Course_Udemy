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
// const url = 'http://api.weatherstack.com/current?access_key=2c36b2e7e1d2846c6958befb90181c83&query=&units=f'
// request({ url: url }, (error, response) => {
//     const data = JSON.parse(response.body)
//     if(error){
//         console.log("Unable to connect to weather service!")
//     }
//     else if(data.error)
//     {
//         console.log("Unable to find location ")
//     }
//     else{
//         console.log(data.daily.data[0] + " .It is currently " + data.current.temperature 
//         + " degress out. There is a " + data.current.precip + "% chance of rain") 
//     }
       
// })

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidHVhbmxpbmh0b255IiwiYSI6ImNrd2tsNWtzYzF0NXAzMXFieG1lamUya24ifQ.qUIQEWeJj3b3-QZBZjXjdQ'
// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/testError.json?access_token=pk.eyJ1IjoidHVhbmxpbmh0b255IiwiYSI6ImNrd2tsNWtzYzF0NXAzMXFieG1lamUya24ifQ.qUIQEWeJj3b3-QZBZjXjdQ'
request({url:geocodeURL , json : true}, (error, response) => {
    if(error){
        console.log("Unable to connect to mapbox service!")
    }
    else if(response.body.features.length === 0){
        console.log("Unable to find this location!")
    }
    else{
        const lat = response.body.features[0].center[1]
        const long = response.body.features[0].center[0]
        const latlong = lat + "," + long
        console.log(latlong)  
    }

    
})



