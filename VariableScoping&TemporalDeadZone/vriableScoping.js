//where we can access the variables and what type of variable that is

//VAR - global and functional scoping
//let - block , global  and functional scoping

//A global scope variable is a variable that can be
//accessed from anywhere in your JavaScript code — 
//inside functions, blocks, loops, or directly in the script.

//same for let , const 
var x = 10; // global variable

function show() {
  console.log(x); // can access
}

show();
console.log(x); // also accessible here

{
console.log(x);
}

console.log();

//Not recommended
function demo() {
  y = 50; // becomes global
}

demo();
console.log(y); // 50

console.log();

//Functional scope means that variables declared 
// inside a function are only accessible 
// inside that function, not outside.

//same with let , const
function test() {
  var t = 100;   // function-scoped
  console.log(t); // works
}

test();
//console.log(t); // ERROR: x is not defined

//Block scope means that a variable is
// only accessible inside the block 
// where it is declared.

console.log();

{
  let p = 10;
  const q = 20;

  console.log(x); // 10
  console.log(q); // 20
}

//console.log(p); // ERROR: x is not defined
//console.log(q); // ERROR: y is not defined

console.log();

if (true) {
  var l = 10;
}
console.log(l); // 10  (because var is NOT block-scoped)












