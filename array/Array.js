// array
//array copy operation make shallow copies

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)     //inserts element at first and shiftes the next elements +1
// myArr.shift()        //elements gets shiftes by -1

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

//converts the element of arr into a string separated by ","
// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

//returns a section of element (last index is not included)
const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


//returns a section of element and deletes from original array
// (last index is included)
const myn2 = myArr.splice(1, 3)

console.log("C ", myArr);
console.log(myn2);