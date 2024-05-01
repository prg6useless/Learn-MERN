const express = require("express");
require("dotenv").config();

const app = express();
const port = Number(process.env.PORT);

app.get("/", (request, response) => {
  response.json({ message: "Hello World" });
});

app.listen(port, () => {
  console.log(`Appilcation is running at port ${port}`);
});

// research about default destructure; destructuring assignment
