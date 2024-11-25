// Public fields / public instance fields - because it creates a property that will be attached to every INSTANCE of the class - BUT NOT THE PROTOTYPE!


class Account {

// Public fields are declared like so:
    locale = navigator.language;
    _movements = []; 

// Private fields - use the following syntax:
    #movementsPriv = [];

    // Private fields cannot be declared in a constructor - so we have to declare it outside the constructor...
    //... and let it compile as 'undefined' before a value is passed to the constructor and assigned to #pin
    #pin;
  

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;

        console.log(`Thanks for opening an account, ${this.owner}.`);
    };
// Public methods (public interface)
getMovements() {
    return this.#movementsPriv;
}

    deposit(value) {
        this._movements.push(value);
    };

    withdrawal(value) {
        this.deposit.push(-value);
    };

    requestLoan(value) {
        if(this.approveLoan(value)) {
            this.deposit(value);
            console.log("Loan approved!")
        }
    }

// Private methods - same syntax as in private fields:
#approveLoan(value) {
    return true;
};

};

const acc1 = new Account('Zosia', 'PLN', 1111);
console.log(acc1.#movementsPriv); // will log error about this variable not being accessible
console.log(acc1.getMovements); //will work as designed :)

// NOTE: Private/public fields and methods all have their static versions
// Static methods are declared on the class and can only be called on the class, not on the object:
// More info and examples: https://www.w3schools.com/js/js_class_static.asp