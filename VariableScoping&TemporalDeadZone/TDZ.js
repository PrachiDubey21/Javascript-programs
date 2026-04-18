//TDZ applies to let and const, NOT to var.

//Because let and const are hoisted**,
// but they are not initialized with a default value
// (like var = undefined).
//They stay in the "dead zone" until the
//  code reaches their declaration line.

console.log();

//same with const
// console.log(a); // ERROR
// let a = 10;

console.log();

let b;
console.log(b); // NO ERROR
b = 23;

console.log();

console.log(c); // undefined
var c = 20;
