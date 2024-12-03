// BIND function method allows a manual setting of 'this' keyword
// By binding 'bookEW' to the 'eurowings' object, the bookEW 'this' is equal to that of 'eurowings':
const bookEW = book.bind(eurowings);
bookEW(678, "Steven Williams");

// Just like in a CALL method, we can pass more than the this-referent object as parameter in a BIND method:
const bookEW23 = book.bind(eurowings, 23); // it's called PARTIAL APPLICATION - because parts of this function are already applied and don't need specifying
bookEW23("Anna Smith"); 

// Using BIND method with event listeners:
lufthansa.planes = 300;
lufthansa.buyPlanes = function () {
    this.planes++;
    console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlanes); // will log 'NaN' because for addEventListener, 'this' keyword points to the button element (defined in '.buy'), not to 'this' of buyPlanes function

// Fixing this with BIND method:
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlanes.bind.lufthansa);

// Partial application:
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.15,200));

const addVAT = addTax.bind(null, 0.23); // 'null' is a placeholder for 'this', which is 1. not needed here and 2. not supported in an arrow function anyway :D
// this is equal to: addVat = value + value * 0.23;

// Another way of achieving the same effect would be creating a function returning another function, like so:
const addTaxRate = function(rate) {
    return function(value){
        return value + value * rate;
    };
};
const addVAT2 = addTaxRate(0.23);