// part A

// problem 1

// firstName // valid becouse in FSD we can use camelCase for variable names
// 2nd name // invalid becouse variable names cannot start with a number
// user_email // valid becouse in FSD we can use snake_case for variable names
// total-price //invalid becouse variable names cannot contain hyphens
// $amount // valid becouse variable names can start with a dollar sign
// my variable // invalid becouse variable names cannot contain spaces

// problem 2

// let userName = "Alice";
// let place1st = 1000 ;
// let total_cost = 250;
// let userAge = 25;

// problem 3

// let email = "john@example.com";
// let isLoggedIn = true;
// const maxAttempts = 3;
// let stidentFinalGrade = 85;
// let price$ = 99.99;

// part B

// Question 1:

// let isItRaining = false;
// let age = prompt("Enter your age:");
// if(age >= 18){
//     console.log(true);
// }
// else{
//     console.log(false);
// }


// problem 2

// let isPasswordMatch = false;
// let language = "JavaScript";
// console.log(language[0]);
// console.log(language[4]);
// console.log(language[9]);
// console.log(language.length);

// problem 7


// let message1 = "double quotes";
// let message2 = "It's a sunny day";
// let message3 = "Hello!";

// problem 8

// let firstName = "John";
// let lastName = "Doe";
// let fullName = firstName + " " + lastName;
// console.log(fullName);
// let greeting = `Hello, ${fullName}!`;
// console.log(greeting);

// problem 9

// let name = "Alice";
// let score = 95;
// let message = `Student ${name} scored ${score} points`;
// console.log(message);

// problem 10

// let cityName = "Paris";
// let temperature = 25;
// let weather = `the Weather in ${cityName} is ${temperature} degrees`;
// console.log(weather);

// problem 11

// console.log(10 > 5);  // true
// console.log(3 < 2);   // false
// console.log(5 >= 5);  // true
// console.log(8 <= 10); // true
// console.log(7 != 7); // false
// console.log(15 > 20);//false

// problem 12

// let age = 18;

// console.log(age>=18);

// let temperature = 30;
// console.log(temperature > 25);
 
// let score = 75;
// console.log(score >= 60);

// part G

// problem 14

// console.log(5==5);      //true
// console.log(5===5);     //true
// console.log(5=="5");    //true
// console.log(5==="5");   //false
// console.log(true==1);   //true
// console.log(true===1);  //false
// console.log(false==0);  //true
// console.log(false===1); //false


// problem 16

// console.log('a' > 'A');            // true
// console.log('b' < 'c');            // true
// console.log('apple' < 'banana');   // true
// console.log('Z' < 'a');            // true
// console.log("10" < "2");           // true // becouse it compare first character of each string and "1" is less than "2"


// problem 17

// let str1 = "Hello";
// let str2 = "HELLO";
// console.log(str1.toLowerCase() == str2.toLowerCase());


// part 1

// let userName = prompt("Enter your name:");
// let hour =  prompt("Enter the current hour (0-23):");
// let greeting = `good ${hour < 12 ? "morning": hour <18 ? "Afternoon" : "evening" } ${userName}!`;
// console.log(greeting);

// problem 19

// let userAge = 16;
// let minimumAge = 18;
// let isOldENough = userAge >= minimumAge;
// console.log(isOldENough);

// problem 21

// let productName = "Wireless Mouse";
// let productPrice = 29.99;
// let inStock = true;

// let description = `"product: ${productName} | price: ${productPrice} | in Stock: ${inStock}"`;
// console.log(description);


// problem 22

// Code with errors:
// let Place1st = "Gold";
// let userName = "Alice";
// let totalCost = 100;

// let age = prompt("Enter your age:");
// if (age = 18) {
//     console.log("You can vote");
// }else  {console.log("you cannot vote")
// }


// problem 24

// let favPlayer = "abhishek";
// let userInput = prompt("enter player name");
// while(true){
//     if(userInput.trim().toLocaleLowerCase() === favPlayer){
//         console.log("you guessed ist right");
//         break;
//     }

//     if (userInput === "quit") {
//         console.log("you quit the game");
//         break;
//     }

//     userInput = prompt("enter player name again");
// }

// problem 25

let passWord = "Pass123";
let isLongEnough = passWord.length >= 6;
let startWithUppercase = passWord[0] >= "A" && passWord[0] <= "Z";
let endWithNumber = passWord[passWord.length -1] >= "0" && passWord[passWord.length -1] <= "9";
console.log("Password is long enough:", isLongEnough);
console.log("Starts with uppercase:", startWithUppercase);
console.log("Ends with number:", endWithNumber);