
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) { //NOTE: parameters are FUNCTION-SCOPED, i.e. this 'birthYear' has nothing to do (except name) with the 'birthYear' parameter in the preceding function
    const age = calcAge(birthYear);
    const retirementAge = 65 - age;

    if (retirementAge > 0) {
        return retirementAge; //once a function returns a value, it exits/quits, so...
        console.log(`${firstName} retires in ${retirementAge}`) //... any code after return-statement will not be executed
    } else {
        return -1;
    }
}

yearsUntilRetirement(1970, 'Mike'); //logs '-2' - this outcome need to be handled in our code, so we need an if-statement