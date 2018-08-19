// const geocode = require('./geocode/geocode.js');
// const yargs = require('yargs');
//
// const argv = yargs
//   .options({
//     a:{
//       demand: true,
//       alias: 'address',
//       describe: 'Address to fetch weather for',
//       string: true
//     }
//   })
//   .help()
//   .alias('help','h')
//   .argv;
//
// geocode.geocode_Request(argv.a, (errorMessage, results) => {
//   if(errorMessage){
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });

//8c434f965f4c46dd78107e699025f299
const request = require('request');

request({
  url: 'https://api.darksky.net/forecast/8c434f965f4c46dd78107e699025f299/37.8267,-122.4233',
  json: true
}, (error, response, body) => {
  if( !error&&response.statusCode===200 ){
    console.log( `Temperature: ${body.currently.temperature}` );
  } else {
    console.log ('Unable to connect to the API');
  }
});
