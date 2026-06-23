// console.log("Before the long calculation");

// for (let index = 0; index < 5000000000; index++) {
    
// }
// console.log("After long calculation")

// let x = 10;
// let y = 20;
// let sum = x + y;
// console.log(sum);

// let name = "Alice"
// let greeting = "Hello,"+ name;
// console.log(greeting)

// console.log("Starting");

// setTimeout(() => {
//     console.log("this appear after 2 seconds");
// }, 2000);

// console.log("Ending")

// function fibonacci(n) {
//     if(n <= 1) return n;
//     return fibonacci(n-1) +fibonacci (n-2);
// }

// console.log("calculating...")
// let result = fibonacci(40);
// console.log("Result:",result);
// console.log("Done!")

// fetch('https://api.example.com/data')
// .then(responce => responce.json())
// .then(data => console.log(data));

// console.log("Request send, but not waiting!")

// console.log("1.Program starts");
// setTimeout(() => {
//     console.log("2. This run after 2 seconds");
// }, 2000);

// console.log("3.Program continues immediately");



// console.log("Open CGC Portal");

// setTimeout(() => {
//    console.log("Header Loaded"); 
// }, 1000);

// setTimeout(() => {
//     console.log("Student data loaded");
// }, 2000);

// setTimeout(() => {
//     console.log("Footer loaded ");
// }, 500);

// console.log("Portal structure ready")

// function submitForm() {
//     console.log("Submitting form...");

//     setTimeout(() => {
//         console.log("Form submitted successfully!");
//         console.log("Redirecting to dashboard...")

//     }, 1500);
//     console.log("Please wait...")
// }
// submitForm()

// function greet(name,callback) {
//     console.log("Hello,"+name);
//     callback();
// }
// function sayGoodbye() {
//     console.log("Goodbye!")
// }
// greet("Alice",sayGoodbye);


// function fetchStudentData(studentId, callback) {
// console.log("Fetching data for student ID:", studentId);
// setTimeout(() => {
//         let studentData = {
//         id : studentId, 
//         name :"Rahul sharma",
//         course : "Computer Science"
//       };

//       console.log("Data fetched sucessfully!");
//       callback(studentData);
//     }, 2000);
// }
// function displayStudent(data) {
//     console.log("Displaying student:");
//     console.log("Name:",data.name);
//     console.log("Course:",data.course);
// }
// fetchStudentData(101,displayStudent);


// function serviceVechile(carModel,phoneNumber) {
//     console.log("received", carModel,"for service");
//     console.log("Customer can leave now");


// setTimeout(() => {
//     console.log("service completed");
//     phoneNumber();
// }, 3000);
// }

// function customerCallback() {
//    console.log("📞Ring ring! Your car is ready!");
//    console.log("Costumer return to pick up car")
// }

// serviceVechile("Honda city",customerCallback)



// function changeColor(color,delay,callback) {
//     setTimeout(() => {
//         document.body.style.backgroundColor = color;
//         console.log("Changed to",color);
//         if(callback) callback();
//     }, delay);
// }

// changeColor("red",1000,() =>{
//     changeColor("orange",1000,() =>{
//         changeColor("green",1000,() =>{
//             changeColor("blue",1000, ()=>{
//                 console.log("All colors done");
//             })
//         })
//     })
// })


// function registerUser(username, callback) {
// setTimeout(() => {
// console.log("User registered:", username);
// callback();
// }, 1000);
// }
// function sendVerificationEmail(callback) {
// setTimeout(() => {
// console.log("Verification email sent");
// callback();
// }, 1000);
// }
// function updateDatabase(callback) {
// setTimeout(() => {
// console.log("Database updated");
// callback();
// }, 1000);
// }
// function sendWelcomeSMS(callback) {
// setTimeout(() => {
// console.log("Welcome SMS sent");
// callback();
// }, 1000);
// }
// // CALLBACK HELL - Nearly impossible to read!
// registerUser("john_doe", () => {
//     sendVerificationEmail(() => {
//         updateDatabase(() => {
//             sendWelcomeSMS(() => {
//                 console.log("Registration complete!");
//             });
//         });
//     });
// });



getData((err, data) => {
    if (err) {
        console.error("Error in getData");
    } else {
        processData(data, (err, result) => {
            if (err) {
                console.error("Error in processData");
            } else {
                saveData(result, (err, saved) => {
                    if (err) {
                        console.error("Error in saveData");
                    } else {
                        console.log("Success!");
                    }
                });
            }
        });
    }
});