// Here are the notes from the lesson about arrays.

const myArray = ["Apple", "Banana", "Cherry"]; // This is how you declare an array in JavaScript.
const myMixedArray = [1, "Two", 3, 4, "Five"]; // Arrays can hold different types of data.
const myVeryMixedArray = [true, 42, "Hello", null, undefined, {name: "John"}, [1, 2, 3]]; // Arrays can even hold objects and other arrays.
const aNestedArray = [
    [1, 2, 3],
    ["A", "B", "C"],
    [true, false, true]
]; // This is a nested array (an array of arrays).

console.log(myArray); // Output: ["Apple", "Banana", "Cherry"]

// Note: it's recommended to use a single type of data in an array for better consistency and easier manipulation.

// You can access elements in an array using their index.
console.log(myArray[0]); // Output: "Apple" (arrays are zero-indexed) this means the first element is at index 0.
console.log(myArray[1]); // Output: "Banana"

console.log(aNestedArray[1][2]); // Output: "C" (accessing the 3rd element of the 2nd array)

const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(grid[0][0]); // Output: 1 (accessing the 1st element of the 1st array)
console.log(grid[1][2]); // Output: 6 (accessing the 3rd element of the 2nd array)
console.log(grid[2][1]); // Output: 8 (accessing the 2nd element of the 3rd array)

// You can change elements in an array by accessing them via their index.
myArray[1] = "Blueberry";
console.log(myArray); // Output: ["Apple", "Blueberry", "Cherry"]

// Also you can "push" (add) new elements to the end of an array.
myArray.push("Orange");
console.log(myArray); // Output: ["Apple", "Blueberry", "Cherry", "Orange"]