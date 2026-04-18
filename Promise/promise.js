//A Promise in JavaScript is a built-in object 
// that represents the eventual completion (or failure) 
// of an asynchronous operation and its resulting value.
//  In simpler words, it’s a way to handle operations that take time, 
// like fetching data from an API, reading files, or waiting for a timer.

//STATES 

//1. Pending
// This is the initial state of a promise.
// The asynchronous operation has not completed yet.
// Neither resolve nor reject has been called.

// 2. Fulfilled (Resolved)
// The operation completed successfully.
// The promise now has a value.
// .then() handlers attached to the promise are called with this value.

// 3. Rejected
// The operation failed.
// The promise now has a reason (error) for failure.
// .catch() handlers attached to the promise are called with this error.

//this lets asyn method to return values like sync methods.
//it returns a promise to supply that value at some point in future.

//try to write asyn code in promise to make your code clean.

//syntax
// new Promise ((resolve , reject) => {
// code///////
//    });






