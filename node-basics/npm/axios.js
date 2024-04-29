const axios = require("axios");

const getTemperature = async (url) => {
  //   await axios.get(url).then(function (response) {
  //     // handle success
  //     const data = response.data.hourly.time;
  //     const index = data.indexOf("2024-04-29T16:00");
  //     const temp = response.data.hourly.temperature_2m[index];
  //     console.log(temp);
  //   });
  //   const { data } = await axios.get(url);
  //   const index = data.hourly.time.indexOf("2024-04-29T16:00");
  //   console.log(data.hourly.temperature_2m[index]);
  const {
    data: { hourly },
  } = await axios.get(url);
  const { time, temperature_2m } = hourly;
  const now = new Date().toISOString().split(":")[0].split("T");
  now[1] = Number(now[1]) + 6;
  const currentTime = now.join("T").concat(":00");
  const index = time.indexOf(currentTime);
  return temperature_2m[index];
};

const myTemparature = await getTemperature(
  "https://api.open-meteo.com/v1/forecast?latitude=27.70&longitude=85.32&hourly=temperature_2m&daily=sunrise,sunset&forecast_days=1&timezone=auto"
);

console.log(myTemparature);

// use package moment to get the current timeas required(2024-04-29T11:00)
// get data sunrise and sunset
// convert this into module

// REST API Methods

// get => get data from server to client
// post => create new data
// put => update multiple data
// patch => update single field of data
// delete => delete data
