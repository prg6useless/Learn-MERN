// function that check if user is allowed access or no tbase d on the role

// Case 1:
// userRole = ['user']
// sysRole = ['admin','manager']
// return false

// Case 2:
// userRole = ['user','receptionist']
// sysRole = ['admin','receptionist']
// return true

const sysRole = ["admin", "manager"];

const checkAccess = (user, sysRole) => {
  for (let i = 0; i < user.length; i++) {
    if (sysRole.includes(user[i])) return true;
  }
  return false;
};

const userRole = ["user"];
// userRole = ["user"]; by default, variable is assigned by let

const checkRole = (user, sys) => sys.some((role) => user.includes(role));

console.log(checkAccess(userRole, sysRole), checkRole(userRole, sysRole));

// Real World Pagination

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pageNumber = 1;
const limit = 2;

const Pagination = ({ data, pageNumber = 1, limit = 3 }) => {
  //   arr.slice((pageNo - 1) * limit, (pageNo - 1) * limit + limit);
  const start = (pageNumber - 1) * limit;
  const end = start + limit;
  return data.slice(start, end);
};

console.log(Pagination({ data, pageNumber, limit }));

// Search

const userName = [{ name: "saral" }, { name: "saman" }, { name: "sira" }];

// user type sa => [{name:"saral"},{name:"sa"}]

const input = "sa";

const findUser = (users, input) =>
  users.filter((item) => item.name.includes(input));

console.log(findUser(userName, input));


// good practices

