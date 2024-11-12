//'this' keyword/variable is created for every execution context/function - along with scope chain and variable env.
//value is assigned to it ONLY when the function is called - and it's the 'owner' of the function, e.g.

//1. When running an object method, the owner is the object of that method:
const Zos = {
    nombre:'moi',
    ano: 1988,
    calcAge: function() {
        return 2037 - this.ano; //this = Zos
    }
};

//2. When calling a simple function in strict mode - 'this' takes on the value of 'undefined'
//3. When calling an arrow function (which does not support the 'this' keyword) - 'this' takes on the value of owner of the arrow's parent function
//4. When calling an event listener - 'this' takes on the value of the DOM element that the handler is part of


//'this' keyword enables METHOD BORROWING:
const Daria = {
    ano: 1985,
};

Daria.calcAge = Zos.calcAge; //the assignment shows the new object to use the method of another object
console.log(Daria.calcAge());

//However, this won't work:
const f = Zos.calcAge; 
f(); //because the f function does not have an owner