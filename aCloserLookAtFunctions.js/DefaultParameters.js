'use strict';

const bookings = [];

//ES6 way of creating default parameter values:
const createBooking = function(flightNumber,numPassengers = 1, price = 199 * numPassengers) { // be mindful of the parameter order, as this runs sequentially!

    //ES5 way of establishing default parameters - no longer used:
    numPassengers = numPassengers || 1; // '1' being a truthy value that becomes the default parameter value if no other value is provided for 'numPassengers'
    price = price || 199; // 199 becomes the default price if no other value is passed to 'price'
    
    const booking = {
        flightNumber,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('FR0109'); // logs an array {'FR0109, undefined, undefined} - correctly, and this can be worked around by hedging the parameters, see above
// running this again, after hedging the other two parameters, will correctly log {'FR0109', 1, 199}, i.e. the new default values

createBooking('FR0109', 4, 340); 

// NOTE: The default parameters are mapped sequentially and are mandatory to provide
createBooking('FR0109', 1000); // will be interpreted as numPassengers = 1000

//SKIPPING A DEFAULT PARAMETER:
createBooking('FR0109', undefined, 100);