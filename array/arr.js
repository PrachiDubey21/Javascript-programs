let arr = [10, 20, 30, 40];
console.log(arr);
console.log(arr[3]);

console.log();

let arry = new Array(10, 20, 30);
console.log(arry);

console.log();

console.log(arry[0]);
arry[0] = 56;
console.log(arry[0]);

console.log();

console.log(arry.length);

console.log();

arry.push(23); // add at back
arry.push(45);
console.log(arry);
arry.pop(); //remove from back
console.log(arry);

console.log();

arry.unshift(8); // add at start
console.log(arry);
arry.shift(); // remove from front
console.log(arry);

console.log();

console.log(arry);
console.log(arry.indexOf(23));

console.log();

console.log(arry);
console.log(arry.includes(23));

console.log();

console.log(arry);
console.log(arry.splice(2, 1)); // returns and remove 1 element form index 2

console.log();

console.log(arry);
console.log(arry.splice(2, 1, "prachi")); // write prachi in place of that too

console.log();

console.log(arry);
console.log(arry.splice(2, 0, "hi")); // don't remove only insert

console.log();

console.log(arry);
console.log(arry.slice(1, 3)); // returns a part of subarray

console.log();

let arr1 = [1, "hello", "a", 1.4, -0.9];
console.log(arr1);

console.log();

let arr2 = [1, 2, 3, 4];
let result = arr2.map((num) => num * 2);
console.log(result); // [2, 4, 6, 8]

console.log();

let arr3 = [1, 2, 3, 4, 5, 6];
let res = arr3.filter((num) => num % 2 === 0);
console.log(res); // [2, 4, 6]

console.log();

let arr4 = [1, 2, 3, 4];
let sum = arr4.reduce((acc , curr) => acc + curr, 0);
console.log(sum); // 10
// Start: acc = 0
// Step 1: 0 + 1 = 1
// Step 2: 1 + 2 = 3
// Step 3: 3 + 3 = 6
// Step 4: 6 + 4 = 10

console.log();

let arr5 = [10, 2, 30];
arr5.sort((a, b) => a - b);
console.log(arr5); // [2, 10, 30]

console.log();

arr5.sort((a, b) => b - a );
console.log(arr5);

console.log();

let arr6 = [1,7,5,3,4];
arr6.sort();
console.log(arr6)

console.log();

const arr7 = [3, 7, 10, 15, 20];
const firstEven = arr7.find(num => num % 2 === 0);
console.log(firstEven);   // 10

console.log();


