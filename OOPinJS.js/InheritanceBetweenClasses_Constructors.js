
//Parent class
const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
};

//Child class:
const Student = function(firstName, birthYear, course) {
   // this.firstName = firstName; // 1. this violates the DRY principle
  //  this.birthYear = birthYear; // 2. it opens the code to bugs when/if the implementation of Person changes
  // However, this won't work either: 
    // Person(firstName, birthYear); //because located here, this is a regular function call, with no access to the constructor
//This is how you do it properly:
    Person.call(this, firstName, birthYear);
    this.course = course;
};

//Object.create (manually) links the prototype of Student to the prototype of Person --> enables the inheritance:
Student.prototype = Object.create(Person.prototype);

//Only after manually establishing that connection can we add methods to our child objects:
Student.prototype.introduce = function() {
    console.log(`Hi, my name is ${this.firstName} and I study ${this.course}.`)
}
const mike = new Student ('Mike', 2004, 'CompSci');
console.log(mike);
mike.introduce;
mike.calcAge; //should work, now that we've connected this object to the Person.prototype

//NOTE: doing 'Student.prototype = Person.prototype' is wrong as it creates a single reference of both constructor function of Student and the Student object to the same object (Person.prototype) - which is a bad idea

//Checking our prototype chain:
console.log(mike instanceof Student); //true
console.log(mike instanceof Person); //true
console.log(mike instanceof Object); //true