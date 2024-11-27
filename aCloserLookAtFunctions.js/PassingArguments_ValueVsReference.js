const createBooking = function(flightNumber,numPassengers = 1, price = 199 * numPassengers) { 
    const booking = {
        flightNumber,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}



const flight = 'LH234';
const zos = {
    name: 'Zosia vonHo',
    passportNumber: 234566,
};

const checkIn = function(flightNumber, passenger) {
    flightNumber = 'LH345';
    passenger.name = 'Ms' + passenger.name;

    if(passenger.passportNumber === 234566){
        alert("Check in complete.");
    } 
    else {
        alert("Wrong passport!");
    }

};

checkIn(flight, zos);
console.log(flight); // logs 'LH234' because 'flight' is a primitive type and is taken from the const declaration - the value is copied
// alternatively, it works like 'flightNum = flight' - see under 'reassignment'
console.log(zos); // logs 'Ms Zosia vonHo' because it's a reference type - and with those, the reference is copied, not the value
// like 'const passenger = zos' - they both point to the same object in memory heap (?)

// PASSING A PRIMITIVE TYPE as an argument == creating a copy of that primitive type in the function (value is copied, reference isn't - changing the copy will affect the original)

const newPassport = function(person) {
    person.passport = Math.trunc(random() * 100000);
};

newPassport(zos);
checkIn(flight, zos);
//both functions have access to the zos-object and by accessing its properties, can change them - that's why the checkIn returns "Wrong passport" - because running newPassport has already modified the passport property value

//PASSING BY VALUE vs PASSING BY REFERENCE
// JS only has PASSING BY VALUE, NOT REFERENCE