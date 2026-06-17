// const student = {
//     name : " Alex",
//     Eng : 95,
//     math : 93,
//     phy : 97,
//     getAvg(){
//         let avg =(this.Eng + this.math + this.phy)/3;
//         console.log(`${this.name} got avg marks=${avg}`)
//     }
// };
// student.getAvg()


// const account = {
//     holder : "surah",
//     balance: 5000,
//     deposite(amount){
//         this.balance += amount;
//         console.log(`${this.holder} deposited $${amount}, New this.balance: $${this.balance}`)
//     }
// }
// account.deposite(500)


// const cart = {
// items: ["Apple", "Banana"],
// total: 2,
// addItem(item){
//     this.items.push(item);
//     this.total = this.items.length;
//     console.log(`Added ${item}, Total length is ${this.total}`);
// }
// };
// cart.addItem("mango")


// console.log("Program starts");

// try {
//     console.log(undefinedVariable);
// } catch (error) {
//     console.log("Caught an error :variable not found",error)
// }

// console.log("program continues")

function divide(){
    try {
       if(b ===0 ){
        throw "Cannot divide by zero!";
       } 
       return a/b;
    } catch (error) {
        console.log("Error:",error);
        return null;
    }
}

console.log(divide(10, 2)); // 5
console.log(divide(10, 0));