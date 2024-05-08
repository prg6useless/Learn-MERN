// check role module

const checkRole = (userRole, sysRole) =>
  sysRole.some((item) => userRole.includes(item));

// module.exports = checkRole;

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

module.exports = {
  roleMiddleWare,
};
