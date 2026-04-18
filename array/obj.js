let student = {
    name: "Prachi",
    age: 20,
    marks: 95
};
console.log(student);

console.log();

let person = new Object();
person.name = "Rahul";
person.age = 25;
console.log(person);

console.log();

function Car(model, year) {
    this.model = model;
    this.year = year;
}
let c1 = new Car("Audi", 2020);
console.log(c1);

console.log();

let  obj = {
    name: "Prachi",
    age: 20,

    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
obj.greet(); 
console.log(obj);

console.log();

//shallow copy
let obj1=obj;
console.log(obj1);

console.log();





