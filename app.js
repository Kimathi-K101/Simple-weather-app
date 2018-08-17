const request = require('request');
const yargs = require('yargs');

const argv = yargs
  .options({
    a:{
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help','h')
  .argv;

var encodedAddress = encodeURIComponent(argv.a);
console.log(argv);
console.log(`Encoded Address: ${encodedAddress}`);


var requestOptions = {
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
  json: true
};

console.log(`Endpoint URL: ${requestOptions.url}`);

request( requestOptions, (error, response, body) => {
  //Checks if the error object exists
  //This won't tell us that there was a error with the address
  if(error){
    console.log('Unable to connect Google Service.');
  } else if (body.status === 'ZERO_RESULTS'){
    console.log('Unable to find that address');
  } else if (body.status == 'OK') {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
  }
});
