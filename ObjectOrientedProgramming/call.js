function SetUsername(username){

    //complex DB calls
    this.username = username
    console.log("called");

}

function createUser(username, email, password){

    //for holding the reference (this for current reference)
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password

}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);