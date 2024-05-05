const express = require("express");
const user = express();
// const users = express.Router();

const users = require("./data");

user.post("/", (request, response) => {
  // client sends data to servers
  const { name, password } = request.query;
  const addedUser = {
    name,
    password,
    id: users.length + 1,
    isActive: true,
    role: "client",
  };

  const newUser = [...users, addedUser];
  console.log({
    query: request.query, // query starts with ? in the url
    params: request.params, //":id" -> params
    body: newUser, // data comes from middleware
  });
  response.json(addedUser);
});

module.exports = user;
