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

const url = 'http://api.weatherstack.com/current?access_key=2c36b2e7e1d2846c6958befb90181c83&query=37.8267,-122.423'
request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data)
})