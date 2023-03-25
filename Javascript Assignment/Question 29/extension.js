//29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

let fileName = prompt("Enter the file name: ");
let fileNameArray = fileName.split(".");
let extension = fileNameArray[fileNameArray.length - 1];
console.log(`The file extension is: ${extension}`);