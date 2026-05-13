//var c = 300

let a = 300

if (true) {
    let a = 10
    const b = 20
    //var c = 30
    // console.log("INNER: ", a);
}


// console.log(a);
// console.log(b);
// console.log(c);

//(core scope) (like inspect consolle) and (code enviornment) (terminal)
// global scope are different


//nested scope
function one(){
    const username = "prachi"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //not accessible
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "prachi"
    if (username === "prachi") {
        const website = " youtube"
        // console.log(username + website);
    }
    //not accessible
    // console.log(website);
}

//not accessible
// console.log(username);


// ------------------------------ interesting -----------------------------------


console.log(addone(5))

function addone(num){
    return num + 1
}

//Hoisting
addTwo(5)
const addTwo = function(num){
    return num + 2
}