const Person = function(firstName, birthYear) {
    console.log(this); 
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};
Person.prototype.species = 'Homo sapiens';

const zos = new Person("Zosia", 1988); 

//Prototypal inheritance in build-in objects:
console.log(zos.__proto__); //logs 'calcAge' and 'species'
console.log(zos.__proto__.__proto__); //a prototype of the Person.prototype, logs build-in properties of Object, e.g. isPrototypeOf, hasOwnProperty, valueOf etc.
//because of the prototype chain, we can call e.g. hasOwnProperty directly on the object - it will do a vertical lookup up the prototype chain to access that property on Object

console.dir(Person.prototype.constructor); //'direction', a HTML element 

//Array prototype:
const arr = [1,2,3,5,2,3,4];
console.log(arr.__proto__); //logs all array methods
console.log(arr.__proto__ === Array.prototype);  //true

//EXTENDING PROTOTYPES (yes, you can do that :D but it's generally not advised)
Array.prototype.unique = function () {
   return  [...new Set(this)]; //'create a new array with only unique values'
}
console.log(arr.unique);
