// Here are some methods that can be applied to arrays

//Starting with forEach

const fruits = ["Apple", "Banana", "Cherry"];

console.log("Using forEach to iterate over an array:");

fruits.forEach((fruit)=>{
    console.log(fruit);
});

// Now let's see map

const numbers = [1, 2, 3, 4, 5];

console.log("Using map to create a new array with squared numbers:");

const doubledNumbers = numbers.map((number)=>{
    return number * 2;
})

console.log(numbers); // Prints [1, 2, 3, 4, 5]
console.log(doubledNumbers); // Prints [2, 4, 6, 8, 10]

// This method is useful when you want to transform each element in an array and create a new array with the results.
// Notes: The original array remains unchanged. Always makes a new array with the length of the original array.

// Now let's see filter

const filteredNumbers = numbers.filter((number)=>{
    return number < 3; // Returns true for numbers less than 3, so they are included in the new array
});

console.log("Using filter to create a new array with numbers less than 3:");
console.log(filteredNumbers); // Prints [1, 2]
console.log(numbers); // Prints [1, 2, 3, 4, 5]

// This method is useful when you want to create a new array with only the elements that meet certain criteria.
// Notes: The original array remains unchanged. 


// The find method

const foundNumber = numbers.find((number)=>{
    return number > 3; // Returns true for the first number greater than 3
})

console.log("Using find to get the first number greater than 3:");
console.log(foundNumber); // Prints 4
// This method is useful when you want to find the first element in an array that meets certain criteria.
// Notes: Returns the value of the first element that satisfies the provided testing function. Otherwise, undefined is returned.


// Some method

const hasEvenNumber = numbers.some((number)=>{
    return number % 2 === 0; // Checks if there is at least one even number
});

const hasNegativeNumber = numbers.some((number)=>{
    return number < 0; // Checks if there is at least one negative number
});

console.log("Using some to check if there is at least one even number:");
console.log(hasEvenNumber); // Prints true
console.log(hasNegativeNumber); // Prints false

// This method is useful when you want to check if at least one element in an array meets certain criteria.


// Every method

const allPositive = numbers.every((number)=>{
    return number > 0; // Checks if all numbers are positive
});

const allDivisibleByTwo = numbers.every((number)=>{
    return number % 2 === 0; // Checks if all numbers are divisible by 2
});

console.log("Using every to check if all numbers are positive:");
console.log(allPositive); // Prints true
console.log(allDivisibleByTwo); // Prints false

// This method is useful when you want to check if all elements in an array meet certain criteria.


// Reduce method

const sumOfNumbers = numbers.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
}, 0); // 0 is the initial value of the accumulator

console.log("Using reduce to calculate the sum of all numbers in the array:");
console.log(sumOfNumbers); // Prints 15

const moreDetailedSum = numbers.reduce((accumulator, currentValue)=>{
    console.log("Accumulator: " + accumulator + ", Current Value: " + currentValue + ", Sum: " + (accumulator + currentValue));
    return accumulator + currentValue;
}, 0);

console.log("Detailed sum calculation completed.");
console.log("The result is: " + moreDetailedSum);