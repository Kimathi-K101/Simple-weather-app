const request = require('request');

var requestOptions = {
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
  json: true
};

request( requestOptions, (error, response, body) => {
  console.log(JSON.stringify(body, undefined, 2));
});
