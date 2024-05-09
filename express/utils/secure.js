// check role module
// RBAC - role based access control

const { checkRole, verifyToken } = require("./token");

const roleMiddleWare = (sysRole) => {
  return (req, res, next) => {
    //route level middleware
    const { token } = req.headers;
    // no token ?
    if (!token) throw new Error("Token is missing");
    // token valid?
    const isValid = verifyToken(token);
    // token expired?
    if (!isValid) throw new Error("Token expired");
    const { data } = isValid;
    const validRole = checkRole({ sysRole, userRole: data?.roles || [] });
    if (!validRole) throw new Error("User Unauthorized");
    next();
  };
};

module.exports = {
  roleMiddleWare,
};
