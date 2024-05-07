// node js module to create and verify JTWT using json web token
// createToken(): string
// verifyToken(): boolean

const jwt = require("jsonwebtoken");
require("dotenv").config();

const createToken = (payload) => jwt.sign(payload, process.env.JWT_KEY);

// const token = createToken({ name: "saral", id: "sainju" });
// console.log(token);

const verifyToken = (token) => jwt.verify(token, process.env.JWT_KEY);

// const dataOfToken = verifyToken(token);
// console.log(dataOfToken);

module.exports = { createToken, verifyToken };
