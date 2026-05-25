const coding = ["js", "ruby", "java", "python", "cpp"]


//callback

//normal function
// coding.forEach( function (val) {
//     console.log(val);
// } )


//arrow function
// coding.forEach( (item) => {
//     console.log(item);
// } )





//function without call back
// function printMe(item){
//     console.log(item);
// }

//give reference
// coding.forEach(printMe)




// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )




const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )