//Some class properties and methods should not be accessible/mutable outside of that class - the rest can be exposed and thus become that class' public interface
//To date, JS does not have true property/method protection - just conventions to signal the protection:

class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        //protected property:
        this._movements = []; // this is just a JS convention to flag that this property SHOULD be protected - it's still technically accessible/mutable
        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${this.owner}.`);
    };
//Public interface of the class:
getMovements() {
    return this._movements; //allows to view the array without accessing it directly
}

    deposit(value) {
        this._movements.push(value);
    };

    withdrawal(value) {
        this.deposit.push(-value);
    };

    _approveLoan(value) {
        return true;
    }

    requestLoan(value) {
        if(this.approveLoan(value)) {
            this.deposit(value);
            console.log("Loan approved!")
        }
    }
};