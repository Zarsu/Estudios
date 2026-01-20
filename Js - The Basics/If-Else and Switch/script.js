// Here are the notes from the lesson about if-else statements in JavaScript.

const a = 20;
const b = true;

if (a > 10) {
    console.log("a is greater than 10");
}else if(b === true){
    console.log("b is true and a is not greater than 10");
}else{
    console.log("a is not greater than 10 and b is not true");
}

console.log("This line always runs");

// In this example, we use an if-else statement to check the value of 'a' and 'b'.

// Here it's a mini example of how if-else statements work:

const person = {
    name: "John",
    age: 25,
    driveEducation: true,
    driverLicense: false
}

if(person.driverLicense){
    console.log(`${person.name} already has a driver's license.`);
    return;
}

if(person.age < 16){
    console.log(`${person.name} is too young to drive.`);
    return;
}

if(!person.driveEducation){
    console.log(`${person.name} needs to complete driving education.`);
    return;
}

console.log(`${person.name} is eligible to get a driver's license.`);

// In this example, we check multiple conditions about the 'person' object using if statements.
// Each condition checks a specific requirement for getting a driver's license.
// If any condition is not met, a corresponding message is logged and the function returns early.
// If all conditions are met, a final message indicates eligibility.

// Here we also see the "guard class" pattern, where we check for invalid conditions first and exit early.

// Another way to write the same logic using if-else statements are Ternary operators:

let message = person.age >= 18 ? "Eligible to vote" : "Not eligible to vote";

// Between the '?' and ':' we have the 'true' case, and after the ':' we have the 'false' case.

console.log(message);

// This it's the same as:

if(person.age >= 18){
    message = "Eligible to vote";
}else{
    message = "Not eligible to vote";
}

console.log(message);

// In this example, we use a ternary operator to assign a value to 'message' based on the condition.

// Another example (exercise from the lesson):
// Assignament: Convert the following if-else statement into a ternary operator.

let weather;
const temperature = 80;

if(temperature > 75){
    weather = "It's hot outside!";
}else{
    weather = "It's not that hot outside..";
}

weather = temperature > 75 ? "It's hot outside!" : "It's not that hot outside..";


// Next we have switch statements:

const fruit = "grape";

switch(fruit){
    case "apple":
        console.log("You selected an apple.");
        break;
    case "banana":
        console.log("You selected a banana.");
        break;
    case "orange":
        console.log("You selected an orange.");
        break;
    case "grape":
        console.log("You selected a grape.");
        break;
    default:
        console.log("Unknown fruit selected.");
        break;
}

// It's like if-else but with steroids haha

// Here is an example without breaks.. or at least with a different use of them.

const month = 9;

switch(month){
    case 12:
    case 1:
    case 2:
        console.log("It's summer.");
        break;
    case 3:
    case 4:
    case 5:
        console.log("It's fall.");
        break;
    case 6:
    case 7:
    case 8:
        console.log("It's winter.");
        break;
    case 9:
    case 10:
    case 11:
        console.log("It's spring.");
        break;
    default:
        console.log("Unknown month.");
        break;
}