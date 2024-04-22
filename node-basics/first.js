// use your created module here

// importing second.js module
const second = require("./second");
const properCase = second.toProperCase("i am saral sainju");
const truncate = second.truncateSentence(
  "my name is aldfhalshf afhnakdfh akdfhkaf"
);

const concatWords = second.concatStrings("saral", "sainju");

console.log({ properCase, truncate, concatWords });
