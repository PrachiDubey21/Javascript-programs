
//BLOCKING
//Blocking means that a piece of code stops the execution
//of everything else until it finishes.
//JavaScript has only one main thread, so if one task takes 
//a long time, all other tasks must wait.
// Blocking usually happens in synchronous code.

//EVENT LOOP
// The Event Loop is the mechanism in JavaScript 
// that allows it to perform asynchronous, 
// non-blocking operations — even though JavaScript 
// has only one main thread.

// It continuously checks:
// if the call stack is empty
// if there are callbacks waiting in the callback queue
// and then moves those callbacks into the stack when the stack is free
// The event loop basically says:
// If the main thread is free, bring the next waiting task and run it

//CALL STACK
//function call hone pr stack mein unki entry bnti h
//jb function complete ho jata h toh entry remove ho jati h

//BROWSER
// JavaScript itself is single-threaded, 
// but the browser provides extra features that 
// allow JavaScript to behave asynchronously.

// The Event Loop is not part of JavaScript alone — 
// it is part of the JavaScript runtime environment inside the browser.
// The browser provides:
// Web APIs
// Callback Queue
// Microtask Queue
// Event Loop mechanis
// Rendering engine (UI updates)
// These work together with JavaScript.


//CALLBACK QUEUE
// The Callback Queue (also called Task Queue or Message Queue)
//  is a place where asynchronous callback functions wait after
//  their tasks are completed.
// These callbacks wait here until 
// the Event Loop moves them to the Call Stack
//  (when the stack becomes empty).

// Because JavaScript is single-threaded — 
// it can run only one task at a time.

// The Call Stack is where JavaScript actually executes code.
// If it is busy, JavaScript cannot run anything else.
// So
// If the call stack is busy → callback must wait.
// If the call stack is empty → event loop moves callback for execution.


//FLOW of CODE
//Whenever a line of the program is executed,
// its entry first goes into the call stack.
// If that line can run immediately, then after
// execution its entry is removed from the call stack.
// But if a function enters the call stack that cannot 
//execute immediately—for example, an asynchronous
// function—then its task is handed over to the browser API's
//now browser knows that after a certain duration ,
// a function needs to be exceuted
//so browser starts a timer of that duration
//till the timer is running the entry is removed from the call stack
//and we move forward with the program lines
//we dont need to wait 
//when the timer ends the function entry goes to the call back queue
//now here the EVENT LOOP makes sure thst when the callstack becomes empty
//the front entry of the callback queue gets pushed into the callstack
//and then it exceutes

