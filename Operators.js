const now = 2024;
const ageZos = now - 1988;
const ageDaria = now - 1985;

console.log(ageZos * 2, ageZos / 2, ageZos ** 2) //multiplication, division, exponentiation

//ADDITION VS CONCATENATION
const firstName = 'Zosia';
const lastName = 'Vonho';

console.log(firstName + lastName) //logs 'ZosiaVonho' because concatenation
//easy fix for that:
console.log(firstName + ' ' + lastName) 



//ASSIGNMENT OPERATORS
let x = 10 + 5;

console.log(x); //logs 15 because order of operations: 1. operation, 2. assignment of result

x += 10; // x = x + 10 
console.log(x); //--> logs 25, because we declared x value as 10 above
//works the same for *=, -= etc.

x++; //x = x + 1
x-- // x = x - 1



//COMPARISON OPERATORS
console.log(ageDaria > ageZos); //logs 'true'

//> , <, >=, <=
console.log(ageZos >= 18);

const isOfAge = ageZos >= 18; //dynamic typing means that this variable is implicitly typed as a boolean

d
//OPERATOR PRECEDENCE - Reference: MDN Operator Precedence for JS - table
console.log(now - 1988 > now - 2018); //order of execution: 1. subtraction (LTR), 2. comparison (LTR), 3. assignment (RTL)

let z, y; 
z = y = 25 - 5 - 10;

console.log(z, y) //logs 10, 10 because: 1. subtraction 2. assignment (10 to y, y to z because RTL)

const averageAge = (ageDaria + ageZos) / 2; //without the brackets, division happens before addition
