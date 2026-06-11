// let age = 23;
// let name = "Tony Stark";
// let isStudent = true
// let score;
// console.log(score
// score = 95;
// console.log(score
// let age = 23; //integer
// let price = 99.99; //decimal number 
// let temperature = -15; //negative number
// let distance = 1.5e6; //scientific notation(1,500,000
// //strin
// let name = "Tony Stark"; // double quotes
// let greeting = 'Hello World'; // single quotes
// let message = `${name}`; // Template Literals (backticks
// let age = 23
// let info = `i am ${age} years old`;
// let isStudent = true;
// let isLoggedIn = false;
// let hasPermission = true;

// if(isStudent){
//     console.log("Student discount applied")
// }

// let id1 = Symbol('id');
// let id2 = Symbol('id');
// console.log(id1 === id2); // false - each symbol is unique


// let sum = 5 + 3; // 8
// let result = 10 + 20 + 5; // 35
 
// let difference = 10 - 3;

// let quotient = 20 / 4; // 5
// let half = 10 / 2; // 5
// let decimal = 7 / 2; // 3.5

// let remainder = 12 % 5; // 2 (12 ÷ 5 = 2 remainder 2)
// let check = 10 % 3; // 1 (10 ÷ 3 = 3 remainder 1)
// let even = 8 % 2; // 0 (no remainder - 8 is even)
// // Practical use: Check if a number is even or odd
// let number = 7;
// if (number % 2 === 0) {
// console.log("Even");
// } else {
// console.log("Odd"); // This will execute
// }

// let squared = 5 ** 2; // 25 (5 squared)
// let cubed = 2 ** 3; // 8 (2 cubed)
// let power = 10 ** 3; // 1000 (10 to the power of 3)

// let result = 5 + 3 * 2; // 11 (not 16!)
// // Multiplication happens first (operator precedence)
// let complex = (5 + 3) * 2; // 16
// // Parentheses force addition first

// let firstName = "Tony";
// let lastName = "Stark";
// let fullName = firstName + " " + lastName; // "Tony Stark"
// let age = 23;
// let message = "I am " + age + " years old"; // "I am 23 years old"
// console.log(message)

// let x = NaN;
// console.log(x + 1); // NaN
// console.log(x * 5); // NaN
// console.log(x / 2); // NaN
// console.log(x -- 10); // NaN

// console.log(typeof NaN); // "number"


// console.log(NaN === NaN); // false
// console.log(NaN == NaN); // false
// To check if a value is NaN, use:
// console.log(isNaN(NaN)); // true
// console.log(Number.isNaN(NaN)); // true (more reliable)

// let value = 0 / 0;
// Method 1: isNaN() - converts value to number first
// console.log(isNaN(value)); // true
// Method 2: Number.isNaN() - doesn't convert (recommended)
// console.log(Number.isNaN(value)); // true
// Why Number.isNaN() is better:
// console.log(isNaN("hello")); // true (converts "hello" to number first)
// console.log(Number.isNaN("hello")); // false (doesn't convert)

// 

// let age = 20;
// age += 5; // Same as: age = age + 5
// console.log(age); // 25
// // Equivalent to:
// let score = 100;
// score = score + 50; // 150
// // vs.
// score += 50; // 150 (shorter!)

// let balance = 1000;
// balance -= 200; // Same as: balance = balance - 200
// console.log(balance); // 800

// //Accumulating a total
// let total = 0;
// total += 100; // Add first item
// total += 250; // Add second item
// total += 75; // Add third item
// console.log(total); // 425
// // Doubling a value multiple times
// let value = 5;
// value *= 2; // 10
// value *= 2; // 20
// value *= 2; // 40