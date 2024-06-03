const formSubmit = (e) => {
  e.preventDefault(); // prevent the page from reloading
  const contactForm = document.getElementById("contactForm");
  console.log(contactForm);
  const formData = new FormData(contactForm);
  for (const value of formData.values()) {
    console.log(value);
  }
  contactForm.reset(); // clear the values of the form
  document.getElementById("systemMsg").innerHTML =
    "Thank you for filling the form";
  setTimeout(() => {
    document.getElementById("systemMsg").innerHTML = "";
  }, 3000);
};

const num = "2345678910";

const displayNumber = (number) =>
  number.length === 10 ? "********".concat(number.slice(8)) : "Inavlid number";

console.log(displayNumber(num));

const val = "37xT036vB4772427Fs841590878Qm283"; //32 char string

const displayValue = (value) =>
  value
    .slice(0, 10)
    .concat("...")
    .concat(value.slice(value.length - 10, value.length));

console.log(displayValue(val));

// assignment

// copy url to clipboard feature

const vowelCount = (string) => {
  let vowelObject = {};
  let vowels = "aeiou";
  for (let char of string) {
    if (vowels.includes(char)) {
      if (!vowelObject[char]) vowelObject[char] = 1;
      else {
        vowelObject[char] += 1;
      }
    }
  }
  return vowelObject;
};

console.log(vowelCount("koutaro"));

// convert full name to proper case

const toProperCase = (string) =>
  string
    .split(" ")
    .map((items) => items.charAt(0).toUpperCase().concat(items.slice(1)))
    .join(" ");

console.log(toProperCase("yamashita mizuki"));

// check nepali number

const checkNumber = (string) =>
  string.length === 10 && string.match(/9[8/7]\d{8}/gi) ? true : false;

console.log(checkNumber("9742342435"));

// (() => {})(); -> IIFE

// fibonacci series
const fibonacci = (num) => {
  let num1 = 0;
  let num2 = 1;
  let sum;

  for (let i = 1; i <= num; i++) {
    console.log(num1);
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  }
  return num2;
};
console.log("Fibonacci(5): " + fibonacci(8));
// console.log("Fibonacci(8): " + fibonacci(8));

// reverse array
const array = [1, 2, 3, 4, 5];
let reverseArray = [];
for (i = array.length - 1; i >= 0; i--) {
  reverseArray.push(array[i]);
}
console.log(reverseArray);
console.log(array.reverse());

// sum of array
const array2 = [1, 2, 3, 4, 5, 6];
let sum = 0;
for (let i = 0; i < array2.length; i++) {
  sum += array2[i];
}
console.log(sum);
const sumArray = array2.reduce((num1, num2) => num1 + num2, 0);
console.log(sumArray);

// array of only even number
let even = 0;
let evenArray2 = [];
for (let i = 0; i < array2.length; i++) {
  if (array2[i] % 2 === 0) evenArray2.push(array2[i]);
}
const evenArray = array2.filter((items) => items % 2 === 0);
console.log(evenArray, evenArray2);

// no of items in array
let array3 = [1, 1, 2, 2, 2, 3, 3, 3, 3, 4];

const countArray = (array, number) => {
  let count = 0;
  for (let item of array3) {
    if (item === number) count++;
  }
  return count;
};

console.log("number of occurence of 2 : ", countArray(array3, 2));

const arrayItems = (array) => {
  let countObj = {};
  for (let item of array) {
    if (!countObj[item]) countObj[item] = 1;
    else countObj[item] += 1;
  }
  return countObj;
};
console.log(arrayItems(array3));

// remove duplicate from array

const newArray = array3.filter(
  (items, index) => array3.indexOf(items) === index
);

console.log(newArray);

// sort by author name

const names = [
  { author: "Victor", title: "The Road Ahead" },
  { author: "Celine", title: "Harry Potter" },
  { author: "Max", title: "Carry On" },
];

names.sort((a, b) => {
  if (a.author < b.author) {
    return -1;
  }
  if (a.author > b.author) {
    return 1;
  }
  return 0;
});

console.log(names);

let arr1 = ["Momo", "Pizza", "Ice-cream"];
let arr2 = ["Fruits", "Veggies", "Pizza"];

const findCommonItem = (array_one, array_two) => {
  let common_item = new Array();
  for (let i = 0; i < array_one.length; i++) {
    for (let j = 0; j < array_two.length; j++) {
      if (array_one[i] === array_two[j]) {
        common_item.push(array_one[i]);
      }
    }
  }
  if (common_item.length === 0) return "no common items found";
  return common_item;
};

console.log(findCommonItem(arr1, arr2));

const CommonItem = (array1, array2) =>
  array1.filter((item) => array2.includes(item));
console.log(CommonItem(arr1, arr2));
