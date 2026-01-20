// Notes from what I learned about arrow functions.

function add(a,b) {
    return a + b;
}

const addArrow = (a, b) => {
    return a + b;
}

// These two functions are equivalent.

const addArrowShort = (a, b) => a + b;

// This is a more concise version of the arrow function when it has a single expression.
// The expression's value is returned automatically, you don't need to use the return keyword.

const oneParameter = x => x * 2;
const oneParameterWithParens = (x) => x * 2;

// When there is only one parameter, parentheses can be omitted.

const noParameter = () => 42;

// When there are no parameters, parentheses are required ALWAYS.

