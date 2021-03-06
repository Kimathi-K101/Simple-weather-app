const request = require('request');

var geocode_Request = (address, callback) =>
{
  var requestOptions = {
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
    json: true
  };
  //console.log(`Endpoint URL: ${requestOptions.url}`);
  request( requestOptions, (error, response, body) => {
    if(error){
      callback('Unable to connect Google Service.');
    } else if (body.status === 'ZERO_RESULTS'){
      callback('Unable to find that address');
    } else if (body.status == 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }
  });
};

module.exports = {
  geocode_Request
};
