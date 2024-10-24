const hasDriversLicence = true;
const hasGoodVision = false;

//AND
console.log(hasDriversLicence && hasGoodVision); //true

//OR
console.log(hasDriversLicence || hasGoodVision); //true

//NOT
console.log(!hasDriversLicence); //false

shouldDrive = hasDriversLicence && hasGoodVision && !isTired; //this is just my idea - acc. to the tutorial, it's common in JS to include the condition directly in the if-statement

if (shouldDrive) {
    console.log("You're good to drive.")
} else {
    console.log("Someone else should drive.") //this wil run because true && false
} 

const isTired = true; //so true...

console.log(hasDriversLicence || hasGoodVision || isTired) //true if ONE of those is true
console.log(hasDriversLicence && hasGoodVision && isTired) //true only if ALL of them are true

if (shouldDrive) {
    console.log("You're good to drive.")
} else {
    console.log("Someone else should drive.") //this wil run because true && false
} 