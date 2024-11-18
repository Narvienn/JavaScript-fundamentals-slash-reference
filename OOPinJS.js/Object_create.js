//Object.create is used to manually set a prototype of an object to any other object
//It does not support/use a constructor function or the 'new' keyword

//Example:
const PersonPrototype = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },
    
    //This is NOT A CONSTRUCTOR!
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

//Calling Object.create:
const daria = Object.create(PersonPrototype);
console.log(daria); //logs '{}', an empty object with 'calcAge' in its __proto__ property

daria.name = 'Daria';
daria.birthYear = '1985';
daria.calcAge(); //correctly logs '52'

console.log(daria.__proto__ === PersonPrototype); // true

const krysia = Object.create(PersonPrototype);
krysia.init('Krysia', 1988); // this works because 'krysia' is an object of PersonPrototype, not because 'init' is a constructor function of PersonPrototype
krysia.calcAge();