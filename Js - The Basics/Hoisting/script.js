// Here are the notes from the lesson about hoisting in JavaScript.

console.log(hoistedParse(6, 9));

function hoistedParse(a, b){return String(a) + String(b);}

// This code demonstrates hoisting in JavaScript.

// In JavaScript, function declarations are hoisted to the top of their containing scope.
// This means you can call a function before its declaration in the code, as shown above with 'hoistedParse'.

// console.log(hoistedVar); <- this will cause an error.

let hoistedVar = "I'm hoisted!";

// However, variables declared with 'let' and 'const' are not hoisted.

// console.log(hoistedArrowParse(6,9)); <- this will cause an error.

const hoistedArrowParse = (a, b) => {return String(a) + String(b);};

// Either way, arrow functions it's not hoisted because they are expressions assigned to variables.

console.log(hoistedVar2); // This will not throw an error, but will print 'undefined'.

var hoistedVar2 = "I'm also hoisted!";

console.log(hoistedVar2); // This will print "I'm also hoisted!"

// Variables declared with 'var' are hoisted, but only their declarations, not their initializations.