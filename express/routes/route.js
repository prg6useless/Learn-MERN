const express = require("express");
const router = express.Router();
const userRouter = require("./users");
const updateUserRouter = require("./updateUser");
const passwordRouter = require("./forgotPassword");
const statusRouter = require("./status");
const roleRouter = require("./role");
const deleteRouter = require("./remove");

const users = require("./data");

router.get("/", (request, response) => {
  // client requests data from server
  console.log({
    query: request.query, // query starts with ? in the url
    params: request.params, //":id" -> params
    body: users, // data comes from middleware
  });
  response.json({ users });
});

// header : contenet-type = json
// method : get
// body : {users}
// endpoint : "/"

router.use("/users", userRouter);
router.use("/update", updateUserRouter);
router.use("/password", passwordRouter);
router.use("/status", statusRouter);
router.use("/role", roleRouter);
router.use("/remove", deleteRouter);

module.exports = router;