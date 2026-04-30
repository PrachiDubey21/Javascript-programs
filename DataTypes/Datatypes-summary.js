//  Primitive

//call by value
//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null          //type - object
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);     //false

// const bigNumber = 3456543576654356754n      //type - undefined



// Reference (Non primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "prachi",
    age: 19,
}

const myFunction = function(){         //type - object function
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3