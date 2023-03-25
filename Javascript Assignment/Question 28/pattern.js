/* 
28. Write a program to print the given patterns using the loops-
	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
	   *
	   **
	   ***
	
	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
	   ***
	   ***
	   ***

	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
	     *
	    ***
 	   *****
*/


// A. Triangle pattern
let rows = parseInt(prompt("Enter the number of rows for triangle pattern: "), 10);

for (let i = 1; i <= rows; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += '*';
    }
    console.log(pattern);
}

// B. Square pattern
rows = parseInt(prompt("Enter the number of rows for square pattern: "), 10);

for (let i = 1; i <= rows; i++) {
    let pattern = '';
    for (let j = 1; j <= rows; j++) {
        pattern += '*';
    }
    console.log(pattern);
}

// C. Pyramid pattern
rows = parseInt(prompt("Enter the number of rows for pyramid pattern: "), 10);

for (let i = 1; i <= rows; i++) {
    let pattern = '';
    for (let j = 1; j <= rows - i; j++) {
        pattern += ' ';
    }
    for (let k = 1; k <= (2 * i - 1); k++) {
        pattern += '*';
    }
    console.log(pattern);
}
