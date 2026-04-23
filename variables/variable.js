//it is block scoped
//it is a dynamically typed language(example - let keyword)
let age=25;
console.log(age);

let name1="prachi";
console.log(name1);

let _ = 90;
let $ = 9;
console.log(_);
console.log($);

let hi = 'r';
console.log(hi);

//not used much as it is not block scoped (cant use as a refrence normally)
//but it is function scoped and globally scoped
var a =50;
console.log(a);

//var can be redeclared
//difficult in debugging
var x =90;
var x = 78;

if(true){
    console.log(a);
}

function solve(){
    var ages=18;
    console.log(ages);
}

solve();
//console.log(ages);

//value can not be changed
const c=45;
console.log(c);

//PRIMITIVE DATA TYPES
//number = 1, 23, 543 , -9 , 0.87
//string = "prachi" , "hi" , "hi hey"
//symbol = '%' , '*' , 'w'
//boolean = true , false
//undefined = no value provided = let age;
//null = null inserted
//big int = (2^53)-1

console.table([age , name1 , _ , $ , x , c ])
















