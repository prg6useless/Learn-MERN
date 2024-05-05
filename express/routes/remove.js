const express = require("express");
const remove = express();
// const users = express.Router();

const users = require("./data");

remove.delete("/:id", (request, response) => {
  // client sends data to servers
  const { id } = request.params;
  const matchId = users.findIndex((item) => item.id === Number(id));
  if (matchId === -1) return response.json({ error: "User not Found" });
  const newUsers = users.filter((item) => item.id != Number(id));
  console.log({
    query: request.query, // query starts with ? in the url
    params: request.params, //":id" -> params
    body: newUsers, // data comes from middleware
  });
  response.json({ msg: "user removed", newUsers });
});

module.exports = remove;
