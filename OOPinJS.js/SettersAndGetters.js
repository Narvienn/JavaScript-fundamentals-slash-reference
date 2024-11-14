//Getters and setters are functions used to set or fetch a value (and not any other data operation, like all other functions)

const account = {
    
    owner: 'Zos',
    movements: [200, 300, 500, 120],

    //Declaring a getter:
    get latest() {
        return this.movements.slice(-1).pop();
    },

    //Declaring a setter - setters need to have EXACTLY ONE parameter:
    set latest(mov) {
        this.movements.push(mov);
    },

    //Adding a static method - unlike the methods attached to the .prototype property, a static method will be attached to the constructor function
    static hey() {
    console.log('Hey there!')
},

};

//Calling a getter:
console.log(account.latest); //a getter is just another property of the object and can be called as such!

//Calling a setter:
account.latest = 50; //a setter is a property and so can be reassigned
console.log(account);



//GETTERS AND SETTERS IN CLASSES
class PersonClass {
        constructor(fullName, birthYear) {
            this.fullName = fullName;
            this.birthYear = birthYear;
        }

        get age() {
            return 2037 - this.birthYear;
        };

        set fullName(name) { //however, this creates a conflict as both this setter and constructor are trying to assign value to the same property
            if(name.includes('')) this._fullName = name; //this is a convention for working around this conflict (?)
            else alert(`${name} is not a full name.`);
        }

        get fullName() {
            return this._fullName;
        }
};


