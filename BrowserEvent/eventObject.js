
//The event object in JavaScript is a special object automatically
//  created by the browser whenever an event happens on a webpage.
// Events can be anything like a click, key press, mouse move,
//  input change, form submit, etc.

// When an event occurs, JavaScript collects all information
//  about that event (like where it happened, on which element,
//  what key was pressed, mouse position, etc.) and stores it 
// inside this event object.
// This object is then passed to the event handler function so
//  that you can use all that information.

// function changeText(event) {

//     console.log(event);
//     let fpara = document.getElementById("fpara");
//   fpara.textContent = "prachi";

// }

// let fpara = document.getElementById("fpara");

// //adds action
// fpara.addEventListener('click' , changeText); 


//Default action
//anchor tag -> link

let aelement = document.getElementById('fanchor');

aelement.addEventListener('click' , function(event){
    event.preventDefault();
    aelement.textContent = "click hogya behen";
});