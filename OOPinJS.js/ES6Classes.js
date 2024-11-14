//Class expression - in JS, a class is a special type of FUNCTION:
const PersonClss = class {

};

//Class declaration
class PersonClass {

//constructor method:
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    };

//'from' method is a property of the constructor but not of the prototype - a STATIC METHOD

//Class methods - will be a property of the prototype, not of the objects themselves
calcAge() {
    console.log(2037 - this.birthYear);
};
};

const jessica = new PersonClass('Jessica', 1997);

//Checking object vs prototype properties:
console.log(jessica.__proto__ === PersonClass.prototype);

//Adding a method to the prototype - can be done within the class or outside of it, like below:
PersonClass.prototype.greet = function () {
    console.log(`Hey ${this.firstName}!`);
};

//NOTE:
//1. Classes are NOT HOISTED
//2. Classes are first-class citizens - can be passed to and returned from functions
//3. Classes are always executed in strict mode, regardless of 'use strict' declaration or lack thereof

