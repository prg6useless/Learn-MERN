const express = require("express");
const status = express();
// const users = express.Router();

const users = require("./data");

status.patch("/:id", (request, response) => {
  // client sends data to servers
  const { id } = request.params;
  //   const { role } = request.query;
  const matchId = users.findIndex((item) => item.id === Number(id));
  if (matchId === -1) return response.json({ error: "User not Found" });
  users[matchId].isActive = !users[matchId].isActive;
  console.log({
    query: request.query, // query starts with ? in the url
    params: request.params, //":id" -> params
    body: users[matchId], // data comes from middleware
  });
  response.json(users);
});

module.exports = status;