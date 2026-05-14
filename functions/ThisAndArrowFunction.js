const user = {
    username: "prachi",
    price: 999,

    welcomeMessage: function() {
        //this -> reffering current context
        console.log(`${this.username} , welcome to website`);

        //whole object
        console.log(this);
    }

}

//IMP
//global object in browser is window object

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

//---------------------------------------------------------------


// function chai(){
//     let username = "prachi"

       //we cant use this in function
//     console.log(this.username);
// }

// chai()

//--------------------------------------------------------

// const chai = function () {
//     let username = "prachi"

       //we cant use this in function
//     console.log(this.username);
// }

//--------------------------------------------------------------

const chai =  () => {
    let username = "picha"

    //we cant use this in arrow function
    console.log(this);
}

// chai()

//---------------------------------------------------------

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "picha"})


console.log(addTwo(3, 4))

//---------------------------------------------------------------------

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()