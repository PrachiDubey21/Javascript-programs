//In js math.pi = 3.14
//can it be turned into 3 or 4? why or why not?



//it cant be overwrite

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);



//the value cant be changed because here the writable is false and cant be changed 
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);


//--------------------------------------------------------------------------------


//For creating object

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}
 
                                       //object , descripter property
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));






for (let [key, value] of Object.entries(chai)) {

    //this check is so that it only prints values and not functions of objects
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}