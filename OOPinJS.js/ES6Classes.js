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



class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this.movements = [];
        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${this.owner}.`);
    };

    //Public interface of our object - because these resources can be accessed from outside the object
    deposit(value) {
        this.movements.push(value);
    };

    withdrawal(value) {
        this.deposit.push(-value); //since both methods share the class, 'this' keyword has the same referent = enables them to access one another
    };

    //This method should not be accessible from outside the object...
    approveLoan(value) {
        return true;
    }
    //... while this should:
    requestLoan(value) {
        if(this.approveLoan(value)) {
            this.deposit(value);
            console.log("Loan approved!")
        }
    }


};

const acc1 = new Account('Zosia', 'PLN', 1111);
acc1.deposit(250);
acc1.withdrawal(140);
acc1.requestLoan(1000);
acc1.approveLoan(1000);