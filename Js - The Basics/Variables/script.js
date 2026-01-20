// Here are the notes of Variables in JavaScript

// You can declare a variable using var, let, or const

// First we are going to use 'let' and 'const'

let age = 25;
const nickName = "John Doe";

function showInfo(){
    console.log("Nickname: " + nickName);
    console.log("Age: " + age);
}

showInfo();

// You can change the value of a variable declared with 'let'

// let age = 26; <-- This will throw an error
// You cannot redeclare a variable with 'let' in the same scope
// To change the value, just assign a new value to it like this:

age = 26;

showInfo();

// Now let's see how 'const' works

// nickName = "Jane Doe"; <-- This will throw an error
// You cannot change the value of a variable declared with 'const'
// Also, like 'let', you cannot redeclare a variable with 'const' in the same scope

// Now let's see how 'var' works

// 'var' it's the old way to declare variables in JavaScript
// It has function scope and can be redeclared
// Here's an niche example that only 'var' can handle

function varExample(){
    {
        var city = "New York"; // This variable is declared in THIS block scope.
    }
    console.log("City: " + city); // This should'nt print "New York" because 'city' is block scoped.
}

varExample(); // Output: City: New York

// This works because 'var' is function scoped, not block scoped like 'let' and 'const'.
// This can lead to unexpected behavior, so it's generally recommended to use 'let' and 'const' in modern JavaScript.

// Another example that only 'var' can handle:

console.log(x); // Output: undefined

var x = "Now I'm defined!"; 

console.log(x); // Output: Now I'm defined!

// This works because of 'hoisting', where variable declarations (but not initializations) are moved to the top of their scope.

// And you can redeclare variables with 'var':

var x = "Now I'm redeclared!";

console.log(x); // Output: Now I'm redeclared!


// However, redeclaring variables can lead to confusion and bugs, so it's best to avoid it when possible.
// In summary, prefer 'let' and 'const' for variable declarations in modern JavaScript for better scoping and to avoid redeclaration issues.
// So it's not recommended to use 'var' unless you have a specific reason to do so.