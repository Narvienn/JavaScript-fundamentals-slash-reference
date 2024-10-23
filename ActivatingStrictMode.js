//'use strict'; --> the entire script will now be using strict mode (can also be done for specific code blocks, but that's less common/advisable)

let hasDriversLicence = false;
const passTest = true;

if(passTest) hasDriverLicence = true; //intentional bug/error in variable name 
if(hasDriversLicence) console.log("Yay, I can drive!") //nothing gets logged because hasDriversLicence is still false - and JS console will throw a descriptive error about it when strict mode is activated!




