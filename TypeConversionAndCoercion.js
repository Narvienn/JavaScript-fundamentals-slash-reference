//TYPE CONVERSION - explicit

const userInputYear = '1988';
console.log(userInputYear + 18); //will log '198818' because userInputYear will be converted into string for the concatenation to be possible

//Converting strings to numbers - a built-in JS function:
console.log(Number(userInputYear));
console.log(Number('Zosia')); // logs 'NaN' - Not a Number

//NOTE: This only does the conversion in the instance, not in the variable declaration - the original variable is still a string!

//Converting to string:
console.log(String(23)); 


//TYPE COERCION - implicit
console.log("I am" + 23 + "years old.") //JS coerces '23' conversion in the string - same thing happens in literals!

console.log('23' - '10' - 3); //logs 10 because 23 and 10 were converted to numbers --> since deduction is not possible with strings (unlike addition/concatenation)
console.log('23' + '10' + 3); //logs 23103 because 3 is converted to a string and concatenated instead of added
console.log('23' * '2') //logs 46 because multiplying is impossible on strings

let n = '1' + 1; //converts 1 to string, concatenates both as '11'
n = n -1; // n is '11', is converted to a number and deducted from
console.log(n); //logs... 10 :D see above