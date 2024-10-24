const age = 16;
const isOfAge = age >= 18;

if(isOfAge) {
    console.log("Congrats, you're old enough to drive.");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sorry, you need to wait ${yearsLeft} to start driving.`);
}

let century;
if (birthYear1 <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);