// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

//NOT PREDICTABLE

// console.log("2" > 1);         //true
// console.log("02" > 1);        //true



//the reason is that an equality check == and a comparison 
// > < <= >= works differently
//comparisons convert null to a number , treating it as 0

console.log(null > 0);         //false
console.log(null == 0);        //false
console.log(null >= 0);        //true


//all false
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


//Strict check
// === 
console.log("2" === 2);    //false