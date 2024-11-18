class PersonClass {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2037 - this.birthYear);
    }

    introduce() {
        console.log(`Hi, my name is ${this.fullName} and I study ${this.course}.`)
    }

    get age() {
        return 2037 - this.birthYear;
    };

    set fullName(name) {
        if(name.includes('')) this._fullName = name; 
        else alert(`${name} is not a full name.`);
    }

    get fullName() {
        return this._fullName;
    }
};

//Creating a child class:
class StudentClass extends PersonClass { //the 'extends' keyword does the job of enabling parent class methods access - the child class constructor function becomes optional

    constructor(fullName, birthYear, course) {
        //this call must always happen first:
        super(fullName, birthYear); //'super' = parent class (that's why we're using the same parameters!)
        this.course = course; 
    }

    calcAge () {
        console.log(`I'm ${2037 - this.birthYear} years old.`)
    }
};

//Creating an object of the child class:
const martha = new StudentClass('Martha Jones', 1991, "Medicine");
martha.introduce();  //should work because the prototype chain works the same as with the constructor inheritance 

//Same-named child class methods will overwrite parent class methods - because they will show up first in the prototype chain lookup!
martha.calcAge(); // logs "I'm 42 years old.", not '42'