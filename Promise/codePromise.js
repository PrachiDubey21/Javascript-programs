// let firstpromise = new Promise((resolve , reject) => {
//     console.log("hi");
// });
// VM318:3 hi
// undefined
//firstpromise - > pending

// let firstpromise = new Promise((resolve , reject) => {
//     console.log("hi");
//     resolve(100);
// });
// VM422:2 hi
// undefined
// firstpromise
// Promise {<fulfilled>: 100}

// let firstpromise = new Promise((resolve , reject) => {
//     console.log("hi");
//     reject(new Error("internal server error"));
// });
// VM629:2 hi
// undefined
// VM629:3 Uncaught (in promise) Error: internal server error
//     at <anonymous>:3:12
//     at new Promise (<anonymous>)
//     at <anonymous>:1:20
// (anonymous) @ VM629:3
// (anonymous) @ VM629:1Understand this error
// firstpromise;
// Promise {<rejected>: Error: internal server error
//     at <anonymous>:3:12
//     at new Promise (<anonymous>)
//     at <anony…}

// function sayname(){
//     console.log("prachi");
// }

// setTimeout(sayname , 15000);

let firstpromise = new Promise((resolve, reject) => {
 
  setTimeout(function sayname() {
    console.log("prachi");
  }, 15000);

  //makes promise fulfilled
  resolve(1);

});
