//unary
let a = 8;
console.log(a++);
console.log(++a);

console.log();
let b = 8;
console.log(b--);
console.log(--b);

//airthmetic
console.log();
console.log(4 + 5);
console.log(8 - 9);
console.log(2 % 3);
console.log(2 / 3);
console.log(6 * 8);
console.log(2 ** 5); // 2 ki power b

//comparison
console.log();
//Strict equality checks both value AND data type.
console.log(5 === 5); // true
console.log(5 === "5"); // false
console.log(true === 1); // false
console.log(null === undefined); // false
console.log(5 !== "5"); // true

//Loose equality checks only the value, not the type.
console.log();
console.log(5 == "5"); // true
console.log(0 == false); // true
console.log("" == 0); // true
console.log(null == undefined); // true
console.log(5 != "5"); // false

//ternary
console.log();
console.log(5 > 6 ? "yes" : "no");
console.log(5 < 6 ? "yes" : "no");

//logical
console.log();
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);

console.log();
console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);

console.log();
console.log(!true);
console.log(!false);

//working with non booleans
console.log();
// falsey(false value) = null , undefined , false , empty string , 0 , NaN
//truthy(true value) = anything which is not falsy
console.log(true && "prachi"); // truth
console.log(false || 6); // truth

//bitwise
console.log();
// Bitwise AND (&)
console.log("AND (&):");
console.log(5 & 3);     // 1

// Bitwise OR (|)
console.log("\nOR (|):");
console.log(5 | 3);     // 7

// Bitwise XOR (^)
console.log("\nXOR (^):");
console.log(5 ^ 3);     // 6

// Bitwise NOT (~)
console.log("\nNOT (~):");
console.log(~5);        // -6

// Left Shift (<<)
console.log("\nLeft Shift (<<):");
console.log(5 << 1);    // 10

// Right Shift (>>)
console.log("\nRight Shift (>>):");
console.log(10 >> 1);   // 5

// Unsigned Right Shift (>>>)
console.log("\nUnsigned Right Shift (>>>):");
console.log(10 >>> 1);  // 5
console.log(-10 >>> 1); // Large positive number
