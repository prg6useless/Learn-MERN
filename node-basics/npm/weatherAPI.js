const axios = require("axios");
const moment = require("moment");

// destructuring assignment = setting a default value to data parameters 
// in case an api fails to return data

const getTemperature = async (url) => {
  const { data = {} } = await axios.get(url); //destructuring assignment
  const { hourly = {}, daily = {} } = data; //destructuring assignment
  const { time = [], temperature_2m = [] } = hourly; //destructuring assignment
  const { sunrise = [], sunset = [] } = daily; //destructuring assignment
  const today = moment().format("YYYY-MM-DDTHH:00");
  const index = time.indexOf(today);
  const temperature = temperature_2m[index];
  return { temperature, sunrise, sunset };
};

module.exports = { getTemperature };

// inside getTeperature function,
// old code
//   await axios.get(url).then(function (response) {
//     // handle success
//     const data = response.data.hourly.time;
//     const index = data.indexOf("2024-04-29T16:00");
//     const temp = response.data.hourly.temperature_2m[index];
//     console.log(temp);
//   });
//   const { data } = await axios.get(url);
//   const index = data.hourly.time.indexOf("2024-04-29T16:00");
//   return data.hourly.temperature_2m[index];

// getTemperature(
//   "https://api.open-meteo.com/v1/forecast?latitude=27.70&longitude=85.32&hourly=temperature_2m&daily=sunrise,sunset&forecast_days=1&timezone=auto"
// ).then((weatherData) => {
//   const { temperature, sunset, sunrise } = weatherData;
//   console.log({ temperature, sunrise, sunset });
// });

// use package moment to get the current time as required(2024-04-29T11:00)
// get data sunrise and sunset
// convert this into module

// REST API Methods

// get => get data from server to client
// post => create new data
// put => update multiple data
// patch => update single field of data
// delete => delete data
