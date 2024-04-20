// complex data types
// Object, Array and Date

// objects
console.log("Day 5");

// CRUD - Create, Read, Update, Delete

const manObj = {
  f_name: "saral",
  age: 18,
  isMan: true,
  phone: "+977-98......",
  feat: () => {
    return `${f_name} is ${age} years old. Is he a man? - ${isMan}. His phone number is ${phone}`;
  },
};
const { f_name, age, isMan, phone, feat } = manObj; //object destructuring
console.log({ f_name, age }, feat());

const Car = {
  model: "Swift",
  brand: "Suzuki",
  releaseYear: 2016,
  fourWheelDrive: false,
  capacity: 5,
  fuelType: "petrol",
  owner: {
    a: "saral",
    2: "hari",
  },
  age_r: function () {
    return 2024 - this.releaseYear;
  }, //ES5
  old: () => {
    return 2025 - Car.releaseYear;
  }, //ES6
};

// const {
//   model,
//   brand,
//   fourWheelDrive,
//   capacity,
//   fuelType,
//   releaseYear,
//   age_r,
//   old,
// } = Car;
// console.log(
//   { model, brand, releaseYear, fourWheelDrive, capacity, fuelType },
//   age_r(),
//   old()
// );

//Create
const box = new Object(); //or const box ={}

//Read

console.log(Car.model, Car.owner[2], Car.owner.a); //or object destructuring

//Update

Car.model = "Brezza";
console.log(Car.model);

// Delete

delete Car.old();
const { model, brand, releaseYear, ...newObj } = Car;
console.log(newObj);

//exercise

const Teacher = {
  name: "Saral",
  dob: 2001,
  age: function () {
    //global scope
    return 2024 - this.dob;
  },
  old: () => {
    //local scope
    return 2024 - Teacher.dob;
    // return 2024 - this.dob; //returns NaN
  },
};

console.log(Teacher.age());
console.log(Teacher.old());

const currencyFormatter = (curr) => {
  const format = curr.split("").reverse();
  for (let i = 3; i < format.length; i += 3) {
    format[i] += ",";
  }
  return format.reverse().join("");
};

console.log(currencyFormatter("10000"));
