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
  let count = 0;
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

(() => {})();
