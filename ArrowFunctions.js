//Arrow function is a shorthand of a function expression:

//basic function expression:
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

//... and in an arrow form:
const calcAge3 = birthYear => 2037 - birthYear; //the arrow sign stands for 'returns'
//invoking/calling an arrow function works the same as for other functions:
const age3 = calcAge3(1993);
console.log(age3);

//if our arrow function requires more than a simple line of code, we need to use the bracket notation anyway:
const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirementAge = 65 - age;
    return retirementAge;
}

//What if the arrow function has more parameters?
const yearsUntilEmerytura = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirementAge = 65 - age;
    //return retirementAge;
    return `${firstName} will retire in ${retirementAge} years.`;
}

console.log(yearsUntilEmerytura(1988, 'Zos'));

//Arrow function do not use the 'this' keyword (unlike function expressions and function declarations)