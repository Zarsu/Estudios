// Practice Exercise

// Try creating a function that:

// 1. Takes three parameters: a first name, a last name, and a callback function
// 2. Creates a fullName variable by combining the first and last names
// 3. Passes the fullName to the callback function (which prepends 'Hello, ' to it)
// 4. Prints out the return of the callback function

function greet(fullName){
    return "Hello " + fullName;
}

function doName(firstName, lastName, callback){
    const fullName = firstName + " " + lastName;
    console.log(callback(fullName));
}

doName("Zar", "LeFrance", greet);

// Testing myself to see if I understood the concept of callbacks correctly!

function farewell(fullName){
    return "Goodbye " + fullName;
}

function compliment(fullName){
    return "You look great today, " + fullName + "!";
}

function offend(fullName){
    return "You are not very nice today, " + fullName + ".";
}

doName("Zar", "LeFrance", farewell);
doName("Zar", "LeFrance", compliment);
doName("Zar", "LeFrance", offend);
