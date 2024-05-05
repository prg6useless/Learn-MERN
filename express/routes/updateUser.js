const express = require("express");
const user = express();
// const users = express.Router();

const users = require("./data");

user.put("/:id", (request, response) => {
  // client sends data to servers
  const { id } = request.params;
  const { name, password } = request.query;
  const matchId = users.findIndex((item) => item.id === Number(id));
  if (matchId === -1) return response.json({ error: "User not Found" });
  users[matchId] = { ...users[matchId], name, password };
  console.log({
    query: request.query, // query starts with ? in the url
    params: request.params, //":id" -> params
    body: request.body, // data comes from middleware
  });
  response.json(users);
});

module.exports = user;
