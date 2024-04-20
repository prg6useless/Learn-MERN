console.log("day 2");

//Data types

// primtive data types

//string

const person = "saral";
let next_person = "sarala";
const female = "sita";
const user = `saral`; //backtick, tilde sign

console.log({ person, next_person, female, user });

// number

const num = 20.0;

// boolean (true/false)

const isAboveEighteen = true; //CamelCase

// undefined

let unity;
var unity3;

console.log({ unity, unity3 });

// null

const unity2 = null;

console.log({ unity2 });

// type conversion or type coercion

// multiply using interactions (prompt)
const mul1 = prompt("enter first number");
const mul2 = prompt("enter second number");

// type conversion Method 1
const result = Number(mul1) * Number(mul2);
const stringOnly = String(mul1);

console.log({ mul1, mul2, result, stringOnly });

// Method 2
const result2 = +mul1 * +mul2;
console.log({ result2 });

// Operators

// logical operators

//AND &&, OR ||, NOT !

const andCheck = mul1 && mul2;
const orCheck = mul1 || mul2;
const notCheck = !mul1;

console.log({ andCheck, notCheck, orCheck });

