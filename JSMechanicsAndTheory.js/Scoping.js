'use strict' //functions are block-scoped in this mode!

//Lexical scoping --> scoping depends on the placement of functions and blocks within the code
//Scope: global, function (=local), block

//NOTE: Only let and const variables are block-scoped - a var is scoped to function/local or globally

//Scope chain example:
const myName = 'Zos'; //global variable

function first() {
    const age = 36;

    if (age >= 40) {
        const decade = 4;
        var millennial = true; //unlike let and const (which are block-scoped, this variable is function-scoped
    }

//Since if-block and second() are both children of first(), they don't have access to one another!

function second() { //this function is nested in first() - but still has access to its variables, same as first() has access to global variables
    const job = 'QA Engineer';
    console.log(`${myName} is a ${age}-year-old ${job}`) 
}
/*
SCOPE CHAIN / VARIABLE LOOKUP:
1. 'age' is available to second() because second() is nested in first() (i.e. same function block)
2. 'myName' is available to second() because a) it's global and b) it's used in the first() function block (which shares scoping with second())

NOTE: This only works upwards, never downwards!
*/

};

//Examples of scope chain in action

function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear} ` //'age' and 'birthYear' are accessed in the parent scope, i.e. calcAge()
        console.log(output); //'firstName' is looked up in global scope, where it's declared
    };

    console.log(firstName); //not in this function scope so JS performs a variable lookup - because global variables are called first, firstName is available to calcAge() - even though it's declared below it!
    
    if (birthYear >= 1981 && birthYear <= 1996) {
        var millennial = true;
        const firstName = 'Darek' //a completely different variable that's scoped to this function block only - hence it's possible for it to have the same name as the global variable
        const str = `Oh, and you're a millennial, ${firstName}`;
    }

    const output = 'New output'; //reassigning the variable from parent scope in child scope - simply creates a new variable scoped to the block where it's declared

    console.log(str); // will log Reference Error
    console.log(millennial); // will log 'true' because var variables are function-scoped and ignore block scopes


   
    printAge(); //
    return age;
}

const firstName = 'Zos';
calcAge(1988);
