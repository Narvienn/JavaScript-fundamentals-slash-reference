const age = 23;
age >= 18 ? console.log("You're of legal drinking age.") : //quasi-if statement
    console.log("It's soft drinks for you, kiddo."); //quasi-else statement

//Ternary operator is an expression as it produces value (?)

const drinkChoices = age <= 18 ? "wine" : "water"; //that's how it's usually used

//without this ternary operator above, this whole variable assignment would look like this:

let drinkChoices2; //variable needs to be declared OUTSIDE a code block, otherwise it's going to stay block-scoped/unavailable outside of it
if (age >= 18) {
    drinkChoices2 = "wine";
} else {
    drinkChoices2 = "water";
}

//Ternary operator is an expression - so we can use it in a template literal!
console.log(`I like to drink ${age <= 18 ? "wine" : "water"}`);