const express = require("express");
const remove = express();
// const users = express.Router();

const users = [
  {
    name: "Saral",
    password: "saral123",
    id: 1,
    isActive: false,
    role: "client",
  },
  {
    name: "Ram",
    password: "ram123",
    id: 2,
    isActive: false,
    role: "client",
  },
  {
    name: "Hari",
    password: "hari123",
    id: 3,
    isActive: false,
    role: "client",
  },
  {
    name: "goivinda",
    password: "gov123",
    id: 4,
    isActive: true,
    role: "client",
  },
];

remove.delete("/:id", (request, response) => {
  // client sends data to servers
  const { id } = request.params;
  const { role } = request.query;
  const matchId = users.findIndex((item) => item.id === Number(id));
  if (matchId === -1) return response.json({ error: "User not Found" });
  const newUsers = users.filter((item) => item.id != Number(id));
  console.log({
    query: request.query, // query starts with ? in the url
    params: request.params, //":id" -> params
    body: newUsers, // data comes from middleware
  });
  response.json(newUsers);
});

module.exports = remove;
