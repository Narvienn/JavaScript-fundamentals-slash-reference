/* FALSY VALUES IN JS - will be converted to a 'false' boolean value:
- 0
- "" (empty string)
- undefined
- null
- NaN
*/

console.log(Boolean(0)); //false
console.log(Boolean('Zos')); //true
console.log(Boolean({})); //true - empty objects are truthy values and are converted to true because reasons, apparently

const money = 0; 
if(money) { //will be converted to either true or false, depending on the value of the 'money' variable
    console.log("Dont' spend it all.");
} else {
    console.log("Get a job, maybe?");
}