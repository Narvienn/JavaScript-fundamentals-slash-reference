class Account {

    // Public fields are declared like so:
        locale = navigator.language;
        _movements = []; 
    
    // Private fields
        #movementsPriv = [];
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
            return this; // makes the method chainable 
        };
    
        withdrawal(value) {
            this.deposit.push(-value);
            return this; // makes the method chainable 
        };
    
        requestLoan(value) {
            if(this.approveLoan(value)) {
                this.deposit(value);
                console.log("Loan approved!");
                return this; // makes the method chainable 
            }
        }
    
    // Private methods - same syntax as in private fields:
    #approveLoan(value) {
        return true;
    };
};

const acc1 = new Account('Zosia', 'PLN', 1111);

acc1.deposit(200).withdrawal(100).requestLoan(2300) // without those methods returning the object, this chaining won't work

console.log(acc1.getMovements); // logs the operations from l. 50 in a movements array