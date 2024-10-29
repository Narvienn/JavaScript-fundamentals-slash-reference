
//Adding items to the end of an array:
const friends = ['Daria', 'As', 'Krysia']; 
friends.push('Pryv'); //returns the new length of the mutated array

//Deleting items from teh end of an array:
friends.pop(); //returns the popped element

//Adding items to the beginning of an array:
friends.unshift('Seba'); 

//Deleting items from the beginning of an array:
friends.shift() //like pop(), this function returns the removed element

//Getting an index of an array item:
friends.indexOf('As');
//NOTE: if called on an item that's not in the array, indexOf() will return... -1, for some reason XD

//Checking if an item is included in an array:
friends.includes('Diana') //returns true || false + uses STRICT EQUIVALENCE