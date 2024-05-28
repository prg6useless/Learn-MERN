// check role module
// RBAC - role based access control

const userModel = require("../modules/users/user.model");
const { checkRole, verifyToken } = require("./token");

const secureMiddleWare = (sysRole = []) => {
  return async (req, res, next) => {
    //route level middleware
    try {
      const { token } = req.headers;
      // no token ?
      if (!token) throw new Error("Token is missing");
      // token valid?
      const isValid = verifyToken(token);
      // token expired?
      if (!isValid) throw new Error("Token expired");
      const { data } = isValid;
      const userInfo = await userModel.findOne({
        email: data?.email,
        isActive: true,
        isEmailVerified: true,
      });
      if (!userInfo) throw new Error("user not found");
      const validRole = checkRole({ sysRole, userRole: userInfo?.roles || [] });
      if (!validRole) throw new Error("User Unauthorized");
      req.currentUser = userInfo?._id;
      req.isAdmin = userInfo?.roles.includes("admin");
      next();
    } catch (e) {
      next(e);
    }
  };
};
module.exports = {
  secureMiddleWare,
};

// RBAC vs PBAC vs ABAC
