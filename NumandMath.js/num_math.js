//implicitly datatype defined
const score = 400
// console.log(score);

//explicitly datatype defined
const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);     //3
// console.log(balance.toFixed(1));            //100.0

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4));    //123.9

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));     //10,00,00(indian standard)




// ------------------------------- Maths ---------------------------------------

// console.log(Math);                                    
// console.log(Math.abs(-4));                            // 4
// console.log(Math.round(4.6));                         // 5
// console.log(Math.ceil(4.2));                          // (top) 5
// console.log(Math.floor(4.9));                         // (bottom) 4
// console.log(Math.min(4, 3, 6, 8));                    // 3
// console.log(Math.max(4, 3, 6, 8));                    // 8


//Random numbers
console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);


//Generic formula for getting any random number between min and max
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)