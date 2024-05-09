// check role module
const jwt = require("jsonwebtoken");
require("dotenv").config();

const checkRole = (userRole, sysRole) =>
  sysRole.some((item) => userRole.includes(item));

const createToken = (payload) => jwt.sign(payload, process.env.JWT_KEYN);
const verifyToken = (token) => jwt.verify(token, process.env.JWT_KEYN);

const roleMiddleWare = (sysRole) => {
  return (req, res, next) => {
    //route level middleware
    const { role } = req.headers;
    const result = checkRole(role, sysRole);
    if (!result) res.status(400).json({ msg: "User Unauthorized" });
    next();
  };
};

// jwt user login middleware

const tokenMiddleware = (req, res, next) => {
  //route level middleware
  const { token } = req.headers;
  const result = verifyToken(token);
  if (!result) res.status(400).json({ msg: "User Authentication Failed" });
  next();
};

module.exports = {
  roleMiddleWare,
  createToken,
  tokenMiddleware,
};
