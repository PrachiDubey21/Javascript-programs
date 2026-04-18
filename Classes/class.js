class person {
  age = 15; // public
  #wt = 65; // private
  ht = 5.8;

  constructor(newAge, newHt) {
    this.age = newAge;
    this.ht = newHt;
  }

  walking() {
    console.log("im walking", this.#wt);
  }

  speaking() {
    console.log("im speaking"); //returns undefined
  }

  set Wt(val) {
    this.#wt = val;
  }

  get fetchWT() {
    return this.#wt;
  }
}

let obj = new person();
console.log(obj.age);
obj.age = 19;
console.log(obj.age);
console.log(obj.speaking());
console.log(obj.ht);
obj.walking();

console.log();
let obj2 = new person(20, 5.9);
console.log(obj2.age);

console.log();

function sayname(namee = "prachi") {
  console.log("my name is :", namee);
}

sayname();
sayname("dubey");

console.log();

//obj
//same can be done with array
function sayvalue(value = { age: 23, wt: 45, ht: 190 }) {
  console.log("my info is :", value);
}

sayvalue();
sayvalue(13);
sayvalue(null);
sayvalue(undefined);

console.log();

function getage() {
  return 190;
}

function utility(name, age = getage()) {
  console.log(name, age);
}
utility("prachi ");

console.log();
