//FUNCTION DECLARATION - the one that uses the 'function' keyword
function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
    //or we could simply do 'return 2037 - birthYear;', without saving it to a variable first
}

//invoking/calling/executing that function:
calcAge1(1988);
//... and saving its result to a variable:
const age1 = calcAge1(1988);
console.log(age1);

//FUNCTION EXPRESSION --> produces value!
const calcAge2 = function (birthYear) { //the function itself does not have a name (only the variable is named) - which makes it an ANONYMOUS FUNCTION
    return 2037 - birthYear;
}

//CALLING A FUNCTION EXPRESSION
const age2 = calcAge2(1992);

//IMPORTANT TAKEAWAY - in JS, functions are VALUES (so they can be stored in variables)


//NOTE: Function declarations can be called BEFORE they're defined - unlike with function expressions --> cf. HOISTING