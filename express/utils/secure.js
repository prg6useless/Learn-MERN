// check role module

const checkRole = (userRole, sysRole) =>
  sysRole.some((item) => userRole.includes(item));

module.exports = checkRole;
