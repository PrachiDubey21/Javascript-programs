const promiseOne = new Promise(function(resolve, reject){

    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)

})

//connected with resolve
promiseOne.then(function(){
    console.log("Promise consumed");
})





new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})





const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        //passing object
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

//already connected with resolve
promiseThree.then(function(user){
    console.log(user);
})







const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "prachi", password: "215"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour.then((user) => {
               console.log(user);
               return user.username})
               .then((username) => {
               console.log(username);})
               .catch(function(error){
               console.log(error);})
 .finally(() => console.log("The promise is either resolved or rejected"))








const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "326"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

//exactly like .then().catch()
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()





//This Code Takes Time

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//        // console.log(respone);

//         const data = await response.json()
//         console.log(data);

//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()


//thenable
fetch('https://api.github.com/users/PrachiDubey21')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all is also available