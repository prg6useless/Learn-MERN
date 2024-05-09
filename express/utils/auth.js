const jwt = require("jsonwebtoken");
require("dotenv").config();
console.log({ key: process.env.JWT_KEYN });

const createToken = (payload) => jwt.sign(payload, process.env.JWT_KEYN);
const verifyToken = (token) => jwt.verify(token, process.env.JWT_KEYN);

module.exports = { createToken, verifyToken };
