// Sometimes, you need a function that gets called and executed immediately, and then is not needed anymore - IIFE is a solution to this:

const runOnce = function() {
    console.log("This will run exactly once.");
};
// Defined like so, runOnce can be called any number of times, which is not what we want. Instead, we can do this:
(function() {                                 // Wrapping a nameless function in parentheses tells JS compiler that this is an IIFE (which does not need to be named)
    console.log("This will run exactly once.");
}) (); // This is how you call/execute an IIFE

// Doing the same with an arrow function:
(() => console.log('This arrow will never fly again.')) ();