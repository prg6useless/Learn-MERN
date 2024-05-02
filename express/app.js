const express = require("express");
require("dotenv").config();

const app = express();
const port = Number(process.env.PORT);

app.use(express.json()); // ensures use of request.body

app.get("/photos/", (request, response) => {
  // client requests data from server
  response.json({ message: "Request : GET" });
});

// header : contenet-type = json
// method : get
// body : {message : ...}
// endpoint : "/"

app.post("/:id", (request, response) => {
  // client sends data to server
  console.log({
    query: request.query, // query starts with ? in the url
    params: request.params, //":id" -> params
    body: request.body, // data comes from middleware
  });
  response.json({ message: "Request : POST" });
});

app.put("/:id", (request, response) => {
  // client sends data to server
  console.log({
    query: request.query, // query starts with ? in the url
    params: request.params,
    body: request.body, // data comes from middleware
  });
  response.json({ message: "Request : PUT" });
});

app.patch("/", (request, response) => {
  // client sends data to server
  console.log({
    query: request.query, // query starts with ? in the url
    params: request.params,
    body: request.body, // data comes from middleware
  });
  response.json({ message: "Request : PATCH" });
});

app.delete("/", (request, response) => {
  console.log({
    query: request.query, // query starts with ? in the url
    params: request.params,
    body: request.body, // data comes from middleware
  });
  response.json({ message: "Request : DELETE" });
});

app.listen(port, () => {
  console.log(`Appilcation is running at port ${port}`);
});

// research about default destructure; destructuring assignment
