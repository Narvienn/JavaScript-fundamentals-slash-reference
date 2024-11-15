//Prototypes are properties of every function in JS - any instance of a constructor function will inherit from that constructor's prototype

const Person = function(firstName, birthYear) {
    console.log(this); //logs 'Person {}' = an empty object of the Person prototype

   //Instance properties - available to all instances of this constructor
    this.firstName = firstName;
    this.birthYear = birthYear;
};

const zos = new Person("Zosia", 1988); //as an instance of the Person constructor, it has access to the prototype function below

//this is how you add methods to your constructor pseudo-classes - because declaring a method within constructor would add that method to every instance/object of that constructor, whether it's relevant or not
//declaring prototype function outside of the constructor creates a single copy of it:
Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

//so this will work:
zos.calcAge();


//Checking what prototypes are declared for our constructor instance:
console.log(zos.__proto__);
console.log(zos.__proto__ === Person.prototype); //will also log 'true'

//Checking if a given prototype is a prototype of our selected object:
console.log(Person.prototype.isPrototypeOf(zos)); 

//In actuality, a 'prototype' is actually more of 'prototypeOfLinkedObjects'

