//With a for-loop, you need to know how many iterations this loop will have (for the counter to work):
for (let rep = 1; rep <= 10; rep++) { //initial value; condition; counter
    console.log(`Lifting weights, repetition ${rep}`);
};

//Rewriting the for-loop as a while-loop:

let rep = 1; //initial value
while (rep <=10) { //condition
    console.log(`While: Lifting weights, repetition ${rep}`);
    rep++; //counter
}

//NOTE: a while-loop only really needs the condition - initial value and counter are optional\
//e.g.
let diceRoll = Math.trund(Math.random() * 6) + 1; //'random' lib generates a number between 0 and 1 - a float that we need to round off to an integer (the '+ 1' is for when we've generated a 0)

while (diceRoll !== 6) { 
    console.log(`You rolled a ${diceRoll}`);
    diceRoll = Math.trund(Math.random() * 6) + 1; //without this assignment, we'd have an infinite loop
        if (diceRoll === 6) console.log("Finally, you've rolled a 6.");
};

/* What happened here?
1. First, the variable diceRoll created in l.16 created the variable = generated the quasi-random number,
2. Then, that number was passed to the while-loop's condition in l.18
3. Since it wasn't a 6, the code block in l.20 was executed, and following that...
4. ... a new value was assigned to the variable diceRoll in l.20 AND passed to the while-loop's condition (this prevents an infinite loop)
5. The whole flow repeats until a 6 is generated
*/