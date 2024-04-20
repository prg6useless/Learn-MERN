//statement

// IF ELSE
// SWITCH
// WAP that uses age to print the status of the person

// const age = Number(prompt("Enter age"));

// if (age >= 18) {
//   console.log(`you are above 18 and you are ${age} years old`);
// } else console.log(`you are not above 18 and you are ${age} years old`);

// WAP that checks your username and password.
//If username is your name and password is your name
//print welcome admin
//else
//if username is equal to password but for another person
//print welcome user

const adminName = "Saral";
const adminpassword = "Saral123";

let username = prompt("enter username");
let password = prompt("enter password");

if (username === adminName && password === adminName) {
  console.log("welcome admin");
} else {
  if (username === password) {
    console.log("welcome user");
  }
}

// WAP that ask user the time
// if the time is in between 4 and 5:30 pm
// alert class is in session
// else
// alert class is completed for today

const userTime = Number(prompt("Enter time between 1 to 6"));
const classCondition = userTime >= 4 && userTime <= 5.5;

// if (classCondition) {
//   alert("class is in session");
// } else {
//   alert("class is completed for today");
// }

// switch case
switch (true) {
  case userTime < 4:
    alert("class has not started yet");
    break;
  case userTime >= 4 && userTime <= 5.15:
    alert("class is in session");
    break;
  case userTime > 5.5 && userTime <= 6:
    alert("class has completed for today");
    break;
  default:
    alert("Ivalid Time");
}

// score grading tool
const userMarks = Number(prompt("Enter your marks"));
switch (true) {
  case userMarks >= 90:
    alert("Your grade is A");
    break;
  case userMarks >= 80:
    alert("Your grade is B");
    break;
  case userMarks >= 70:
    alert("Your grade is C");
    break;
  case userMarks >= 60:
    alert("Your grade is D");
    break;
  default:
    alert("Your grade is F");
}

//Ternary Operator

// condition ? True : False

const uN = prompt("Enter name");
uN === "Saral" ? alert("welcome admin") : alert("welcome user");

const gender = "o";
gender === "m"
  ? alert("male")
  : gender === "f"
  ? alert("female")
  : alert("others");
