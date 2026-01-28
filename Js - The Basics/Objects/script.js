// Here are the notes from the lesson about objects in JavaScript.

const person = {
    name: "Alice",
    age: 30,
    favoriteNumber: 4,
    greet(){
        console.log("Hello, my name is " + this.name); // 'this' refers to the current object
    },
    address: { // You can also have nested objects
        city: "Wonderland",
        street: "123 Fantasy Rd"
    },
    socialBubble: ["Bob", "Charlie", "David"],
    favoritePerson: {
        // name: this.socialBubble[0], <- This won't work because 'this' cannot be used here, only in methods
        name: "Bob",
        relation: "boyfriend"
    }
};

// Note: 'this' keyword refers to the current object context, and is commonly used in methods to access other properties of the same object.
// You cannot use 'this' to set properties outside of methods (functions).

// Accessing properties

console.log(person.name); // "Alice"
person.greet(); // "Hello, my name is Alice"
console.log(person.address.city); // "Wonderland"

// Modifying properties

person.age = 31; // Update age
console.log(person.age); // 31

// Exercise: Create a book object.

const book = {
    title: "JavaScript Basics",
    author: {
        name: "John Doe",
        age: 45,
        favoriteBook: "Eloquent JavaScript"
    },
    pages: 250,
    yearPublished: 2020,
    publish(){
        console.log("Publishing " + this.title + " by " + this.author.name);
    },
}


// We can use a Js property to create objets.

const car = Object.create({});
car.make = "Toyota";
car.model = "Corolla";
car.year = 2021;

// With this we can create a function that generates objects.
// This is called a factory function.

function brandCreator(brandName, country){
    const newBrand = Object.create({});
    newBrand.name = brandName;
    newBrand.origin = country;
    newBrand.describe = function(){
        console.log(this.name + " is from " + this.origin);
    }
    return newBrand;
}

const ford = brandCreator("Ford", "USA");
const cocaCola = brandCreator("Coca-Cola", "USA");
ford.describe(); // "Ford is from USA"


// But what happens if we have a LOT of brands?
// The 'describe' method is being created for each brand, which is inefficient.
// And... what if we want to change the 'describe' method for all brands? Or
// add a new method to all brands?
// We would have to change each object individually.
// To solve this, we can use prototypes.

function userCreator(username, email){
    const newUser = Object.create(userMethods);
    newUser.username = username;
    newUser.email = email;
    return newUser;
}

const userMethods = {
    login(){
        console.log(this.username + " has logged in.");
    },
    logout(){
        console.log(this.username + " has logged out.");
    }
}

const user1 = userCreator("user1", "example@gmail.com");
const user2 = userCreator("user2", "example2@gmail.com");
user1.login(); // "user1 has logged in."
user2.logout(); // "user2 has logged out."

// Now, if we want to add a new method to all users, we can just add it to 'userMethods'.
// This works because 'userMethods' is the prototype of all user objects created with 'userCreator'.
// This means that if we call a method on a user object, JavaScript will first look for it on the object itself.
// If it doesn't find it there, it will look for it on the prototype (userMethods).
// And like in the prototype we use the keyword 'this', we can access the properties of the object that called the method.


user1.hasOwnProperty('username'); // true

// What? The 'hasOwnProperty' method is not defined in 'userCreator' neither in 'userMethods'.
// How is this possible?
// We say if we don't find a property or method in the object itself, we look for it in the prototype.
// So.. this means that 'userMethods' has a prototype too?
// Yes! In JavaScript, almost everything is an object, and all objects have a prototype.
// The prototype of 'userMethods' is 'Object.prototype', which is the prototype of all objects in JavaScript.
// And 'Object.prototype' has a method called 'hasOwnProperty'.
// So when we call 'user1.hasOwnProperty', JavaScript looks for it in 'user1', then in 'userMethods', and finally in 'Object.prototype' where it finds it.
// This is called the prototype chain.
// And to clarify, 'Object.prototype' is the top of the prototype chain. The '__proto__' property of 'Object.prototype' is null, indicating the end (or top) of the chain.
// Note: All objects in Js have the '__proto__' property that points to their prototype.


const playerCreator = (playerName) => {
    const newPlayer = Object.create(playerMethods);
    newPlayer.name = playerName;
    newPlayer.score = 0;
    return newPlayer;
}

/*
const playerMethods = {
    increaseScore(){
        const add1 = function(){
            this.score++;
        }
        add1();
    }
}
*/

// What happens if we use 'this' inside a nested function?
// The 'this' keyword inside 'add1' does not refer to the player object, but to the global object (or undefined in strict mode).
// This means that we are trying to increment 'score' property of the global object (usually window if we are in web browser), 
// which is not what we want. But why?
// Because in JavaScript, the value of 'this' inside a function depends on how the function is called.
// In this case, 'add1' is called as a regular function, so 'this' refers to the global object.
// To fix this, we can use an arrow function, because arrow functions do not have their own 'this'.
// Or we can use 'bind' / 'call' / 'apply' to explicitly set the value of 'this'.

const playerMethods = {
    increaseScore(){
        const add1 = () => {
            this.score++;
        }
        /* 
        add1.call(this); // Using 'call' to set 'this' to the player object
        OR
        add1.bind(this)(); // Using 'bind' to set 'this' to the player object
        OR
        add1.apply(this); // Using 'apply' to set 'this' to the player object
        */
        add1(); // <- This only works properly because 'add1' is an arrow function.
    }
}

const player1 = playerCreator("Player1");
player1.increaseScore();

// The 'new' keyword

function playerCreatorV2(playerName){
    this.name = playerName;
    this.score = 0;
}

playerCreatorV2.prototype.increaseScore = function(){
    this.score++;
}

playerCreatorV2.prototype.login = function(){
    console.log(this.name + " has logged in.");
}

const player2 = new playerCreatorV2("Player2");
player2.increaseScore();
player2.login();

// This is... a lot different from the previous way of creating objects.
// When we use the 'new' keyword, JavaScript does a few things behind the scenes:
// First we need to know that functions in JavaScript it's not only a block of code, they are also objects.
// So, when we use the 'new' keyword with a function, JavaScript does the following:
// 1. It creates a new empty object. <- Similar to 'Object.create({})'
// 2. It sets the prototype of the new object to the 'prototype' property of the function.
// 3. It binds 'this' to the new object inside the function.
// 4. It executes the function with the provided arguments.
// 5. It returns the new object (unless the function explicitly returns another object).
// This new object will be our 'player2' object. Wich has 'playerCreatorV2.prototype' as its '__proto__' property.


// Now.. this is how it works under the hood, but it's important to understand that using 'new' is just a syntactic sugar for creating objects using prototypes.
// The 'standard' way of creating objects is with the keyword 'Class', which is also syntactic sugar for the prototype-based approach.
// To see more about classes, check the 'Classes' lesson.