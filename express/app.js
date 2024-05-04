const express = require("express");
require("dotenv").config();
const route = require("./routes/route");

const app = express();
const port = Number(process.env.PORT);

// allows tha parsing of request body as json
app.use(express.json());
app.use("/", route);

app.listen(port, () => {
  console.log(`Appilcation is running at port ${port}`);
});

// research about default destructure; destructuring assignment

// collapse all functions ctrl + k + 0
// uncollapse all functions ctrl + k ctrl + j
