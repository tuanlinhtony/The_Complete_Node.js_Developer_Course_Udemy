const request = require('request')
// const geocode = require('./utils.js/geocode.js')
const forecast = require('./utils.js/forecast.js')


forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

// node app.js => 
// http://api.weatherstack.com/forecast?access_key=406a996f605dd6980a559610525a1a75&query=44.1545,-75.7088&units=f
// Error undefined
// Data {
//   placename: 'Philadelphia',
//   forecast: {
//     '2021-11-30': {
//       date: '2021-11-30',
//       date_epoch: 1638230400,
//       astro: [Object],
//       mintemp: 19,
//       maxtemp: 34,
//       avgtemp: 27,
//       totalsnow: 2.72,
//       sunhour: 6.8,
//       uv_index: 1
//     }
//   }
// }

// I am researching a solution that get value of date, mintemp, maxtemp, avgtemp... How???