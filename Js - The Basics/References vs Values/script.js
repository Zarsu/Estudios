// Here are the notes from the lesson about reference vs values in JavaScript.

// In JavaScript, primitive data types (like numbers, strings, booleans, null, undefined, and symbols) are stored by value.

let a = 10;
let b = a;

b = b + 1;

console.log(a); // Outputs: 10
console.log(b); // Outputs: 11

// In this example, 'a' holds the value 10. When we assign 'a' to 'b', 'b' gets a copy of the value. 
// Changing 'b' does not affect 'a'.
// This happens with all primitive data types.

// On the other hand, objects (including arrays and functions) are stored by reference.

let c = [1,2,3];
let d = c;

d.push(4);

console.log(c); // Outputs: [1, 2, 3, 4]
console.log(d); // Outputs: [1, 2, 3, 4]

// In this example, 'c' is an array. When we assign 'c' to 'd', 'd' holds a reference to the same array in memory.
// Therefore, modifying 'd' also modifies 'c', since they both point to the same array.

let e = [1,2];
let f = [1,2];

console.log(e == f);  // Outputs: false
console.log(e === f); // Outputs: false

// Here the operators '==' and '===' check for reference equality for objects. 
// In this case the arrays are equal in content but not the same reference in memory, so both comparisons return false.


