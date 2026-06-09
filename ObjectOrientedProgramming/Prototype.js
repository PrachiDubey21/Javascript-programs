// let myName = "prachi     "
// let mychannel = "chai     "

// console.log(myName.trueLength);




let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}



Object.prototype.prachi = function(){
    console.log(`prachi is present in all objects`);
}

Array.prototype.heyprachi = function(){
    console.log(`prachi says hello`);
}

// heroPower.prachi()            //works
// myHeros.prachi()              //works

// myHeros.heyprachi()            //works
// heroPower.heyprachi()          //doesnt work
 



                               // inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,

    //syntax
    __proto__: TeachingSupport
}

Teacher.__proto__ = User




// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"prachi".trueLength()
"iceTea".trueLength()