//24. Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included).

// create empty arrays
let even = [];
let odd = [];

// loop from 0 to 100
for (let i = 0; i <= 100; i++) {
  // check if the number is even
  if (i % 2 === 0) {
    even.push(i); // add to even array
  } else { // number is odd
    odd.push(i); // add to odd array
  }
}

// print the even and odd arrays
console.log("Even numbers: ", even);
console.log("Odd numbers: ", odd);
