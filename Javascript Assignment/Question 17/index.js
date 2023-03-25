// 17. Write a program which tells the number of days in a month.

// get user input for month
const month = prompt("Enter a month (in number): ");

// declare a variable to store number of days
let days;

// check the month and assign the number of days
if (month === "2") {
  days = 28;
} else if (month === "4" || month === "6" || month === "9" || month === "11") {
  days = 30;
} else {
  days = 31;
}

// print the number of days
console.log(`Number of days in month ${month} is ${days}`);