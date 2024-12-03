
const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting}, ${name}!`);
    };
};

const greeterHi = greet("Hi"); //'greeterHi' becomes a function that stores the 'greet' function
greeterHi("Zos");

greet("Hello")("Zos"); //yes, this is legitimate JS syntax... enough said -.-

//Rewriting the 'greet' function as an arrow function (that returns another arrow function :D):
const greetArrow = greeting => name => console.log(`${greeting}, ${name}!`);

greetArrow("Hello")("Dolly");