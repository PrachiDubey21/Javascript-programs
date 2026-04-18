
//An event in JavaScript is any action or occurrence
//  that happens in the browser, 
// which JavaScript can listen to and respond to.

//An event is something that happens on a web page
//  — like a click, key press, mouse movement, or page load
//  — and JavaScript can run code when that action occurs.

//every event has some action

//monitorEvents(document); //click on screen
//unmonitorEvents(document);

//event - target
//ek entity h jahan pr event receive hota h
//event.target is the element that actually triggered the event.
//It tells you which exact element the user interacted with.

//An event listener in JavaScript is a function 
//that waits (listens) for a specific event to happen
// on a specific element, and then runs when that event occurs.

//suppose there is a button 
//clicking on that button is an event
//that button is event target
//the action that will be performed after that event is written on
//a specific location that is called event listener

//we can add event listener on elements created by html
// we can also remove evet listener  

//syntax
//<event -target>.addEventListener(<event-type> , <function (that performce the action)>);