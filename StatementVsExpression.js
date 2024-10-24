//Expression is a piece of code that produces a value, e.g.
3 + 4;
1991; //this still produces a value
true && false //produces a Boolean value

//Statement does not produce a value, e.g.
if (23 > 10) {
    const str = '23 is bigger';
} //variable declaration DOES NOT produce a value (assignment != production)

//Actions in JS are considered statements (because they manipulate values, not create them)...?
//Rule of thumb is - if it ends in a semicolon, it's a STATEMENT

//JS uses and expects both in different places, e.g. template literals only expect expressions