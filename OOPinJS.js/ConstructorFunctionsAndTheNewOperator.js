'use strict';

//Constructor function - a function that will create an object
const Person = function(firstName, birthYear) {
    console.log(this); //logs 'Person {}' = an empty object of the Person prototype

   //Instance properties - available to all instances of this constructor
    this.firstName = firstName;
    this.birthYear = birthYear;

    //NOTE: DO NOT create methods inside constructor functions - instead, use prototype inheritance
    this.calcAge = function () {
        console.log(2037 - this.birthYear);
    }

};

//Calling a constructor function:
new Person('Zos', 1988);

//... and assign this to a variable, et voila:
const zosia = new Person('Zos', 1988);

//Behind the scenes:
//1. A new empty object is created - {}
//2. The function is called, this = {}
//3. The newly created empty object is linked to its prototype property (__proto__)
//4. The new object is automatically returned from the constructor function - {}


const daria = new Person('Daria', 1985);
//any object created using that prototype is an INSTANCE (not a class object but close enough)

//A simple test to see what the object is an instance of:
console.log(daria instanceof Person);  //logs 'true'

Person.prototype.species = 'Homo sapiens';
console.log(zos.species);

//Checking for an object's own properties (i.e. those declared directly in constructor):
console.log(zos.hasOwnProperty('birthYear')); //true
console.log(zos.hasOwnProperty('species')); //false