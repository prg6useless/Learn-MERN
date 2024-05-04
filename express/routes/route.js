const express = require("express");
const router = express.Router();
const userRouter = require("./users");
const updateUserRouter = require("./updateUser");
const passwordRouter = require("./forgotPassword");
const statusRouter = require("./status");
const roleRouter = require("./role");
const deleteRouter = require("./remove");

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

router.get("/", (request, response) => {
  // client requests data from server
  console.log({
    query: request.query, // query starts with ? in the url
    params: request.params, //":id" -> params
    body: users, // data comes from middleware
  });
  response.json({ users });
});

router.use("/users", userRouter);
router.use("/update", updateUserRouter);
router.use("/password", passwordRouter);
router.use("/status", statusRouter);
router.use("/role", roleRouter);
router.use("/remove", deleteRouter);

// header : contenet-type = json
// method : get
// body : {message : ...}
// endpoint : "/"

module.exports = router;
