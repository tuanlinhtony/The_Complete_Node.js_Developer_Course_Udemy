const request = require('request')



const forecast = (long, lat, callback ) => {
    const geocodeURL = 'http://api.weatherstack.com/forecast?access_key=406a996f605dd6980a559610525a1a75&query='+ lat + "," + long + '&units=m'
    console.log(geocodeURL)
    request({url: geocodeURL, json: true},(error, response) => {
        if(error){
            callback("Unable to connect to mapbox service!", undefined)
        }else if(response.body.error){
            callback("Unable to find this location. Try another location!", undefined)
        }else{
            callback(undefined, {
                placename : response.body.location.name,
                forecast : response.body.forecast
            })
        }
    })
}
module.exports = forecast

