'use strict'

const lufthansa = {
    airline: "Lufthansa",
    iataCode: "LH",
    bookings: [],
    book(flightNum, name) { // NOTE: this syntax is equivalent to 'book: function() {}'
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}.`);
    this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
    }, 
};

lufthansa.book(239, 'Zos Vonho'); // works just as expected

// Creating an object that should have access to the methods of another object:
const eurowings = {
    name: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

// You would think that creating a function outside of an object should do the trick:
const bookExt = lufthansa.book;

//... but this is now a regular function that does not have access to the properties of 'lufthansa' object - so the 'this' keyword will have the value of 'undefined':
bookExt(456, 'Sarah Brightmann');

// How to get 'this' keyword to point to 'eurowings' object? By using a CALL function method (yes, functions can have methods of their own :D)
bookExt.call(eurowings, 345, 'Sarah Brightmann');
console.log(eurowings); // will correctly log an Array 'bookings', with flight: EW345 and name: Sarah Brigthmann
//The CALL method calls our function and sets its 'this' keyword to that of the object passed as its parameter (in this case, 'eurowings')

// APPLY method - works the same, except it accepts the arguments as an array:
const flightData = [583, 'George Cooper'];
bookExt.apply(lufthansa, flightData);
console.log(lufthansa); // will log the 'lufthansa' properties as an array - the same can be done using the spread operator:
bookExt.call(lufthansa, ...flightData);