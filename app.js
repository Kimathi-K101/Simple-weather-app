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

var encdodedAddress = encodeURIComponent(argv.a);
console.log(argv);
console.log(`Encoded Address: ${encdodedAddress}`);


var requestOptions = {
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encdodedAddress}`,
  json: true
};

request( requestOptions, (error, response, body) => {
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
  console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});
