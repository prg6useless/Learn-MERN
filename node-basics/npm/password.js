// nodejs module to encrypt and verify password using bycriptjs
// encryptPassword(str){}
// verifyPassword(hashPW,password){}

const bcrypt = require("bcryptjs");
require("dotenv").config();

const encryptPassword = (str) =>
  bcrypt.hashSync(str, Number(process.env.SALT_ROUND));

// const hashPassword = encryptPassword(process.env.NEW_PASSWORD);
// console.log(hashPassword);

const verifyPassword = (hashPassword, password) =>
  bcrypt.compareSync(password, hashPassword);

// const isVerified = verifyPassword(hashPassword, process.env.NEW_PASSWORD);
// console.log(isVerified);

module.exports = { encryptPassword, verifyPassword };
