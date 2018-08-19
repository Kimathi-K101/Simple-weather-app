const request = require('request');

var getWeather = (latitude, longitude, callback ) => {
  request({
    url: 'https://api.darksky.net/forecast/8c434f965f4c46dd78107e699025f299/'+
          `${latitude},${longitude}`,
    json: true
  }, (error, response, body) => {
    if( !error&&response.statusCode===200 ){
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to connect to Forcast.io server');
    }
  });
};

module.exports.getWeather = getWeather;
