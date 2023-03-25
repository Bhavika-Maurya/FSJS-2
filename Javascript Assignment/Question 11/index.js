/* 11. Use the Date object to do the following activities
    - What is the year today?
    - What is the month today as a number?
    - What is the date today?
    - What is the day today as a number?
    - What is the hours now?
    - What is the minutes now?
    - Find out the numbers of seconds elapsed from January 1, 1970 to now. */

// What is the year today?

let today = new Date();
let year = today.getFullYear();
console.log("Year: " + year); // Output: "Year: 2023" 

//What is the month today as a number?

let month = today.getMonth();
console.log("Month: " + (month + 1));

// What is the date today?
let date = today.getDate();
console.log("Date: " + date);

//What is the day today as a number?
let day = today.getDay();
console.log("Day: " + day);

// What is the hours now?
let hours = today.getHours();
console.log("Hours: " + hours); 

//What is the minutes now?
let minutes = today.getMinutes();
console.log("Minutes: " + minutes);

//Find out the numbers of seconds elapsed from January 1, 1970 to now.
let seconds = today.getTime() / 1000;
console.log("Seconds elapsed from January 1, 1970 to now: " + seconds);