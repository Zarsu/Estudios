// Here are the notes from the lesson about classes in JavaScript.

// A class in JavaScript is a blueprint for creating objects with predefined properties and methods.
// Extra Notes: See 'Objects' lesson for more details about how this works in JavaScript.

class Person {
    constructor(name, age) { // This is like the function that initializes the object with 'new'
        this.name = name;
        this.age = age;
    }

    sayHi(){
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`); // And this is like the Person.prototype.sayHi that we see in the object lesson
    }
}

const person = new Person("Alice", 30);
person.sayHi(); // Outputs: Hi, my name is Alice and I am 30 years old.

// In this example, we define a class 'Person' with a constructor that initializes the 'name' and 'age' properties.
// This is very similar to how we create objects using constructor functions, but the syntax is cleaner and more intuitive.

// We can also add methods to the class, like 'sayHi', which can be called on instances of the class.
// Also we need to use the 'new' keyword to create an instance of the class.