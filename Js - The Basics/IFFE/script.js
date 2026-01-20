// Here are the notes from the lesson about IFFE (Immediately Invoked Function Expression) in JavaScript.

(function(){
    let message = "Hello I'am an IFFE function!";
    console.log(message);
})();

// An IFFE is a function that is defined and executed immediately.
// It is often used to create a new scope and avoid polluting the global namespace.
// You can see an example in Scope/script.js where an IFFE is used to create a deeper scope inside another function.