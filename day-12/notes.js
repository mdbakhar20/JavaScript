// let btn = document.querySelector("button");

// btn.addEventListener("click",function () {
//     console.log("Button was clicked!");
//     alert("you clicked me!");
// })

// let btn = document.querySelector("button");
// btn.addEventListener("click",function(){
//     console.log("First action");
// })
// btn.addEventListener("click",function () {
//     console.log("Second action");
// })

// let para = document.querySelector("#para");
// let count = 0;
// para.addEventListener("click", function () {
//     count++;
   
//     para.innertext =`You clicked me ${count} times`;
//     console.log(para.innertext)
// });

// let box = document.querySelector("#box");
// box.addEventListener("mouseenter",function () {
//     box.style.backgroundColor = "yellow";
//     console.log("Mouse entered!");
// })

// box.addEventListener("mouseleave", function() {
// box.style.backgroundColor = "white";
// console.log("Mouse left!");
// });

// let hideBtn = document.querySelector("#hidebtn");
// let content = document.querySelector("#content");
 
// hideBtn.addEventListener("click",function () {
//     if(content.style.display === "none"){
//         content.style.display = "block";
//         hideBtn.innerText = "Hide";
//     }else{
//         content.style.display ="none";
//         hideBtn.innerText ="Show";
//     }
// })


// let heading =document.querySelector("h1");
// heading.addEventListener("dblclick",function () {
//     heading.innerText = "You clicked me!";
//     heading.style.color = "red";
//     console.log("you clicked me")
// })

// let card = document.querySelector("#card")
 
// card.addEventListener("mouseenter",function () {
//     card.style.transform = "scale(1.1)";
//     card.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)"

// })

// card.addEventListener("mouseleave",function () {
//     card.style.transform = "scale(1)";
//     card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)"

// })

let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let button = document.querySelector("button");

function change(color) {
    this.style.backgroundColor = "lightblue";
    console.log(this.innerText +"was clicked")
}
h1.addEventListener("click", change);
h2.addEventListener("click", change);
button.addEventListener("click", change);

