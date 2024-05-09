const router = require("express").Router();
const { signToken, verifyToken } = require("../../utils/token");
const { roleMiddleWare } = require("../../utils/secure");
const users = require("./data");

//get all users
router.get("/", roleMiddleWare(["admin"]), (req, res, next) => {
  try {
    res.json({ msg: "All users", users });
  } catch (e) {
    next(e);
  }
});

//get one user
router.get("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({ msg: `User ${id}`, user: users[id - 1] });
  } catch (e) {
    next(e);
  }
});

//register user
router.post("/register", (request, response, next) => {
  try {
    const { username, email, password } = request.body;
    console.log({ username, email, password });
    // send email to the specified email using nodemailer and events
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
    const { name, password } = request.body;
    if (!name || !password) throw new Error("Email or password is missing");
    if (name === "Saral" && password === "Saral123") {
      const payload = {
        name,
        password,
        roles: ["admin"],
      };
      const myToken = signToken(payload);
      return response.json({ msg: "login success", token: myToken });
    }
    // response.status(400).json({ msg: "User Details incorrect" });
    throw new Error("Invalid credentials");
  } catch (error) {
    next(error); // sends control flow or the error to app.js
  }
});

// verify token
// router.get("/:id/verify", (req, res, next) => {
//   try {
//     const { id } = req.params;
//     console.log(globalToken);
//     const verifiedData = auth.verifyToken(globalToken);
//     let isVerified =
//       verifiedData.name === users[id - 1].name &&
//       verifiedData.password === users[id - 1].password
//         ? true
//         : false;

//     res.json({
//       msg: `User ${id}`,
//       user: users[id - 1],
//       isVerified,
//     });
//   } catch (e) {
//     next(e);
//   }
// });

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

//forget password
router.patch("/:id/forgot-password", (request, response) => {
  const { id } = request.params;
  // user email or username verification first
  const { password } = request.body;

  const matchId = users.findIndex((item) => item.id === Number(id));
  if (matchId === -1) return response.json({ error: "User not Found" });
  users[matchId] = { ...users[matchId], password };

  response.json({
    msg: "password changed, you can now login with this new password",
    users,
  });
});

//reset password == change password ?

//change password
router.patch("/:id/change-password", (request, response) => {
  const { id } = request.params;
  const { password } = request.body;

  const matchId = users.findIndex((item) => item.id === Number(id));
  if (matchId === -1) return response.json({ error: "User not Found" });
  if (password === users[matchId].password)
    return response.json({
      error: "new password cant be same as old password",
    });
  users[matchId] = { ...users[matchId], password };

  response.json({ msg: "password changed", users });
});

// check user role
router.get("/:id/check-role", (request, response) => {
  const { id } = request.params;
  const matchId = users.findIndex((item) => item.id === Number(id));
  if (matchId === -1) return response.json({ error: "User not Found" });
  // const myRole = role(users[matchId].role, sysRole);
  // response.json({ msg: `${myRole} user role is ${users[matchId].role}` });
  response.json({ msg: "User role is :" });
});

//change user role
router.patch("/:id/role", (request, response) => {
  const { id } = request.params;
  const { role } = request.body;

  const matchId = users.findIndex((item) => item.id === Number(id));
  if (matchId === -1) return response.json({ error: "User not Found" });
  users[matchId].role = role;

  response.json({ msg: "updated role", users });
});

//change user status
router.patch("/:id/status", (request, response) => {
  const { id } = request.params;

  const matchId = users.findIndex((item) => item.id === Number(id));
  if (matchId === -1) return response.json({ error: "User not Found" });
  users[matchId].isActive = !users[matchId].isActive;

  response.json({ msg: "updated status", users });
});

// delete user
router.delete("/:id/delete", (request, response) => {
  const { id } = request.params;

  const matchId = users.findIndex((item) => item.id === Number(id));
  if (matchId === -1) return response.json({ error: "User not Found" });
  const newUsers = users.filter((item) => item.id != Number(id));

  response.json({ msg: "user removed", newUsers });
});

module.exports = router;
