const zosArray = [
    'Zos',
    'Vonho',
    2037 - 1988,
    'QA engineer',
    ['Daria', 'Krys', 'As']
];

//Structuring those data into an object with key-value pairs / properties (object literal syntax):
const zosObject = {
    firstName: 'Zos',
    lastName: 'Vonho',
    age: 2037 - 1988,
    job: 'QA Engineer',
    friends: ['Daria', 'Krys', 'As']
};

//GETTING DATA FROM AN OBJECT
//Dot notation:
console.log(zosObject.lastName);

//Bracket notation:
console.log(zosObject['firstName']); //bracket accepts any expression/operation! E.g.
console.log(zosObject['firstName ' + 'lastName']);

const interestedIn = prompt("What do you need to know about Zos?");
console.log(zosObject.interestedIn); //logs 'undefined' - because 'interestedIn' is not a property of zosObject. Instead, do this:

console.log(zosObject[interestedIn]);

//'undefined' is a falsy value in JS, so we can handle the flow like so:
if (jonas[interestedIn]) {
    console.log(jonas[interestedIn])
} else {
    console.log("Ask something else.")
}

//ADDING NEW PROPERTIES USING DOT AND BRACKET NOTATION
zosObject.location = 'Poland';
zosObject[education] = 'translator';