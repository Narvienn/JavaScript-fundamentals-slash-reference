//DECLARING A FUNCTION:
function logger() {
  console.log("Zosia is ainm dom.");
}

//CALLING / INVOKING A FUNCION:
logger();

//FUNCTION PARAMETERS:
function fruitProcessor(appleNumber, orangeNumber) {
  const juice = `Juice made from ${appleNumber} apples and ${orangeNumber}`
  return juice; 
}

//PASSING ARGUMENT(S) TO A FUNCTION WITH PARAMETER(S) DEFINED
fruitProcessor(5, 0); //as per function definition above, this will log '5, 0'

const appleJuice = fruitProcessor(10, 0); //by capturing the result of the function in a variable, we can use the function's return value for further operations
console.log(appleJuice) //this line is equivalent to 'console.log(fruitProcessor(10, 0);'
