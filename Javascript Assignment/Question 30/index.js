// 30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

let num1 = prompt("Enter the first number: ");
let num2 = prompt("Enter the second number: ");
let operator = prompt("Enter the operator (+, -, *, /): ");

if (operator === "+") {
    console.log(`The result is: ${num1 + num2}`);
} else if (operator === "-") {
    console.log(`The result is: ${num1 - num2}`);
} else if (operator === "*") {
    console.log(`The result is: ${num1 * num2}`);
} else if (operator === "/") {
    console.log(`The result is: ${num1 / num2}`);
} else {
    console.log("Invalid operator");
}