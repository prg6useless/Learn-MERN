/*types
Parameterized Function
Default Function
Explicit Function
Implicit Function
Anonymous Function
Inline Function
Closure Function
IIFE
Pure Function
Callback Function
*/

//Parameterized Function

const getFirstName = (name) => {
  // const words = name.split(" "); split() -> method : built-in function
  // const result = words[0]
  // return result

  return name.split(" ")[0];
};

console.log(getFirstName("Saral Sainju"));

//Default Function; function with a defualt argument value
//Real Wold Example : Pagination
const sayHi = (name = "Saral") => {
  console.log(`hi ${name}`);
};
sayHi();
sayHi("Ram");

//Explicit Function
// having return statement

const getValue = () => {
  return "hello";
};

//Implicit Function
//not containing return statement

const getName = () => "hello";

//WAP that returns last name of the user

const getLastUser = (name) => name.split(" ")[1];
const name_two = "Saral Sainju";
console.log(getLastUser(name_two));

//prime or not
// not implicit
const isPrime = (number) => {
  if (number <= 1) return false;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
};
console.log(isPrime(10));

//function that converts long sentence to "..." statement
//truncate

const truncateSentence = (sentence) =>
  sentence.length <= 20 ? sentence : sentence.slice(0, 20) + "...";

console.log(
  truncateSentence("This is a very long sentence that needs to be truncated.")
);

//function chaining
const truncateSentence_two = (sentence) => sentence.slice(0, 20).concat("...");

// Anonymous Function
// function with no name, assigned to a variable
const function_name = function () {};

// Inline Function
// function within a function having no relation with the parent other

// IIFEs
// Immediately Invoked Function Expressions
// Used mostly by DevOps, also in backend

(function () {
  console.log("hi");
})(); // called in definition itself

// Closure Function
// used for closing env variables in a function for security
const getCredentials = () => {
  return {
    email: "...",
    pw: "...",
  };
};

// Pure Function
// function that returns out the same expected result
// eg: truncateSentence_two function; Line 74
// this function is expected to truncate 20 character everytime

// Callback Function
// function executed after another function has finished its execution
// function getSth (name,()=>{...})

// someFunction()
//   .then((result) => result)
//   .then((result) => `hi ${result}`);

// introduced promises and async,await
// callback -> promise -> async await

// WAP that checks if user inputed emial is valid email or not

// const checkEmail = (email) => {
//   const emailStr = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   if (!email.match(emailStr)) return false;
//   return true;
// };

// const email = prompt("Enter email");
// console.log(checkEmail(email));

// convert full name to proper case

const toProperCase = (name) => {
  let words = name.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase().concat(words[i].slice(1)); //chaining
  }
  return words.join(" ");
};

console.log(toProperCase("ram gopal shrestha"));

//implicit function that formats string number to following format
// 10000 => 10,000
// 10000000 => 10,000,000

const currencyFormatter = (str) => {
  let number = str.split("");
  for (let i = str.length; i >= 0; i--) {
    if (i === 3) {
      console.log(str[i]);
    }
  }
};

currencyFormatter("10000");
