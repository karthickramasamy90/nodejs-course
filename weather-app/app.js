
const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=dedf39735419438682a8496533285d81&query=bangalore&units=f';

request({
    url: url,
    json: true
}, (error, response) => {
    const data = response.body;

    // console.log("data", data.current);
    const { temperature, feelslike, weather_descriptions } = data.current || {};
    console.log(`${weather_descriptions[0]}. Its currently ${temperature} degrees out, but it is feels like ${feelslike} degrees out`)
})

// Its currently  out, but it is feels out.