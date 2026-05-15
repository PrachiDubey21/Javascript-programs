// Immediately Invoked Function Expressions (IIFE)

//global scope ke pollution se problem hoti h so 
//global scope ke variable ke pollution ko htane ke liye iife use krte hn

//we need semi colon in iife

//Named iife

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

//-----------------------------------------------------------------

//arrow function

//Simple iife
//Parameter iife

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('prachi')