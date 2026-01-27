// Here are the notes about loops in Js

// For Loop

console.log("For Loop Example:");

for(let i = 0; i < 5; i++){
    console.log("Iteration number: " + i);
}

// 'let i = 0' initializes the loop counter variable 'i' to 0. You can think of it as the starting point of the loop.
// 'i < 5' is the condition that is checked before each iteration of the loop. As long as this condition is true, the loop 
// will continue to execute.
// 'i++' increments the value of 'i' by 1 after each iteration of the loop. You can think this as the 'last step' of the loop.


const myArray = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

for(let j = 0; j < myArray.length; j++){
    console.log(j + ": " + myArray[j]);
}

// for loop have special keywords to control the flow of the loop: 'continue' and 'break'
console.log("For with break (2):");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let j = 0; j < numbers.length; j++){
    if(numbers[j] === 2){
        break; // 'break' exits the loop entirely WITHOUT executing any further iterations.
    }
    console.log(j + ": " + numbers[j]);
}

console.log("Now with continue (6):");

for(let j = 0; j < numbers.length; j++){
    if(numbers[j] === 6){
        continue; // 'continue' skips the current iteration and moves to the next one WITHOUT exiting the loop.
    }
    console.log(j + ": " + numbers[j]);
}

// Whit arrays you can use for..of to iterate over the elements directly

console.log("Using for..of:");

for(const fruit of myArray){
    console.log(fruit);
}

// Also you can use for..in to iterate over the indexes of an array or the properties of an object

console.log("Using for..in with an object:");

const myObject = {
    type: "cofee",
    sugar: "yes",
    milk: "no"
};

for(const key in myObject){
    console.log(key + ": " + myObject[key]);
}

// This is a basic overview of for loops in JavaScript! In Objects there are more advanced methods to do this.
// But it's useful for debugging and simple tasks.

console.log("Now a basic excersise:");

// Task: Create an array with the first 10 even numbers using for loop, then with another loop print the sum of these numbers.

const evenNumbers = [];

for(let i = 0; evenNumbers.length < 10; i += 2){
    if(i % 2 === 0){
        evenNumbers.push(i);
    }
}

let sum = 0;

for(const num of evenNumbers){
    sum += num;
}

console.log("The first 10 even numbers are: ");
for(const num of evenNumbers){
    console.log(num);
}
console.log("The sum of these numbers is: " + sum);

// While loop

console.log("While Loop Example:");

let count = 0;
while(count < 5){
    console.log("Count is: " + count);
    count++;
}

// 'while(count < 5)' checks the condition before each iteration. If the condition is true, the loop body executes.
// It's recommended to ensure that the condition will eventually become false to avoid infinite loops.
// You can also use 'break' and 'continue' in while loops
