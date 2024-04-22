// // create your module here

// // defining functions in the module
// const today = () => {
//   return new Date();
// };

// const getDay = () => {
//   const now = new Date().getDay();
//   const days = ["sun", "mon", "tue", "wed", "thurs", "fri", "sat"];
//   return days[now];
// };

// // exporting the module
// module.exports = { getDay, today };

// create module for string functions
// -> convert to proper case
// -> truncate sentence
// -> join two strings

// truncate

const toProperCase = (sentence) =>
  //   let letters = sentence.split(" ");
  //   letters = letters.map((items) =>
  //     items.charAt(0).toUpperCase().concat(items.slice(1))
  //   );
  //   return letters.join(" ");
  sentence
    .split(" ")
    .map((items) => items.charAt(0).toUpperCase().concat(items.slice(1)))
    .join(" ");

const truncateSentence = (sentence) =>
  sentence.length > 20 ? sentence.slice(0, 20).concat("...") : sentence;

const concatStrings = (firstWord, secondWord) =>
  firstWord.concat(" ", secondWord);

module.exports = { toProperCase, truncateSentence, concatStrings };
