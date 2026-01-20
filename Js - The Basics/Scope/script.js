// Here are the notes from the lesson about scope in JavaScript.

function scope(){
    let result = 'dentroDelScope';
    console.log(result);
}

let result = 'fueraDelScope';
scope();
console.log(result);

// This code demonstrates the concept of scope in JavaScript.

// When using '{}', a new scope is created. Variables declared with 'let' or 'const' inside that scope are not accessible from outside.
// In this example, 'result' inside the function 'scope' is different from the 'result' outside of it.

let outsideVariable = 'I am outside!';

const outerInsideInnerScope = () => {
    let insideVariable = 'I am inside!';
    console.log("I can use: " + outsideVariable + " and " + insideVariable); // This will work
    (()=>{
        let deeperVariable = 'I am deeper inside!';
        console.log("I can use: " + outsideVariable + ", " + insideVariable + " and " + deeperVariable); // This will work
    })(); // This is a IFFE (Immediately Invoked Function Expression)
    //console.log("But I cannot use: " + deeperVariable); <- This will cause an error
}

outerInsideInnerScope();

// This example shows nested scopes. Each inner scope can access variables from its outer scopes, but not vice versa.
// You can also do this without a function, just using '{}' to create a block scope.

{
    let insideVariable = "Inside it's where I'am";
    console.log("I can use: " + outsideVariable + " and " + insideVariable); // This will work
    {
        let deeperVariable = 'I am deeper inside!'; 
        console.log("I can use: " + outsideVariable + ", " + insideVariable + " and " + deeperVariable); // This will work
    }
    //console.log("But I cannot use: " + deeperVariable); <- This will cause an error

}

//'insideVariable' and 'deeperVariable' in this example are a whole new variables because they are declared in a different scope.
// But 'outsideVariable' it's the SAME as the previous example, because it's declared in the global scope (the whole script).