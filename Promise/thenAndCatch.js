
//THEN --------------------------------------------
//.then() is used to handle the success 
// (resolved value) of a Promise.
// When a promise is fulfilled, the function inside 
// .then() runs and receives the result.


// let promise1 = new Promise((resolve , reject) => {

//     let success =true;
//     if(success){
//         resolve("promise fulfilled");
//     }
//     else{
//         reject("promise rejected");
//     }

// });

// promise1.then((message) => {
//     console.log("hahah " + message);
// })


//CATCH---------------------------------------------------------
// .catch() is used to handle errors (rejections) from a Promise.
// If a promise is rejected or an error occurs, .catch() runs.

// let p = new Promise((resolve, reject) => {
//     reject("Something went wrong!");
// });

// p.catch(error => {
//     console.log(error);
// });
// // Output: Something went wrong!



//BOTH TOGETHER ----------------------------------------
// let promise = new Promise((resolve, reject) => {
//     let success = false;

//     if (success) {
//         resolve("Operation successful!");
//     } else {
//         reject("Operation failed!");
//     }
// });

// promise
//     .then(result => {
//         console.log("Success:", result);
//     })
//     .catch(error => {
//         console.log("Error:", error);
//     });


//MULTIPLE THEN (PROMISE CHAINING) -------------------
// let promise = new Promise((resolve, reject) => {
//     resolve(10);
// });

// promise
//     .then(value => {
//         console.log("Step 1:", value);
//         return value * 2;  // passes 20 to next then
//     })
//     .then(value => {
//         console.log("Step 2:", value);
//         return value + 5;  // passes 25 to next then
//     })
//     .then(value => {
//         console.log("Step 3:", value);
//         return value - 3;  // passes 22
//     })
//     .then(value => {
//         console.log("Final Value:", value);
//     })
//     .catch(error => {
//         console.log("Error:", error);
//     });


//FINALLY-------------------------------------------------------
//the .finally() block is used to run code after
//  the promise is settled — whether it is fulfilled 
// (resolved) or rejected.

// let p = new Promise((resolve, reject) => {
//     let ok = false;

//     if (ok) {
//         resolve("Success!");
//     } else {
//         reject("Error occurred");
//     }
// });

// p.then(result => {
//     console.log("Then:", result);
// })
// .catch(error => {
//     console.log("Catch:", error);
// })
// .finally(() => {
//     console.log("Finally: Always runs");
// });

//------------------------------------------------------------------
// Promise.all() is a method in JavaScript that lets
//  you run multiple promises at the same time and gives
//  you the result only when ALL of them are finished successfully.

// Takes an array of promises.
// Runs them in parallel (together).
// Returns one promise:
// Resolved → only if all promises succeed
// Rejected → if any one promise fails

let p1 = new Promise((resolve , reject) => {

    setTimeout(resolve , 1000 , "first");

});

let p2 = new Promise((resolve , reject) => {

    setTimeout(resolve , 2000 , "second");

});

let p3 = new Promise((resolve , reject) => {

    setTimeout(resolve , 3000 , "third");

});

Promise.all([p1 , p2 , p3]).then((values) =>{

    console.log(values);

});




