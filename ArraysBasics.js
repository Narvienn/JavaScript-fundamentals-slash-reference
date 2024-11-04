//Basic array layout (literal syntax):
const friends = ['Daria', 'As', 'Krysia']; //NOTE: An array is not a primitive value in JS so unlike string, number, boolean etc., it can be mutated!

//Mutating (= changing) the array items:
friends[2] = 'Pryv'; 
//NOTE: You can mutate array elements BUT not change it completely (i.e. declare it again with different values)


//Alternative way of creating arrays:
const years = new Array(1985, 1988, 1992); //NOTE: Array is a JS function (just hover over it in an IDE...)

//Arrays are zero-based, i.e. array items are counted from 0:
console.log(friends[0]); //logs 'Daria'

//Getting array length:
console.log(friends.length); 

//Getting last element in the array:
console.log(friends[friends.length - 1]); //JS expects an expression, not a statement inside square brackets

const firstName = 'Zochna'
const Zos = [firstName, 'Vonho', 2037 - 1988]; //all these items produce a value, hence: expressions :D 

//
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const y = [1990, 1998, 2001, 2010, 2019];

console.log(calcAge(y)); //logs 'NaN' because calcAge expects a single argument, not an array of them
const age1 = calcAge(y[0]);
//alternatively:
const ages = [calcAge(y[0], calcAge(y[y.length - 1]))]; //you can place function calls in an array because they produce values = are JS expressions