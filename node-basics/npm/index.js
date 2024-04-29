const temp = require("./weatherAPI");

const getData = async () => {
  const myData = await temp.getTemperature(
    "https://api.open-meteo.com/v1/forecast?latitude=27.70&longitude=85.32&hourly=temperature_2m&daily=sunrise,sunset&forecast_days=1&timezone=auto"
  );
  console.log(myData);
};

getData();
