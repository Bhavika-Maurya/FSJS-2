// 18. Write a program which tells the number of days in a month, now consider leap year.

let month = prompt("Enter the month:");
let year = parseInt(prompt("Enter the year:"),10);

if(month == "February" && (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0))) {
    console.log("The month of "+month+" has 29 days in " +year);
} else if(month == "February"){
    console.log("The month of "+month+" has 28 days in " +year);
}else if(month === "January" || month === "March" || month === "May" || month === "July" || month === "August" || month === "October" || month === "December") {
    console.log("The month of "+month+" has 31 days in " +year);
}else {
    console.log("The month of "+month+" has 30 days in " +year);
}