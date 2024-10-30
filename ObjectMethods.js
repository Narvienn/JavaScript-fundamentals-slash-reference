const zosObject = {
    firstName: 'Zos',
    lastName: 'Vonho',
    birthYear: 1988,
    job: 'QA Engineer',
    friends: ['Daria', 'Krys', 'As'],
    hasDriversLicence: true,
    
    calcAge: function(birthYear){ //a function EXPRESSION can be an object property - but then, they become OBJECT METHODS
        console.log(this);
        return 2037 - this.birthYear; // 'THIS' = THE WHOLE OBJECT (i.e. we're accessing a property within this object itself)
    },

    //It's better to run calculcations once and store the result in a variable - like so:
    calcAge_: function () {
        this.age = 2037 - this.birthYear; //this way, we're creating an object property 
        return this.age; //returning the variable/property is good practice, although it's not required
    },

    getSummary: function () {
        return `${this.firstName} is a ${calcAge2(2024)}-year-old ${job}, and she has ${this.hasDriversLicence ? 'a' : 'no'} driver's licence.`;
    }
};

//CALLING AN OBJECT METHOD ON THE OBJECT
//Dot notation:
console.log(zosObject.calcAge(1998));
//... or bracket notation:
console.log(zosObject['calcAge'](1998));


console.log(zosObject.getSummary);