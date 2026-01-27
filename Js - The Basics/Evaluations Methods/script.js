// There are three logical ways, using '&&', '||' and '??' operators.
// We can use these to evaluate expressions and return values based on conditions.

console.log("Logical AND (&&) Example:");

let a = 5;
let b = 10;

const expensiveFunction = ()=>{
    console.log("Expensive function executed!");
    return true;
}

console.log(true && 'hello'); // Returns 'hello' because both sides are true
console.log(false && 'hello'); // Returns false because the first side is false
console.log(a > b && expensiveFunction()); // Since a > b is FALSE, expensiveFunction() is NOT called.

// This means that with '&&', if the first condition is FALSE, the second condition is NOT evaluated. 
// Because if the first is FALSE, the whole expression is always FALSE.
// This happens too with '||' operator but in the opposite way.

console.log("Logical OR (||) Example:");

console.log(false || 'world'); // Returns 'world' because the first side is false
console.log(true || 'world'); // Returns true because the first side is true
console.log(a < b || expensiveFunction()); // Since a < b is TRUE, expensiveFunction() is NOT called.

// With '||', if the first condition is TRUE, the second condition is NOT evaluated.
// Because if the first is TRUE, the whole expression is always TRUE.


console.log("Nullish Coalescing (??) Example:");

let userInput = null;
const defaultValue = "Default Value";

const result = userInput ?? defaultValue;
console.log(result); // Outputs: "Default Value"

// The '??' operator returns the right-hand operand when the left-hand operand is null or undefined.
// Otherwise, it returns the left-hand operand.
// We can use this to make our code cleaner when dealing with default values or optional parameters.

// Instead of doing: 'userColor = user && user.profile && user.profile.settings && user.profile.settings.color'
// We can do: 'usercolor = user?.profile?.settings?.color'

// This also works with methods and arrays: user?.getProfile?.()
// Here we check if getProfile exists before calling it, avoiding errors.

console.log('Nullish chaining example:');

userColor = userInput?.profile?.settings?.color ?? defaultValue;

console.log("User color is: " + userColor); // Outputs: "User color is: Default Value"

// In that example we use optional chaining to safely access nested properties, and using Default values at the same time
