//ASYNC--------------
//async is a keyword used before a function.
// It tells JavaScript that this function will contain asynchronous code.
// An async function always returns a Promise—even
// if you return a normal value.

//AWAIT---------------------------------------------
//await can be used only inside an async function.
// It pauses the async function until the Promise is resolved or rejected.
// It makes async code look like normal, simple,
//  step-by-step synchronous code.

//using async - await we can make the asyn code to
//run like normal sync code
//when we need to handle promises well
//always returns a promise

// when we use await
//  JavaScript will wait for
//  the function / code to execute before
//  moving to the next line.

//ASYNC FUNCTION-----------------------------------
// async function getData() {

//     setTimeout(function(){
//         console.log("prachi geeee")
//     } , 5000);

// }

// getData();

//AWAIT---------------------------------------------------

//FETCH API
// The Fetch API is a modern tool in
// JavaScript that lets your website talk to a server
// to get or send data. Think of it like sending a letter to a
// friend (the server) and waiting for their reply.
// In the past, we used something called XMLHttpRequest,
//  which was a bit messy and hard to read. Fetch makes it much simpler.
// When you use fetch, it automatically returns a Promise,
// which is like saying, “I’ll get this data later,
//  don’t block everything while I wait.” You can then use
// .then() to do something with the data once it arrives, or
// use async/await to make the code look like it’s happening step by step.

// async function getdata(){

//     //fetch API get call
//     let response  = await fetch('https://jsonplaceholder.typicode.com/todos/1');

//     //parse data
//     let data =await response.json();

//     //print
//     console.log(data);
//     console.log(response);

// }

// getdata();

//we can only mark await if the function is asyn

//we have to make sure the data is received in the respone variable
//because as it is an asyn code the next line of code will start to
//run irrespective of the fact that the data is not received yet
//resulting in undefined behaviour
//so we will make sure it behaves like sync code
//so we will mark the line await (to wait for the flow
// of execution to execute the line first then move forward)

//----------------------------------------------------------------
//POST in fetch API
// In the Fetch API, a POST request is used when
// you want to send data to a server, for example,
//  submitting a form, saving user info, or creating
//  a new item in a database. Unlike a GET request,
// which just asks for data, POST sends data to the server.

// async function sendData() {
//   try {
//     //get call
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       //telling API we are posting
//       method: "POST",

//       //headers tell the server what kind of data we are sending.
//       //"Content-Type": "application/json" means the data is in JSON format.
//       headers: { "Content-Type": "application/json" },

//       // body is the actual data we are sending to the server.
//       // We use JSON.stringify() to convert a JavaScript object
//       //  into a string, because fetch can only send text
//       body: JSON.stringify({ name: "Alice", age: 25 }),
//     });

//     // The server usually sends something back
//     //  (like “user created” or some info).
//     // response.json() converts that response from JSON
//     // into a JavaScript object.
//     let data = await response.json();

//     //print
//     console.log(data);

//     //if theres any error
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }

// sendData();

//Method 2********************************

// const myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// const url = "https://jsonplaceholder.typicode.com/posts";

// const options = {
//   method: "POST",
//   headers: myHeaders,
//   body: JSON.stringify({ name: "Alice", age: 25 }),
// };

// async function getData() {
//   const respone = await fetch(url);
//   let data = await respone.json();
//   console.log("my get data is : ", data);
// }

// async function sendData() {
//   const respone = await fetch(url, options);
//   let data = await respone.json();
//   console.log("my post data is : ", data);
// }

// async function process() {
//    await sendData();
//    await getData();
// }

// process();

//-----------------------------------------------------------------
