const express = require("express");
const router = express.Router();

// we use express middleware to handle errors
// two types of error :
// application level error and routing level error

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

module.exports = router;
