//FOR-loop has three steering values: 1) the initial value; 2) the condition for running; 3) increment value
for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights, repetition ${rep}`)
};

//LOOPING ARRAYS

const zosObject = {
    firstName: 'Zos',
    lastName: 'Vonho',
    age: 2037 - 1988,
    job: 'QA Engineer',
    friends: ['Daria', 'Krys', 'As']
};

for(let i = 0; i < 5; i++) { //'i' is traditional for array/object 'items'
    console.log(zosObject[i])
};

//hardcoding the condition is not a great idea - instead:
for(let i = 0; i < zosObject.length; i++){
    console.log(zosObject[i], typeof zosObject([i]));

    types[i] = typeof zosObject[i];
};

//creating a new array 
const types = [];

const years = [1991, 2007, 2010, 2015, 2022];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i])
};
console.log(ages);

//BREAKING AND CONTINUING

//continue --> allows to skip array items that don't meet the criteria and continue looping over the array for those that do:
console.log('---SHOW ONLY STRINGS----');
for(let i = 0; i < zosObject.length; i++){
    if(typeof zosObject[i] !== 'string') continue;

    console.log(zosObject[i], typeof(zosObject[i]));
};

//break - terminate the whole loop immediately:
console.log('---BREAK WITH A NUMBER----');
for(let i = 0; i < zosObject.length; i++){
    if(typeof zosObject[i] === 'number') break;

    console.log(zosObject[i], typeof(zosObject[i]));
};