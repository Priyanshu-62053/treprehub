window.addEventListener("pageshow", function () {
loader.style.display = "none";
});

// leaderboard button :
let startTest = document.querySelector("#startTest");

startTest.addEventListener("click", function () {

if(document.querySelector(".overlay")) return;

// overlay
let overlay = document.createElement("div");
overlay.classList.add("overlay");
document.body.appendChild(overlay);

// popup
let cardForName = document.createElement("div");
cardForName.classList.add("name-popup");
overlay.appendChild(cardForName);


// title
let cardPara = document.createElement("h2");
cardPara.textContent = "Enter Your Full Name";
cardForName.appendChild(cardPara);


// input
let inputField = document.createElement("input");
inputField.type = "text";
inputField.placeholder = "Enter your name";
inputField.classList.add("name-input");
cardForName.appendChild(inputField);


// button
let cardBtn = document.createElement("button");
cardBtn.textContent = "Start Test";
cardBtn.classList.add("start-btn");
cardForName.appendChild(cardBtn);

//  if(inputField.value.trim().length===0){
//   alert("First Enter your Name to Coninue");
//  }
// else{

 let loader= document.querySelector(".loader-wrapper");
cardBtn.addEventListener("click", function(){

let userName = inputField.value;
 

localStorage.setItem("userName", userName);

loader.style.display="flex";
setTimeout(function(){

window.location.href = "/quistion_page/test.html";

}, 4000);

});
// }



});


let menu = document.getElementById("menu-toggle");
let nav = document.getElementById("nav-links");

menu.addEventListener("click", function(){
nav.classList.toggle("active");
});

