const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6c7b98d2aeda984e3a3edebaa2f3c153&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const {location:{name},current:{weather_descriptions,temperature,humidity}} = body
            callback(undefined,weather_descriptions.join(), '. It is currently ' + temperature + ' degress out. Humidity is ' + humidity)
        }
    })
}

module.exports = forecast