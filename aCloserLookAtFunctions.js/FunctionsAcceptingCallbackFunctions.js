
//First-order / building block functions - CALLBACK FUNCTIONS (because they are called back by another function, not on their own)
const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str) {
    const [first, ...others] = str.split('');
    return [first.toUpperCase(), ...others].join('');
};

// Higher-order function:
const transformer = function(str, anotherFunction) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${anotherFunction(str)}`); // calling one function on another 

    console.log(`Transformed by: ${anotherFunction.name}`); //built-in property/method of every function

};

transformer('JavaScript is a baggy monster', upperFirstWord);

//Callback functions can be called by/for any object, e.g.
const highFive = function() {
    console.log('High five!');
}

document.body.addEventListener('click', highFive);
['Zos', 'As', 'Daria'].forEach(highFive); 
// in both cases, 'highFive' is the callback function

