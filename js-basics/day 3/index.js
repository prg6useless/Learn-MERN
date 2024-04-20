//loops

// for loop
// do while
// while

//WAP that prints from 1 to 10
console.log("for loop");
for (let i = 1; i < 11; i++) {
  console.log({ index: i });
}

// console.log("do while loop");
// let num = 1;
// do {
//   console.log({ number: num });
//   num++;
// } while (num < 11);

// console.group("while loop");
// let num2 = 1;
// while (num2 < 11) {
//   console.log({ number2: num2 });
//   num2++;
// }

//write a multiplication table for 7
console.log("for loop");
const number = 7;
for (let i = 1; i <= 10; i++) {
  console.log(number * i);
}

// console.log("do while loop");
// const number_two = 7;
// let factor = 1;
// do {
//   console.log(number_two * factor);
//   factor++;
// } while (factor <= 10);

// console.group("while loop");
// const number_three = 7;
// let factor_two = 1;
// while (factor_two <= 10) {
//   console.log(number_three * factor_two);
//   factor_two++;
// }

//write a factorial of 5

console.log("for loop");
// let factorial_number = Number(prompt("enter whose factorial is to be found"));
const factorial_number = 7;
let factorial = 1;

for (let j = 1; j <= factorial_number; j++) {
  factorial = factorial * j;
}
console.log(factorial);

// console.log("do while loop");
// let factorial_number_two = 7;
// let factorial_two = 1;

// do {
//   factorial_two *= factorial_number_two;
//   factorial_number_two--;
// } while (factorial_number_two != 0);
// console.log(factorial_two);

// console.log("while loop");
// let factorial_number_three = 7;
// let factorial_three = 1;

// while (factorial_number_three != 0) {
//   factorial_three *= factorial_number_three;
//   factorial_number_three--;
// }
// console.log(factorial_three);

console.log("recurssion function");
const getFactorial = (number) => {
  if (number != 0) return number * getFactorial(number - 1);
  return 1;
};

let factorial_four = getFactorial(7);
console.log(factorial_four);

// = -> assignment operator
// == -> compare value
// === -> compare value and datatype, strict checking
