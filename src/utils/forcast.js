const request = require('request')
require('dotenv').config()

const forcast = (address, callBack) => {
    const url = `http://api.weatherstack.com/current?access_key=${process.env.access_key}&query=${address}`

    request({ url, json: true }, (error, { body: data } = {}) => {
        if (error) {
            callBack('Unable to connect to weather service!', undefined)
        } else if (data.error) {
            callBack('Unable to find location. Try a different location!', undefined)
        } else {
            callBack(undefined, {
                location: data.request.query,
                ...data.current
            })
        }
    })
}

module.exports = forcast