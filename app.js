const request = require('request');

var requestOptions = {
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=AIzaSyD-V0ZcFwo9Vrx-n4xSRP2tONm27dkzmxI',
  json: true
};

request( requestOptions, (error, response, body) => {
  console.log(body);
});
