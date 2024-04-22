//Both for..of and for..in statements iterate over lists;
//the values iterated on are different though,
//for..in returns a list of keys on the object being iterated,
//for..of returns a list of values of the numeric properties
//of the object being iterated.

let list = [4, 5, 6];

for (let i in list) {
  console.log(i); // "0", "1", "2",
}

for (let i of list) {
  console.log(i); // "4", "5", "6"
}

//1.
//Print (console.log()) value of the property
//"name" in the given object:

let student = {
  Name: "Max",
  age: 27,
};

const { Name, age } = student;

console.log({ Name });

//2.
//a. Find the value of the price property and
//if it is greater than 100, discount it by 10%.
//If that’s not the case, discount it by 7%.
//b. Update the object with the new property -
//discount and the corresponding value (7% or 10%)
//and the new price.

let item = {
  name: "headphones",
  price: 120,
};

const changePrice = (product) => {
  if (product.price > 100) {
    product.price -= (product.price * 10) / 100;
    product.discount = 10 + "%";
  } else {
    product.price -= (product.price * 7) / 100;
    product.discount = 7 + "%";
  }
  return product;
};

console.log(changePrice(item));

//3.
// Use given object and loop through its properties and
//if it has property “discount” print “Already discounted by…”
//and add the value (how much was the discount).
//In opposite case, do what you did in the previous exercise:
//check the price, depending on it
//(if it’s greater or lower than 100) add discount (10% or 7%)
//and add the property “discount” to the object.

// End result should be like this >>

// end result - case 1:
// { name: 'headphones', price: '77.84', discount: '7%' }

// end result - case 2:
// Already discounted by 7%.

let prod = {
  name: "headphone",
  price: 82,
};

const updateProd = (product) => {
  if (product.discount) return `Already discounted by ${product.discount}%`;
  else {
    if (product.price > 100) {
      product.price -= (product.price * 10) / 100;
      product.discount = 10 + "%";
    } else {
      product.price -= (product.price * 7) / 100;
      product.discount = 7 + "%";
    }
    return product;
  }
};

console.log(updateProd(prod));

//4.
//Write a JavaScript program to calculate circle area and perimeter.
//Note : Create two methods to calculate the area and perimeter.
//The radius of the circle will be supplied by the user.

// const Circle = {
//   area: (r) => 3.14 * r * r,
//   perimeter: (r) => 2 * 3.14 * r,
// };

// const radius = Number(prompt("enter radius of circle"));
// console.log(Circle.area(radius), Circle.perimeter(radius));

//5.
//Write a program which can return a boolean
//if value is present in the range with given start
//and end values in an object

let range = {
  start: 10,
  end: 50,
  isInRange: (val) => {
    if (val >= range.start && val <= range.end) return true;
    return false;
  },
};

console.log(range.isInRange(55)); //false
