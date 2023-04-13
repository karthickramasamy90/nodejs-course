const fs = require('fs');

const dataBuffer = fs.readFileSync('sample-1.json');

const dataJson = dataBuffer.toString();

const user = JSON.parse(dataJson);

user.name = 'karthick';
user.planet = 'mars'

const userJson = JSON.stringify(user);

fs.writeFileSync('sample-1.json', userJson);

console.log(userJson)