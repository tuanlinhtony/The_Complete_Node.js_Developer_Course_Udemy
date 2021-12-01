const request = require('request')

const geocode = (address, callback) => {
    const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address + '.json?access_token=pk.eyJ1IjoidHVhbmxpbmh0b255IiwiYSI6ImNrd2tsNWtzYzF0NXAzMXFieG1lamUya24ifQ.qUIQEWeJj3b3-QZBZjXjdQ'
    request({url: geocodeURL, json: true},(error, response) => {
        // if can't connect
        if(error){
            callback("Unable to connect to mapbox service!", undefined)
        }else if(response.body.features.length === 0){
            callback("Unable to find this location. Try another location!", undefined)
        }else{
            callback(undefined, {
                lat : response.body.features[0].center[1],
                long : response.body.features[0].center[0],
                location : response.body.features[0].place_name,
            })
        }
    })
}

// geocode("Hanoi",(error, data)=>{
//     console.log("Error", error)
//     console.log("Data", data)
// })

module.exports = geocode







