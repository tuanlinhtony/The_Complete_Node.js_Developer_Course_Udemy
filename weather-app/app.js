// const request = require('request')
const geocode = require('./utils.js/geocode.js')
const forecast = require('./utils.js/forecast.js')

const address = process.argv[2]


if(!address){
    console.log("Kindly provide an address!!!")
}else{
    geocode(address, (error, {long, lat, location}) => {
        if(error){
            return console.log(error)
        }
        forecast(long, lat, (error, forecastData) => {
            if(error){
                return console.log(error)
            }
            console.log("Location: " + location)
            const obj = JSON.parse(JSON.stringify(forecastData.forecast)) // ok, hold it down here, and will reseach for understand more later!
            for(let i in obj){
                console.log("Date: " + obj[i].date)
                console.log("Forecast Tempature: " + obj[i].avgtemp + "°C")
            }
        })    
    })
}



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
// Got it! I already solved it but still don't understand so deep. 
// Haizz.. I need some one who can explain to me  more about this issue
// https://stackoverflow.com/questions/38380462/syntaxerror-unexpected-token-o-in-json-at-position-1?rq=1
// https://niithanoi.edu.vn/xu-ly-json-trong-javascript.html