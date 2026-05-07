// singleton    //yeh literal se nhi bnta constructor se singleton bnega
// Object.create



// object literals
const mySym = Symbol("key1")


const JsUser = {
    name: "picha",
    "full name": "prachi dubey",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "prochi@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

//changing values

JsUser.email = "prachi@chatgpt.com"
// Object.freeze(JsUser)         //locking value
JsUser.email = "prachi@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());