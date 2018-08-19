const yargs = require('yargs');
const axios = require('axios');

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

if(!argv.a){
  argv.a = '1301 Lombard St, Philadelphia, PA 19147, USA';
}

var encodedAddress = encodeURIComponent(argv.a);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
  if(response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find that address.');
  }

  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  var weatherUrl = 'https://api.darksky.net/forecast/8c434f965f4c46dd78107e699025f299/'+
                    `${lat},${lng}`;
  console.log(response.data.results[0].formatted_address);
  return axios.get(weatherUrl);
}).then((response) => {
  var temperature = response.data.currently.temperature;
  var apparentTemperature = response.data.currently.apparentTemperature;

  console.log(`Summary:`, response.data.currently.summary);
  console.log(`Although it is ${temperature}, it feels like ${apparentTemperature}.`);
  console.log(`Additionally, there is a ${response.data.currently.precipProbability}% of precipitation.`);
  console.log(`If you plan on spending time outside, the UV index is ${response.data.currently.uvIndex}.`);

}).catch((error) => {
  if(error.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers.')
  } else {
    console.log(error.message);
  }
});
