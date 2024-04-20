//1.
const first_array = [1, 2, 4, 5, 6];

const sumOfArrayElements = (input_array) => {
  let sum = 0;
  for (let i = 0; i < input_array.length; i++) {
    sum += input_array[i];
  }
  return sum;
};

console.log(
  "The sum of the elements of the array is : ",
  sumOfArrayElements(first_array)
);

//2.
//using value
const second_array = [3, 6, 2, 7, 9, "me"];

const removeItem = (input_array, value) => {
  let newArray = new Array();
  for (let i = 0; i < input_array.length; i++) {
    if (input_array[i] === value) {
      newArray = input_array.filter((item) => item != value);
    }
  }
  if (newArray.length === 0) return "no such item exists";
  return newArray;
};

console.log(removeItem(second_array, 7));

//using index
const removeItemUsingIndex = (input_array, index) => {
  if (input_array.length - 1 < index) return "invalid index";
  for (let i = 0; i < input_array.length; i++) {
    if (i === index) {
      input_array.splice(index, 1);
    }
  }
  return input_array;
};

console.log(removeItemUsingIndex(second_array, 2));

//3 max and min value of an array

const third_array = [25, 34, 56, 12, 78, 42]; //max:78, min:12

const findMinAndMax = (input_array) => {
  let temp;
  let extreme_array = [];
  for (let i = 0; i < input_array.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (input_array[j] > input_array[i]) {
        temp = input_array[j];
        input_array[j] = input_array[i];
        input_array[i] = temp;
      }
    }
  }
  extreme_array.min = input_array[0];
  extreme_array.max = input_array[input_array.length - 1];
  return extreme_array;
};

console.log(findMinAndMax(third_array));

//4.

const forth_array = [56, 23, 12, 45, 67];
console.log("Array in original order :", forth_array);
// const dummy_array = [56, 23, 12, 45, 67];
// console.log(dummy_array.reverse());

const reverseArray = (input_array) => {
  let newArray = [];
  for (let i = input_array.length - 1; i >= 0; i--) {
    newArray.push(input_array[i]);
  }
  return newArray;
};

console.log("The array in reverse order", reverseArray(forth_array));

//5.

const fifth_array = [24, 56, 12, 11, 34, 67];

const findSecondLargest = (input_array) => {
  let element;
  let temp;
  for (let i = 0; i < input_array.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (input_array[j] < input_array[i]) {
        //sorting in descending order
        temp = input_array[j];
        input_array[j] = input_array[i];
        input_array[i] = temp;
      }
    }
  }
  element = input_array[1];
  return element;
};

console.log("The second largest element is : ", findSecondLargest(fifth_array));

//6.

const sixth_array = [1, 2, 3, 4, 5, 6];
const target_sum = 6;

const findValues = (input_array, sum) => {
  if (input_array.length < 2) return "size of array should be greater than 1";
  let values = [];
  for (let i = 0; i < input_array.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (
        input_array[j] + input_array[i] === sum &&
        input_array[j] != input_array[i]
      ) {
        console.log(`${input_array[j]} + ${input_array[i]} = ${sum}`);
        values.push(input_array[j], input_array[i]);
      }
    }
  }
  if (values.length === 0) return "no numbers found";
  return `And the numbers are ${values}`;
};

console.log(findValues(sixth_array, target_sum));

//7.

const seventh_array = [2.3, 5.4, 1.7, 8.3, 7];

const convertToKm = (input_array) => {
  let totalDistanceInKilometers = 0;
  let kmArray = [];

  kmArray = input_array.map((item) => Number((item * 1.60934).toFixed(4)));
  console.log(kmArray);
  for (let i = 0; i < kmArray.length; i++) {
    totalDistanceInKilometers += kmArray[i];
  }
  return totalDistanceInKilometers;
};

console.log(convertToKm(seventh_array));

//8.

const eigth_array = [3, 5, 2, 7, 1, 9, 4];

const operations = (input_array) => {
  let sum = 0;
  let size = input_array.length;
  let newArray = [];
  newArray = input_array.map((item) => Math.pow(item, 2));
  console.log(newArray);
  for (let i = 0; i < newArray.length; i++) {
    sum += newArray[i];
  }
  console.log(sum);
  return sum / size;
};

console.log(operations(eigth_array));

//9.

const ninth_array = [
  "mercedes",
  "benneli",
  "hyundai",
  "kawasaki",
  "toyota",
  "Ferrai",
];

const changeToUpperCase = (input_array) => {
  let newArray = [];
  newArray = input_array.map((item) => item.toUpperCase());
  return newArray;
};

console.log(changeToUpperCase(ninth_array));

//10.

const tenth_array = [45, 33, 64, 28, 19];
const doubleElements = (input_array) => {
  return input_array.map((item) => item * 2);
};

console.log(doubleElements(tenth_array));

//11.
let food_one = ["Noodle", "Pasta", "Ice-cream"];
let food_two = ["Fries", "Ice-cream", "Pizza"];
// Compare the 2 arrays and find common food if any.

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

console.log("The common item(s) is/are : ", findCommonItem(food_one, food_two));

//using includes()
const checkCommon = (arr1, arr2) => {
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) return arr2[i];
  }
  return "No common items found";
};

const CommonItem = food_one.filter((item) => food_two.includes(item));

console.log(checkCommon(food_one, food_two));
console.log(CommonItem);