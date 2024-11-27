//FUNCTIONS IN JS ARE VALUES / ANOTHER TYPE OF OBJECT (but considered 'first-class citizens')

//Functions can be passed as arguments, e.g.:
const greet = () => console.log("Hey, Zos!");
btnClose.addEventListener('click', greet);

//Functions can also be returned from other functions:
function count() {
    let counter = 0;
    return function() {
        counter++;
    };
};

//We can call class methods on other functions

//HIGHER-ORDER FUNCTIONS - functions that receives or returns a first-class function (or both) - see for 'addEventListener' and 'greet' above ;)



