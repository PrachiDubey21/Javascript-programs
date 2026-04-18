//without parameter
function hello(){
    console.log("hello");
}
hello();

console.log();

//with parameter and return
function add(a, b) {
  return a + b;
}
console.log(add(5, 3)); 

console.log();

//FUNCTION EQUATED AS A VARIABLE

//using let
let ans  = function(a,b){
    return a*b;
}
console.log(ans(5,10));

console.log();

//with arrow
const square = (n) => n * n;
console.log(square(5)); 

console.log();

//with arrow and with multiple statements
const greet = () => {
  console.log("Hello!");
};
greet();

console.log();

//with arrow and with multiple statements and with parameters
const power = (n , p) =>{
    // let q=1;
    // for(let i=1;i<=p;i++){
    //     q=q*n;
    // }
    // return q;

    return n**p;
};
console.log(power(2,5));

console.log();




