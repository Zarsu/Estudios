// Here are the notes from the lesson on Closures in JavaScript:

// A closure is a function that has access to its own scope, 
// the outer function's scope, and the global scope, even after 
// the outer function has returned.

function discount(percentage){
    return function(price){
        return price - (price * percentage / 100);
    }
}

const calculateDiscount = discount(10);

console.log(calculateDiscount(500)); // this "500" is the price of the product, for example.

// In this example, the inner function returned by the discount function

function createCounter() {
    let count = 0; // private variable
    return function() {
        count += 1;
        return count;
    }
}

const counter = createCounter();

for(let i = 0; i < 5; i++) {
    console.log(counter()); // Outputs: 1, 2, 3, 4, 5
}

// In this example the inner function has access to the count variable, which is not "forgotten" even after the createCounter function has finished executing.
// This allows us to maintain state in a way that is not accessible from the outside, effectively creating private variables.

let globalVar = "I am a global variable";

function outerFunction() {
    let outerVar = "I am an outer variable";
    return function innerFunction() {
        let innerVar = "I am an inner variable";
        console.log(globalVar);
        console.log(outerVar);
        console.log(innerVar);
    }
}

const myInnerFunction = outerFunction();

myInnerFunction();


// This will log: "I am a global variable", "I am an outer variable" and "I am an inner variable"
// demonstrating that the inner function has access to variables from all three scopes: global, outer, and its own.

// Here's a quick exercise to test understanding of closures:

function createGreeter(greeting) {
    return function(name) {
        return greeting + ", " + name + "!";
    }
}


const greet = createGreeter("Hello");

console.log(greet("Alice")); // This should log: "Hello, Alice!"


