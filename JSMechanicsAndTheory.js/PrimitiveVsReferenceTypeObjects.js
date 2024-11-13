let age = 30;
let oldAge = age; //oldAge is now 30
age = 31; //oldAge is still 31
console.log(age);
console.log(oldAge);

const me = {
    name: 'Zos',
    age: 36,
}

const friend = me;
friend.age = 27
console.log(me);
console.log(friend); //both will log '27' because:

//1. In JS: number, string, boolean, undefined, null, symbol and bigint are primitive types, and...
//2. ... anything else - object literal, array, functions, objects etc. - are OBJECTS / reference types
//3. Reference types are stored in the heap whereas the primitives - in the call stack
//4. The primitive types are assigned a memory address in the call stack - a reassignment creates a new memory address to hold the new value instead of mutating the existing one
//5. Reference type create address/identifiers in the call stack that point to the heap
//6. ... so assigning a new value to that reference type will do nothing because the reference is to the original value of that variable
//7. ... because 'friend.age = 27' only changes that value in the heap, without touching the call stack

//Example: Mutating a primitive type:
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName, oldLastName); //logs 'Davis Williams' because l. 28 reassigned oldLastName to 'Davis', and l. 27 passed that value to lastName

//Mutating a reference type:
const jessica = {
    firstName: 'Jessica',
    lastName: 'Jones',
    age: 27,
}

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis' 
console.log("Before marriage:", jessica);
console.log("After marriage:", marriedJessica); //both will log 'Jessica Davis 27'
//marriedJessica is not a new object in the heap - it's an object with the same reference in call stack as jessica

const marriedJessica = {}; //will throw TypeError: Assignment to constant variable - because in doing so, we're trying to reassing the object in call stack and that's not allowed
//NOTE: This would work if marriedJessica was a let-variable, not a const-variable 0____o

//Copying objects:
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Jones',
    age: 27,
    family: ['Alice', 'Patty'],
}

//Another way to do this:
const jessicaCopy = Object.assign({}, jessica2); //creates a copy of all primitive types of the object
jessicaCopy.lastName = 'Davis';
console.log("Before marriage:", jessica2);
console.log("After marriage:", jessicaCopy); //will log 'Jessica Jones 27' and 'Jessica Davis 27'
//jessicaCopy is a true copy of jessica2 = jessicaCopy points to a new reference ID in the stack

//However, this is a SHALLOW COPY - the 'family' array (= a nested object) has the same reference in the stack and so, will be changed for BOTH jessica2 and jessicaCopy!
jessicaCopy.family.push('Mary', 'John');
console.log("Before marriage:", jessica2);
console.log("After marriage:", jessicaCopy); //will log all 4 names in the 'family' array

//Deep cloning is usually achieved with additional libraries