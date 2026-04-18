//REFRRENCE COPYING

//no cloning
// as no new obj is made
//both is referring to the same obj created in memory
let a = { age: 13 };
let b = a;
console.log();
console.log(a);
console.log(b);
a.age = 14;
console.log(b);

console.log();

//CLONING
//new object is made here

//spread operator ...
let obj = { age: 12 };
let newobj = { ...obj };
console.log(obj);
console.log(newobj);
obj.age = 15;
console.log(newobj);

console.log();

//assign method
let h = {age:89};
let h2 = Object.assign({} , h);
console.log(h);
console.log(h2);

console.log();

let h3 = {value:45};
let h4 = Object.assign({} , h , h3);
console.log(h4);

console.log();
