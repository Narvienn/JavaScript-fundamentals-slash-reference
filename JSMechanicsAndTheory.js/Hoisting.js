//Examples of hoisting for simple variables:

console.log(me); //logs 'undefined'
console.log(job); //logs 'ReferenceError: cannot access 'job' before initialization'
console.log(year); //logs 'ReferenceError: cannot access 'job' before initialization'

var me = 'Zos';
let job = 'QA Engineer';
const year = 1988;



//Hoisting for functions:

console.log(addDecl(2, 3)); // logs 5
console.log(addExpr(2, 3)); // logs 'ReferenceError: cannot access 'addExpr' before initialization'
console.log(addArrow); //logs 'ReferenceError: cannot access 'addArrow' before initialization'

function addDecl(a, b) {
    return a + b
};

const addExpr = function(a, b) {
    return a + b
};

const addArrow = (a, b) => a +b;
// changing addExpr and/or addArrow to a var will not fix it - instead, it will log 'TypeError: addExpr is not a function

//Common mistake with hoisting:

if (!numProducts) deleteShoppingCart(); 
/* at the time of running this code, the value of 'numProducts' is 'undefined' (a falsy value in JS), 
so '!numProducts' returns 'true' and if-block gets executed */

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!');
};

/* GOOD PRACTICES WITH HOISTING
- avoid var variables
- use strict mode
- declare functions before variables
*/

var x = 1; //creates a property on a JS 'window' object (to be viewed in a web browser - let and const don't) 
console.log(x === window.x); //logs 'true' because see above
let y = 2;
const z = 3;