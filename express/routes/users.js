const express = require("express");
const user = express();
// const users = express.Router();

const users = [
  {
    name: "Saral",
    password: "saral123",
    id: 1,
    isActive: false,
    role: "client",
  },
  { name: "Ram", password: "ram123", id: 2, isActive: false, role: "client" },
  {
    name: "Hari",
    password: "hari123",
    id: 3,
    isActive: false,
    role: "client",
  },
];

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
