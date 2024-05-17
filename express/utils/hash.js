const Bcrypt = require("bcryptjs");

const generateHash = (payload) => {
  return Bcrypt.hashSync(payload, Number(process.env.SALT_ROUND));
};

const compareHash = (hashPayload, payload) => {
  return Bcrypt.compareSync(payload, hashPayload);
};

module.exports = { generateHash, compareHash };
