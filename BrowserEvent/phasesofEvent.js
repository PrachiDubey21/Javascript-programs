
//suppose there is a div -> article -> h1
//                                  -> para

//so there is a click event on para
//so event will travel all the way to para 
//this is called capturing phase
//when it will reach to para it is called at target phase
// when it is returning back it is called bubbling phase

//when we use add.eventlistener 
//it by defaults applies on bubbling phase

//we can change the phases 
//by using usecapture value it can run on capturing phase 


