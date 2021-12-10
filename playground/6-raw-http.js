const https = require('https')
const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/hanoi.json?access_token=pk.eyJ1IjoidHVhbmxpbmh0b255IiwiYSI6ImNrd2tsNWtzYzF0NXAzMXFieG1lamUya24ifQ.qUIQEWeJj3b3-QZBZjXjdQ'

const request = https.request(url, (response) =>{
    let data = ''
    response.on('data', (chunk) => {
        data = data + chunk.toString()
        
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
    

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()