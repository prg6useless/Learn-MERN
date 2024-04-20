// ES5
// function sayHi(name) {
//   alert(`hello ${name}`);
// }
// sayHi("Saral");

// // ES6
// const sayHello = (name) => {
//   alert(`Hello ${name}`);
// };
// sayHello("Sainju");

// const sum = (numberOne, numberTwo) => {
//   return numberOne + numberTwo;
// };

// const firstNumber = Number(prompt("Enter first number"));
// const secondNumber = Number(prompt("Enter second number"));

// const sumOfNumbers = sum(firstNumber, secondNumber);
// alert(`The sum of ${firstNumber} and ${secondNumber} is ${sumOfNumbers}`);

// WAP that takes username and password
// if username === "Saral" && password ==== "Saral"
// conosle.log("welcome admin")
// if username === password (other than "Saral")
// console.log("welcome user")
// else (us = Ram, pw = Hari)
// console.log("Invalid password or username")

const adminName = "Saral";

const checkUser = (name, pW) => {
  if (name === adminName && password === adminName) {
    return `welcome admin, ${name}`;
  } else if (name === pW) {
    return `welcome user, ${name}`;
  } else {
    return "Invalid username or password";
  }
};

// const username = prompt("Enter username");
// const password = prompt("Enter password");

// const result = checkUser(username, password);
// console.log({ result: result });

// write js funciton to find factorial of 5

const findFactorial = (number) => {
  for (let i = number - 1; i >= 1; i--) {
    number *= i;
  }
  return number;
};
console.log({ factorial: findFactorial(5) });

console.log("recurssion function");
const getFactorial = (number) => {
  if (number != 0) return number * getFactorial(number - 1);
  return 1;
};
console.log({ factorial: getFactorial(5) });

const interest = (principle, time, rate) => {
  rate = rate / 100;
  return (principle * time * rate) / 100;
};

const res = interest(10000, 10, 10);
console.log({ interest: res });

const calculateAge = (year) => {
  const today = new Date();
  return today.getUTCFullYear() - year;
};

console.log(calculateAge(2015));

//reverse a string

const reverseString = (val) => {
  //   let breakString = val.split("");
  //   let reversedString = breakString.reverse();
  //   return reversedString.join("");
  val = val.toLowerCase();
  let reversedString = "";
  for (let i = val.length - 1; i >= 0; i--) {
    reversedString += val[i];
  }
  //check if word is palindrome
  if (val === reversedString) return "is palindrome";
  else return "not palindrome";
};

const value = "dad";
const revStr = reverseString(value);
console.log(revStr);

//to find largest word in a sentence
// "my name is Saral" return Saral

const largestWord = (sentence) => {
  let string = sentence.split(" "); //splits sentence at every space of the sentence
  let lengthOfWord = 0;
  let word;
  for (let i = 0; i <= string.length - 1; i++) {
    if (lengthOfWord < string[i].length) {
      lengthOfWord = string[i].length;
      word = string[i];
    }
  }
  return word;
};

const sentence = "My name is Saral";
console.log(largestWord(sentence));

// convert temperature from celsius to farhenheit
//c/5 = (f-32)/9
//9c/5 + 32

const tempCoverter = (temperature, unit = "celsius") => {
  let farenheit, celsius;
  if (unit === "celsius") {
    farenheit = (temperature * 9) / 5 + 32;
    return farenheit;
  } else {
    celsius = ((temperature - 32) / 9) * 5;
    return celsius;
  }
};

const convertedTemperature = tempCoverter(98.6, "farenheit");
console.log({ convertedTemperature });
