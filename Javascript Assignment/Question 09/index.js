/* 09. Boolean value is either true or false.
- Write three JavaScript statement example which provide truthy value.
- Write three JavaScript statement example which provide falsy value. */


// Write three JavaScript statement example which provide truthy value.

let x = 5;
if (x) {
    console.log("x is truthy");
}
// Output: "x is truthy"

let y = "Hello";
if (y) {
    console.log("y is truthy");
}
// Output: "y is truthy"

let z = ["apple", "banana"];
if (z) {
    console.log("z is truthy");
}
// Output: "z is truthy"


// Write three JavaScript statement example which provide falsy value.

let a = 0;
 if (!a) {
     console.log("a is falsy");
 }
 // Output: "a is falsy"


 let b = "";
 if (!b) {
     console.log("b is falsy");
 }
 // Output: "b is falsy"


 let c;
 if (!c) {
     console.log("c is falsy");
 }
 // Output: "c is falsy"