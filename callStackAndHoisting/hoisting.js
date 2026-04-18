//Hoisting in JavaScript means JavaScript moves declarations
// to the top of their scope before executing the code.
// So you can use variables or functions before
// actually writing them in the code —
// but how they behave depends on var, let, const, and function types.

console.log();

//function hoisting
greet(); // works //fully hoisted
function greet() {
  console.log("Hello");
}

console.log();

//no error (it knows it is a var)(decl is moved first)
console.log(a); // undefined
var a = 10;

console.log();

//vairable hoisting (declaration only needs to be done first)
var b;
console.log(b);
b = 10;

console.log();

// //error
// console.log(b); // ReferenceError
// let b = 20;

console.log();

// //error
// sayHi(); // TypeError: sayHi is not a function
// var sayHi = function() {
//   console.log("Hi");
// };

console.log();

console.log(sayHi); //as variable //(undefined)
var sayHi = function() {
  console.log("Hi");
};

console.log();

// //error
// hello(); // ReferenceError
// const hello = () => {};

console.log();

// let obj = new MyClass(); // ❌ ReferenceError
// class MyClass {}

//Functions in JavaScript are called first-class citizens
//  (or first-class objects) because
//  they are treated like any other value.
//This means JavaScript allows you to use functions
//  just like variables, objects, or strings.

//Functions can be returned from another function
function outer() {
  return function inner() {
    console.log("Returned function!");
  };
}
let result = outer();
result();

console.log();

//Functions can be stored in variables
let great = function () {
  console.log("Hello!");
};
great();

console.log();

//Functions can be passed as arguments
function display(fn) {
  fn();
}
display(() => console.log("Callback called!"));

console.log();

//Functions can be object properties
let person = {
    age:25,
    namee : "prachi",
  talk: function () {
    console.log("Speaking...");
  },
};
person.talk();

console.log();

//Functions can be stored in arrays
let arr = [
  function () {
    console.log("A");
  },

  function () {
    console.log("B");
  },
];
arr[1](); // B

console.log();
