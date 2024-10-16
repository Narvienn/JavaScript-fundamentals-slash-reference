//Declaring a variable
let firstName = "Vonho";

console.log(firstName); //use this function whenever you want to output sth to the browser (once you run the JS file there)

/*Naming conventions for variables in JS:
- camelCase (i.e. firstName) is preferred/standard
- snake case (first_name) is also acceptable
- variable name must NOT start with a number - but underscore and $ are allowed at the beginning
- allowed characters: letters, numbers, underscores and $ sign
- names typed in all uppercase are (conventionally) reserved for CONSTANTS
*/

//DATA TYPES
/*Primitive:
1. Number - floating point number: integer or decimal
2. String
3. Boolean
4. Undefined - an empty variable without value assigned to it, e.g. let children;
5. Null - see above, but has different uses
6. Symbol - unique and can't be changed 
7. BigInt - for numeric values larger than allowed in number type

NOTE: JS is dynamically typed, so the value assigned to a variable defines its type (NOTE: Not the case in TS!)

JS BUILT-IN FUNCTION FOR CHECKING A VARIABLE'S DATA TYPE:
*/
let children;
console.log(typeof children);

//Running typeof on a null-type variable will log 'object' - this is a JS legacy bug that's kept for legacy reasons (?)

//LET, VAR and CONST
/*
let --> 
- used for variables that are likely to be changed (reassigned / mutated) later
- also used for empty variables that are assigned later on
- block-scoped

const --> 
- used for immutable variables (= can't be reassigned later on)
- can't be declared empty
- in JS, should be used by default

var --> 
- should be avoided altogether (in JS...)
- legacy mode of variable declaration
- function-scoped

*/
