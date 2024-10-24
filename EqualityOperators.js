const age = 18;
  //strict equality operator - does not perform type coercion
if (age === 18) console.log("Congrats, you're an adult now.");

//loose equality operator - uses type coercion:

18 == '18' //will log 'true' (because the first variable will be converted to string)

//NOTE: Avoid loose equality whenever possible to prevent bugs & maintain clean code

const faveNumber = Number(prompt("What's your favourite number?")); // user input is always a string, remember?
console.log(typeof(faveNumber)); //logs string :)

if (faveNumber === 23) {
    console.log("Cool.") 
}
    else if (faveNumber === 7) { 
        console.log("Also a cool number.")
    }
else {
    console.log("You have weird taste in numbers.")
}

//Easy fix? Wrap the whole faveNumber in a Number converter function: const faveNumber = Number(prompt("What's your favourite number?"))

//NOT-EQUAL - STRICT:
if (faveNumber !==)

//NOT-EQUAL - LOOSE:
if (faveNumber !=)