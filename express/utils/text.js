const slugify = require("slugify");

// example of pure function
// expected to give the same output everytime regardless of the input

const slugger = (text) => {
  return slugify(text, {
    replacement: "-", // replace spaces with replacement character, defaults to `-`
    lower: true, // convert to lower case, defaults to `false`
  });
};

module.exports = { slugger };
