//A closure is created when a function 
// remembers the variables from its outer (parent) function, 
// even after the parent function has finished executing.
//  A closure allows a function to access variables that
//  were defined outside of it.
//  Even if the outer function is gone,
//  the inner function still “remembers” those variables.

//closure (combination) -> function
//                      -> required data / lexical scope / surrounding state

function outer() {
  // A variable defined in the outer function
  let count = 0;

  // Inner function that uses the outer variable
  function inner() {
    count++;                // Accessing and modifying outer variable
    console.log(count);     // Printing updated value
  }

  return inner;             // Returning inner function (closure)
}

// Calling outer() gives us the inner function with access to 'count'
let fn = outer();

// Even though outer() already finished, 'inner' still remembers 'count'
fn();  // Output: 1
fn();  // Output: 2
fn();  // Output: 3

