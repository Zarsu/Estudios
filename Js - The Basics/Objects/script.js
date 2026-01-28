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

