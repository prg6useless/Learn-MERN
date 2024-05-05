const express = require("express");
const password = express();
// const users = express.Router();

const users = require("./data");

password.patch("/:id", (request, response) => {
  // client sends data to servers
  const { id } = request.params;
  const { password } = request.query;
  const matchId = users.findIndex((item) => item.id === Number(id));
  if (matchId === -1) return response.json({ error: "User not Found" });
  users[matchId] = { ...users[matchId], password };
  console.log({
    query: request.query, // query starts with ? in the url
    params: request.params, //":id" -> params
    body: request.body, // data comes from middleware
  });
  response.json(users);
});

module.exports = password;
