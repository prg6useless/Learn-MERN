const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

//map
const names = characters.map((item) => item.name);
const heights = characters.map((item) => item.height);
const namePrevElementandHeight = characters.map(({ name, height }) => ({
  name,
  height,
}));
const objArr = characters.map((elements) => ({
  name: elements.name,
  height: elements.height,
}));

// const objArr2 = characters.map((elements) => {
//   return { name: elements.name, height: elements.height };
// });

const firstNames = characters.map((item) => item.name.split(" ")[0]);

console.log({ names, heights, namePrevElementandHeight, firstNames, objArr });

//reduce
const countMass = 0;
const totalMass = characters.reduce(
  (previousElement, currentElement) =>
    previousElement + parseInt(currentElement.mass),
  countMass
);

//always use this technique
const getTotalMass = (arr) => {
  return arr.reduce(
    (previousElement, currentElement) =>
      previousElement + parseInt(currentElement.mass),
    countMass
  );
};

const result = getTotalMass(characters);
console.log({ result });

const countHeight = 0;
const totalHeight = characters.reduce(
  (previousElement, currentElement) =>
    previousElement + parseInt(currentElement.height),
  countHeight
);

const totalCharacters = characters.reduce((previousElement, currentElement) => {
  return previousElement + currentElement.name.split("").length;
}, 0);

const totalCharactersByEyeColor = characters.reduce((object, element) => {
  !object[element.eye_color] ? (object[element.eye_color] = 0) : {};
  object[element.eye_color] += 1;
  return object;
}, {});

const totEyeColor = (array) => {
  return array.reduce((newObj, item) => {
    if (newObj[item.eye_color]) {
      newObj[item.eye_color]++;
    } else {
      newObj[item.eye_color] = 1;
    }
    return newObj;
  }, {});
};
console.log(totEyeColor(characters));

console.log({
  totalMass,
  totalHeight,
  totalCharacters,
  totalCharactersByEyeColor,
});

//filter

const massHundred = characters.filter((element) => element.mass > 100);
const heightTwoHundred = characters.filter((element) => element.height < 200);
const maleCharacters = characters.filter(
  (element) => element.gender === "male"
);
const femaleCharacters = characters.filter(
  (element) => element.gender === "female"
);

const fC = (arr) => {
  return arr.filter((element) => element.gender === "female");
};

console.log(fC(characters));

console.log({
  massHundred,
  heightTwoHundred,
  maleCharacters,
  femaleCharacters,
});

//sort

//confusion here
const sortByName = characters.sort((previousElement, currentElement) => {
  const namePrevElement = previousElement.name.toUpperCase();
  const nameCurrElement = currentElement.name.toUpperCase();
  if (namePrevElement < nameCurrElement) {
    return -1;
  }
  if (namePrevElement > nameCurrElement) {
    return 1;
  }
  return 0;
});

const sortByName_two = characters.sort((previousElement, currentElement) =>
  previousElement.gender.localeCompare(currentElement.gender)
);

const sortByMass = characters.sort(
  (previousElement, currentElement) =>
    previousElement.mass - currentElement.mass
);
const sortByHeight = characters.sort(
  (previousElement, currentElement) =>
    previousElement.height - currentElement.height
);
const sortByGender = characters.sort((previousElement, currentElement) =>
  previousElement.gender.localeCompare(currentElement.gender)
); //how??

console.log({
  sortByName,
  sortByMass,
  sortByHeight,
  sortByGender,
  sortByName_two,
});

//every

const blueEyes = characters.every((element) => element.eye_color === "blue");
const massForty = characters.every((element) => element.mass > 40);
const heightCheck = characters.every((element) => element.height > 200);
const maleGenderCheck = characters.every(
  (element) => element.gender === "male"
);

console.log({ blueEyes, massForty, heightCheck, maleGenderCheck });

//some

const oneMaleCharacter = characters.some(
  (element) => element.gender === "male"
);
const oneBlueEyes = characters.some((element) => element.eye_color === "blue");
const oneTallTwoHundred = characters.some((element) => element.height > 200);
const oneMassFifty = characters.some((element) => element.mass < 50);

console.log({ oneMaleCharacter, oneBlueEyes, oneTallTwoHundred, oneMassFifty });
