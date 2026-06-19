// let numbers = [10, 20, 30, 40];
// numbers.forEach((num) => {
// console.log(num);
// });
// console.log("hello")



// let prices = [99, 149, 299];
// prices.forEach((price) => {
// console.log(`$${price}`);});


// let fruits = ["Apple", "Banana", "Mango"];
// fruits.forEach((fruit,index) =>{
// console.log(`${index + 1}, ${fruit}`)
// }) 

// let scores = [85, 90, 78, 92];
// let total = 0;
// scores.forEach((score) => total += score);
// console.log(` total: ${total}`)


// let names = ["alice", "bob", "charlie"];
// let capitalizedNames = [];
// names.forEach((name) => capitalizedNames.push(name.toUpperCase()));
// console.log(capitalizedNames)


// array = ["alice ","bob","charlie"]
// let newArray = array.map((element) => {
//     return transformedElement;
// })


// let num = [1,2,3,4];
// let doubled = num.map((nums) => nums*2);
// console.log(doubled);
// console.log(num)


//  let names = ["alice", "bob", "charlie"];
//  let capital = names.map((name) => name.toLowerCase());
// console.log(capital)

// let students = [
// { name: "John", age: 20 },
// { name: "Sarah", age: 22 },
// { name: "Mike", age: 21 }
// ];

// let studentName = students.map((student) => student.name);
// console.log(studentName)


// let prices = [100, 200, 150];
// let pricesWithTax = prices.map((price) => price*1.18);
// console.log(pricesWithTax)


// let items = ["Home", "About", "Contact"];
// let menuItem = items.map(item => `<li>${item}</li>`);
// console.log(menuItem)


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let evens = numbers.filter((num) => num % 2 === 0);
// console.log(evens);


// let grades = [45, 78, 89, 34, 92, 56];
// let passing = grades.filter((grade) => grade >= 50);
// console.log(passing)


// let words = ["hi", "hello", "bye", "goodbye"];
// let longWords = words.filter((word) => word.length >3);
// console.log(longWords)


// let people = [
// { name: "John", age: 17 },
// { name: "Sarah", age: 22 },
// { name: "Mike", age: 15 },
// { name: "Emma", age: 25 }
// ];
// let adults = people.filter((person) => person.age >= 18);
// console.log(adults);


// let cart = ["apple", "banana", "apple", "mango", "apple"];
// let withoutApples = cart.filter((item) => item !== "apple");
// console.log(withoutApples); 


// let ages = [20, 25, 18, 30];
// let allAdult = ages.every((age) => age >= 18)
// console.log(allAdult)


// let ages = [20, 25, 17, 30];
// let hasTeenager = ages.some((age) => age < 18);
// console.log(hasTeenager); // true