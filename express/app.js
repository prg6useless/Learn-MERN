const express = require("express");
require("dotenv").config();
const route = require("./routes/index");

const app = express();
const port = Number(process.env.PORT);

// allows tha parsing of request body as json
app.use(express.json());

// this is our application level; custom middleware

app.use((req, res, next) => {
  req.body.country = "Nepal";
  req.body.currency = "NPR";
  next();
});

app.use("/", route);

// comes here from next() during error
// Error Handling
app.use((err, req, res, next) => {
  const errorMsg = err ? err.toString() : "Something went wrong";
  res.status(500).json({ msg: errorMsg });
});

app.listen(port, () => {
  console.log(`Appilcation is running at port ${port}`);
});

// research about default destructure; destructuring assignment

// collapse all functions ctrl + k + 0
// uncollapse all functions ctrl + k ctrl + j
