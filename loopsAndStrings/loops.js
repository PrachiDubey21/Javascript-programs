for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log();

let j = 1;
while (j <= 2) {
  console.log(j);
  j++;
}

console.log();

let k = 1;
do {
  console.log(k);
  k++;
} while (k < 5);

console.log();

//The for...in loop is used to iterate over the keys of an object.
let colors = ["red", "green", "blue"];
for (let index in colors) {
  console.log(index, colors[index]);
}

console.log();

//Gives values directly
let color = ["red", "green", "blue"];

for (let value of colors) {
  console.log(value);
}

console.log();

//forEach is a built-in array method that runs a function 
//for every element in the array.
let colorr = ["red", "green", "blue"];
colors.forEach(function(color) {
    console.log(color);
});

console.log();

let nums = [1, 2, 3, 4];
nums.forEach((n) => {
    console.log(n * 2);
});


