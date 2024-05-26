const Bcrypt = require("bcryptjs");

const generateHash = (payload) => {
  return Bcrypt.hashSync(payload, Number(process.env.SALT_ROUND));
};

const compareHash = (hashPayload, payload) =>
  Bcrypt.compareSync(payload, hashPayload);

module.exports = { generateHash, compareHash };
