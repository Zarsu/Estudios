// Here are the notes from the lesson about coercion in JavaScript.

// Converting String to Number.

const a = "1"; // This is a string.
console.log(typeof a); // Output: string

const numberA = parseInt(a);
console.log(typeof numberA); // Output: number

const decimal = "23.46";

console.log(parseInt(decimal)); // Output: 23
console.log(parseFloat(decimal)); // Output: 23.46

// This is a bit confusing, because JS doesn't have "int" or "float" types.
// So.. simply you can use Number() to convert a string to a number.

const b = "45.67";
const c = "3";

console.log(Number(b)); // Output: 45.67
console.log(Number(c)); // Output: 3

// Converting Number to String.

const num = 123;
console.log(typeof num); // Output: number

const strNum = num.toString();
console.log(typeof strNum); // Output: string

// And like before, you can also use String() to convert a number (or whatever) to a string.

const num2 = 456;
const strNum2 = String(num2);

console.log(typeof strNum2); // Output: string

// Implicit Coercion

// JavaScript can also convert types automatically when needed.

const myNum = 10; // This is a number. JS automatically knows that.
const myNumStr = "5"; // This is a string. JS automatically knows that.

console.log(myNum + myNumStr); // Output: "105"

// Here, JS automatically converts 'myNum' to a string and concatenates it with 'myNumStr'.
// This happens because the '+' operator is used for both addition and string concatenation.
// To avoid this, you can explicitly convert 'myNumStr' to a number:

console.log(myNum + Number(myNumStr)); // Output: 15

// However, with other arithmetic operators, JS converts strings to numbers.

console.log(myNum - myNumStr); // Output: 5
console.log(myNum * myNumStr); // Output: 50
console.log(myNum / myNumStr); // Output: 2

// You can convert values to numbers using Number(), parseInt(), or parseFloat() functions.
// But.. what happens when the value cannot be converted to a number?

const invalidNumber = "Hello, World!";
const convertedNumber = Number(invalidNumber);
console.log(convertedNumber); // Output: NaN

// NaN is a special value in JavaScript that indicates an invalid number.
// But it's a number

console.log(typeof convertedNumber); // Output: number


// And a funny thing about NaN is that it's not equal to anything, including itself.

console.log(NaN == NaN); // Output: false
console.log("Something" == NaN); // Output: false
console.log(convertedNumber == NaN); // Output: false

// So, how can you check if a value is NaN?

console.log(isNaN(convertedNumber)); // Output: true

// The isNaN() function checks if a value is NaN.
// Note: that isNaN() will also return true for non-numeric values that cannot be converted to numbers.

// Comparisons also involve coercion.

console.log("5" == 3); // Output: true
console.log("5" == 5); // Output: true

// Introduction to Truthy and Falsy values
// In JavaScript, values can be classified as "truthy" or "falsy" based on how they evaluate in a boolean context.

console.log(1 == true); // Output: true (1 is truthy)
console.log(0 == false); // Output: true (0 is falsy)
console.log("" == false); // Output: true (empty string is falsy)

// So.. how can you avoid this problem?
// You can use the strict equality operator (===) which does not perform type coercion.

console.log("5" === 5); // Output: false (diferent types, no coercion)
console.log(1 === true); // Output: false (diferent types, no coercion)
console.log(1 === 1); // Output: true (same type and value)