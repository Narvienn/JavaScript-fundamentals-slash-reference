
var firstName = Daria; //this will cause greeting() to log 'Hey Daria' because var variables are created as properties on the global object

const zosObject = {
    firstName: 'Zos',
    lastName: 'Vonho',
    job: 'QA Engineer',
    friends: ['Daria', 'Krys', 'As'],
    year: 1988,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);

        //Solution 1 - pre-ES6, still used in older codebases:
        const self = this; //fixes the problem described in l.18 - because through scope chain, it makes isMillennial do a variable lookup in the parent scope
        console.log(self);
        const isMillennial = function () {
            console.log(self.year >= 1981 && self.year <= 1996)
        }
        isMillennial(); //logs 'TypeError: Can't read property 'year' of undefined - because despite being nested in an object method, JS rules dictate that in a regular function call, 'this' is always set to 'undefined'
   
        //Solution 2 - arrow function:
         const isMillenial2 = () => { //we're returning an object and this object will look up the scope chain for its owner = ZosObject
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        }
    },

    greeting: () => console.log(`Hey ${this.firstName}!`),

};

zosObject.greeting(); //logs 'Hey undefined' - because an object is not block-scoped (like a function is), therefore the arrow function takes the 'this' value from the global scope = undefined
//This is why an arrow function shouldn't be used as an object method

//FUNCTIONS GET ACCESS TO THE 'ARGUMENTS' KEYWORD (not arrow functions, though)
const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
};
addExpr(2, 5);
addEcpr(2, 5, 8, 12); //will also execute because  the value of 'arguments' is undefined = unspecified amount of arguments (?)

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
};
addArrow(2, 5, 8); //will log 'Uncaught ReferenceError: arguments is not defined = arrow function can't access the 'arguments' keyword
