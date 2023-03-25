// 23. Write a program to check that the number given by the user is a prime number or not.

let number = parseInt(prompt("Enter a number:"),10);

// Function to check if a number is prime or not
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

if (isPrime(number)) {
    console.log(`${number} is a prime number`);
} else {
    console.log(`${number} is not a prime number`);
}