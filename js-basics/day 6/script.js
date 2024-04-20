console.log("Day 6");

// const firstArray = [3, 4, 2, 5, 6, 1];

// const bubbleSort = (arr) => {
//   let newArr = arr;

//   for (let i = 0; i < arr.length; i++) {
//     let temp;
//     for (let j = i + 1; j <= i; j++) {
//       if (newArr[j] < newArr[i]) {
//         newArr[i] = newArr[i + 1];
//         newArr[i + 1] = temp;
//         temp = newArr[i];
//       }
//     }
//   }
//   return newArr;
// };
// console.log(bubbleSort(firstArray));

// Create

const myArray = [
  "hyundai",
  { Name: "mercedes" },
  "byd atto 3",
  ["67", 13],
  () => {
    return "hello";
  },
]; //or const myArray = new Array()

console.log(myArray);

// Read

console.log(myArray[1].Name, myArray[4]());

// Update

myArray[0] = "kawasaki";
console.log(myArray);

// Delete
//Use spread operator ...

const [a, b, ...nextArray] = myArray;
console.log(nextArray);

const items = ["hello", "world", 1, 2, { a: 13, b: "mine" }, [23, "567"]];

const first = [1, 2, 3];
const second = [4, 5, 6];

const third = [...first, ...second];
for (let i of third) {
  console.log(i);
}

// third.forEach((val)=>console.log(val))

//add new element to array using method

const newArr = [1, 2];
newArr.unshift(0);
console.log(newArr);

//convert array to string
console.log(newArr.toString()); // Output : 0,1,2

//

const test = "1,2,3";
//convert string to array
const testArr = test.split(",");
console.log(testArr);

// Question#1 sort to ascending order
const people = [
  { name: "saral", age: 10 },
  { name: "ram", age: 14 },
  { name: "hari", age: 9 },
];

//using bubblesort
const sortArray = (pArray) => {
  let temp_array = [{}];
  for (let i = 0; i < pArray.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (pArray[j].age > pArray[i].age) {
        //pArray[j].age < pArray[i].age for descending
        temp_array = pArray[j];
        pArray[j] = pArray[i];
        pArray[i] = temp_array;
      }
    }
  }
  return pArray;
};
console.log(sortArray(people));

const resultSort = people.sort((a, b) => {
  return a.age - b.age;
});

console.log(resultSort);

const arr = [1, 2, 3, 4, 5, 6];

//immutable js
// map, reduce, sort, some, every, filter, find

// Date

const d = new Date();
console.log(d);
