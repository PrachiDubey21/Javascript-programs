//MATH

console.log(Math.PI);
console.log();

console.log(Math.max(23, 45, 63, 3, 78, -9, 54));
console.log();
console.log(Math.min(23, 75, -9, 7, 46, -76, 42));
console.log();

console.log(Math.floor(1.6)); // small int than 1.6
console.log();
console.log(Math.round(1.6)); // round off
console.log();
console.log(Math.ceil(1.1)); //highest int than 1.1
console.log();

console.log(Math.abs(-9)); // positive
console.log();

console.log(Math.random());
console.log();

console.log(Math.sqrt(25));
console.log();

console.log(Math.pow(2, 10));
console.log();

//TIME

let curr = new Date();
console.log(curr);
console.log();

let date = new Date("may 21 2006 01:00");
console.log(date);
console.log();

let datee = new Date(1999, 8, 19, 6); //year,month(0 based indexing),date,time
console.log(datee);
console.log(datee.getDay());
console.log(datee.getFullYear());
datee.setFullYear = 1998;
console.log(datee);
console.log(datee.setMonth(2));
console.log(datee);
console.log();


