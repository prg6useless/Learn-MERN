// setTimeout(() => {
//   console.log("2");
// }, 2000);

// setInterval(() => { // runs for infinity
//   console.log("5");
// }, 1000);

// promises are used to resolve callback hell

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const sum = 3 + "a";
    if (isNaN(sum)) {
      reject("error");
    } else {
      resolve(sum);
    }
  }, 5000);
});

// resolve the promise
promise
  .then((result) => {
    console.log({ result });
  })
  .catch((error) => {
    console.log({ error });
  });

// arises to promise chaining, solution => async/await

let x = {},
  y = { name: "Saral" },
  z = { name: "Hina" };

x[y] = { name: "Kubo" };
x[z] = { name: "Yuu" };
console.log(x[y]);
