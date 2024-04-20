//1.
const reverseString = (str) => {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
};

console.log(reverseString("32243"));

//2.
const checkVowels = (str = "The quick brown fox") => {
  let vowels = "aeiou";
  console.log(vowels);
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) count++;
  }
  return count;
};

console.log(checkVowels());

//3.
const isPrime = (number) => {
  if (number <= 1) return false;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
};
console.log(isPrime(11) ? "prime" : "not prime");

//4.

const repeatedString = (str) => {
  let frequency = {};
  for (let char of str) {
    if (frequency[char]) {
      frequency[char] += 1;
    } else frequency[char] = 1;
  }
  return frequency;
};

console.log(repeatedString("aaaabbcbcdd"));

const obj = { a: 0, b: 2, c: 4 };
console.log(obj["b"] + 1); //output : 3

//5.

const notRepeated = (str = "abacddbec") => {
  let frequency = {};
  for (let char of str) {
    if (frequency[char]) {
      frequency[char] += 1;
    } else frequency[char] = 1;
  }
  for (let char of str) {
    if (frequency[char] === 1) return char;
  }
};

console.log(notRepeated());

//6.

const findLongestCountryName = (nameList) => {
  let length = 0;
  let word;
  for (let i = 0; i < nameList.length; i++) {
    if (length < nameList[i].split("").length) {
      length = nameList[i].split("").length;
      word = nameList[i];
    }
  }
  return word;
};
console.log(
  findLongestCountryName(["Australia", "Germany", "United States of America"])
);

//7.

const findSquare = (num) => num * num;
console.log(findSquare(4));

//8.

const findInterest = (p, t, r) => ((p * (1 + r)) ^ t) - p;
console.log(findInterest(10000, 3, 10));
