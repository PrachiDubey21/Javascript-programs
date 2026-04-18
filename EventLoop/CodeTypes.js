
//SYNCHRONOUS CODE 
// Synchronous code in JavaScript means the code 
// is executed line by line, in the exact order it is written.
// A line of code must finish completely before the next line starts.
//  JavaScript will wait for the current task to complete,
//  even if it takes time.

//It follows a blocking behavior — one task blocks the next one.
//If a line takes time (like a loop or calculation), 
//JavaScript stops everything until that task is done.



//ASYNCHRONOUS CODE
// Asynchronous code in JavaScript means the code does
// not wait for a task to finish.
// The program keeps running other lines while 
//the asynchronous task completes in the background.

// It is non-blocking, meaning it does not stop the main thread.
// JavaScript uses asynchronous programming to 
// handle tasks that take time, like:
// API calls
// setTimeout
// File reading
// Database queries
// Network requests
// Timers

// console.log("Task 1");

// setTimeout(() => {
//   console.log("Task 2");
// }, 2000);  // runs after 2 seconds

// console.log("Task 3");

function printTask2() {
  console.log("Task 2");
}

console.log("Task 1");

setTimeout(printTask2, 2000);  // calling the function asynchronously

console.log("Task 3");





