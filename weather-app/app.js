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

const url = 'http://api.weatherstack.com/current?access_key=2c36b2e7e1d2846c6958befb90181c83&query=38.7267,-122.423&units=f'
request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current.weather_descriptions + " .It is currently " + data.current.temperature 
    + " degress out. There is a " + data.current.precip + "% chance of rain")    
})