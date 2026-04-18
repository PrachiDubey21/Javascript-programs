console.log();

//complie time errors can be caught
//in the time of parsing of the js code
//before the execution of the code
// example --- syntax error

//while the code is executing the error found
//is called run time error

// console.log(x) will give error
try {

  console.log(x);

} 
catch (e) {

  //what to do with the error
  console.log(" inside catch block"  , e );

}

//finally block will always run

console.log();

try{
   console.log("hiii");
   console.log(hh);
   console.log("byy");
}
catch(err){

    console.log("error : " , err);

}
finally{

    console.log("byeee");

}

//how to through error yourself (custom error)
//using throw keyword

console.log();

try{

    console.log(prachi);

}
catch(err){
    throw new Error("Behen pehle shi se code likh le :/");
}


console.log();

let i =10;

if(i==10){
     throw new Error("hahahahahhaha");
}