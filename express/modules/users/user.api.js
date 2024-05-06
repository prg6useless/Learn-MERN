const router = require("express").Router();
const users = require("./data");

//register user
router.post("/register", (request, response, next) => {
  try {
    const { username, email, password } = request.body;
    console.log({ username, email, password });
    // exception handling
    // if (email !== "saral@gmail.com" || password !== "sara123") {
    //   throw new Error("Invalid credentials");
    // }
    response.json({ msg: "register successful" });
  } catch (error) {
    next(error); // sends control flow/ error to app.js
  }
});

//login user
router.post("/login", (request, response, next) => {
  try {
    const { email, password } = request.body;
    console.log({ email, password });
    // exception handling
    if (email !== "saral@gmail.com" || password !== "sara123") {
      throw new Error("Invalid credentials");
    }
    response.json({ msg: "login" });
  } catch (error) {
    next(error); // sends control flow or the error to app.js
  }
});

// change user details
router.put("/:id", (request, response) => {
  // client sends data to servers
  const { id } = request.params;
  const { name, password } = request.body;
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

//change password
router.patch("/:id/change-password", (request, response) => {
  // client sends data to servers
  const { id } = request.params;
  const { password } = request.body;
  const matchId = users.findIndex((item) => item.id === Number(id));
  if (matchId === -1) return response.json({ error: "User not Found" });
  users[matchId] = { ...users[matchId], password };
  console.log({
    query: request.query, // query starts with ? in the url
    params: request.params, //":id" -> params
    body: request.body, // data comes from middleware
  });
  response.json({ msg: "password changed", users });
});

//change user role
router.patch("/:id/role", (request, response) => {
  // client sends data to servers
  const { id } = request.params;
  const { role } = request.body;
  const matchId = users.findIndex((item) => item.id === Number(id));
  if (matchId === -1) return response.json({ error: "User not Found" });
  users[matchId].role = role;
  console.log({
    query: request.query, // query starts with ? in the url
    params: request.params, //":id" -> params
    body: users[matchId], // data comes from middleware
  });
  response.json({ msg: " updated role", users });
});

//change user status
router.patch("/:id/status", (request, response) => {
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
  response.json({ msg: " updated status", users });
});

// delete user
router.delete("/:id/delete", (request, response) => {
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

module.exports = router;
