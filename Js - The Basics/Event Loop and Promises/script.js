// This notes are about Promises in JavaScript

// Introduction to Promises
// A Promise is an objet that represents an asynchronous operation, in the first steps 
// I learned that using 'fetch' you create a promise. In this 'method' you communicate
// with the web browser AND the javascript engine.
// The first thing that happens is that the 'fetch' method returns a promise (like an object) 
// with 'value' and 'on fulfilled' properties. 

// Something like this:
/* 

const myPromise = {
    value: undefined,
    onFulfilled: []
}

*/

const display = (data) => {
    console.log(data);
}

// And, at the same time, you tell the browser to go and get the resource you requested. 
// For example: 'https://jsonplaceholder.typicode.com/posts'

const myPromise = fetch('https://jsonplaceholder.typicode.com/posts');
// All that happend here.
myPromise.then(display);

// The 'then' method is used to register a callback function (display) that will be called
// So now the 'object' looks like this:
/*

const myPromise = {
    value: undefined,
    onFulfilled: [display]
}

*/
// With the 'then' method you are telling the promise what to do when it is fulfilled.
// When the resource is retrieved, the promise is fulfilled and the 'value' property is updated
// If you can see, you don't have to specify the argument of the 'display' function, because of how the promise works.

// When the promise is fulfilled, the 'display' function is called with the value of the promise as its argument.
// This 'operation' is handled by the JavaScript engine, he puts the 'display' function in the 'event queue'. 
// Specifically, it goes to the 'microtask queue', which has a higher priority than the 'task queue'.
// Task queue? Yes, the 'task queue' is where things like 'setTimeout' callbacks go.

// 'setTimeout' is another function that create a communication between the browser and the JavaScript engine.
// But instead of fetching a resource, it sets a timer. To order the execution of a function after a certain amount of time.
// This has a lower priority than promises, so it goes to the 'task queue'.

setTimeout(() => {
    console.log("¡I'm the setTimeout!");
}, 0);

console.log('Me First');

// So the order of execution will be:
// 1. 'Me First' (synchronous code)
// 2. The promise is fulfilled, and 'display' is called (microtask queue)
// 3. The 'setTimeout' callback is executed (task queue)

// This is how the event loop works in JavaScript, managing the execution of synchronous and asynchronous code.


