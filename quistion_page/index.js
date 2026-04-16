// =======================
// Select All Elements
// =======================
// ye code  jab back aaoge loader ko nahi chalne dega :


// window.addEventListener("pageshow", function () {
// loader.style.display = "none";
// });

// question number (Question 1, Question 2 ...)
let quesNum = document.querySelector("#quesNum");

// question text
let question_para = document.querySelector(".question_para");

// all options (A,B,C,D)
let option = document.querySelectorAll(".option");

// buttons
let prev_btn = document.querySelector("#prev");
let next_btn = document.querySelector("#next");


// question counter
let quesCount = document.querySelector("#quesCount");


// =======================
// Variables
// =======================

// current question index
let current_question = 0;

// user score
let user_score = 0;

// store user answers
let user_ans = [];
// for storing answer :

// question counter display
let quesCounter = 1;



// =======================
// Load Question Function
// =======================

function loadcontent() {

  // show question number
  if (quesCounter <= questions.length && quesCounter > 0) {
    quesCount.textContent = "Question " + quesCounter;
  }

  // show question
  question_para.textContent =
    questions[current_question].question;


  // show options
  for (let i = 0; i < option.length; i++) {
    option[i].textContent =
      questions[current_question].options[i];

    // remove previous selection color
    option[i].classList.remove("right");
    option[i].classList.remove("wrong");
  }


  // =======================
  // Restore Previous Answer
  // =======================

  // agar user ne pehle answer select kiya hai
  if (user_ans[current_question] !== undefined) {

    let selectedIndex = user_ans[current_question];

    // correct answer highlight
    if (
      questions[current_question].answer === selectedIndex
    ) {
      option[selectedIndex].classList.add("right");
    }
    else {
      option[selectedIndex].classList.add("wrong");
    }

  }

}



// =======================
// Option Click Event
// =======================

// NOTE:
// Event listener outside loadcontent
// warna multiple event trigger hoga

for (let i = 0; i < option.length; i++) {

  option[i].addEventListener("click", function () {

    // remove old selection
    for (let j = 0; j < option.length; j++) {
      option[j].classList.remove("right");
      option[j].classList.remove("wrong");
    }


    // =======================
    // Score Fix Logic
    // =======================

    // agar pehle correct answer diya tha
    // to score minus karo
    if (
      user_ans[current_question] ===
      questions[current_question].answer
    ) {
      user_score--;
    }


    // store user answer
    user_ans[current_question] = i;
   
  


    // check answer
    if (questions[current_question].answer === i) {

      option[i].classList.add("right");

      user_score++;

    }
    else {
      option[i].classList.add("wrong");
    }

  });

}



// =======================
// Next Button
// =======================

next_btn.addEventListener("click", function () {

  // boundary check
  if (current_question < questions.length - 1) {

    current_question++;
    quesCounter++;

    loadcontent();

  }

});



// =======================
// Previous Button
// =======================

prev_btn.addEventListener("click", function () {

  // boundary check
  if (current_question > 0) {

    current_question--;
    quesCounter--;

    loadcontent();

  }

});



// =======================
// First Load
// =======================

loadcontent();


//-------------------------timer-----------------
 let timerClock = document.querySelector("#timerClock");
let stop;
let totalTime = 30 * 60;
let initialTime = 30 * 60;

function SubmitTest(){
clearInterval(stop);   // ⭐ Fix added

stop = setInterval(function(){
  
let Minutes = totalTime / 60
let Seconds = totalTime % 60

timerClock.textContent= "⌛ Time left "+parseInt(Minutes) +":"+parseInt(Seconds);

if (Seconds < 10){
timerClock.textContent= "⌛ Time left "+parseInt(Minutes) +":0"+parseInt(Seconds);
}

if (Minutes < 5){
timerClock.style.color="red";
}

if (totalTime <= 0){
clearInterval(stop)


}

totalTime--;

} , 1000);

}

SubmitTest();


//---------------------Submit button logic -----------------

let submit_btn = document.querySelector("#submit");

let score = 0;
let notScore = 0;
let not_attemp = 0;


submit_btn.addEventListener("click", function(){

// reset before calculating again
score = 0;
notScore = 0;
not_attemp = 0;

for(let i=0; i<questions.length; i++){

if(user_ans[i] !== undefined && questions[i].answer === user_ans[i]){
score++;
}

else if(user_ans[i] !== undefined && questions[i].answer !== user_ans[i]){
notScore++;
}

else{
not_attemp++;
}

}

localStorage.setItem("score", score);
localStorage.setItem("total", questions.length);
localStorage.setItem("notScore", notScore);
localStorage.setItem("not_attemp", not_attemp);



// ---------- FIXED HERE ----------

// get updated values
let right_ans = Number(localStorage.getItem("score"));
let wrong_ans = Number(localStorage.getItem("notScore"));
let not_attempted = Number(localStorage.getItem("not_attemp"));

let attempted = questions.length - not_attempted;


// update popup text
para.textContent = 
"You have answered " + attempted + " out of " + questions.length + " questions";


notAnswered.textContent = "(" + not_attempted + " Unanswered)";
if (not_attempted===0){
  notAnswered.style.color="green";
}

cardForSubmit.style.display = "block";

clearInterval(stop);



// console.log("BUTTON CLICKED"); // 🔥 check 1
//   console.log("Data before save:", user_ans); // 🔥 check 2

  localStorage.setItem("userAnswers", JSON.stringify(user_ans));

  // console.log("After save:", localStorage.getItem("userAnswers")); // 🔥 check 3

});



// create popup

let cardForSubmit = document.createElement("div");
cardForSubmit.classList.add("submit-popup");
document.body.appendChild(cardForSubmit);

cardForSubmit.style.display = "none";


// icon
let icon = document.createElement("h3");
icon.textContent = "⚠️";
cardForSubmit.appendChild(icon);


// heading
let heading = document.createElement("h1");
heading.textContent = "Submit Test?";
cardForSubmit.appendChild(heading);


// answered question text
let para = document.createElement("p");
cardForSubmit.appendChild(para);


// unanswered question
let notAnswered = document.createElement("p");
notAnswered.style.color = "red";
cardForSubmit.appendChild(notAnswered);


// cancel button
let cancelBtn = document.createElement("button");
cancelBtn.textContent = "Cancel";
cancelBtn.classList.add("cancel-btn");
cardForSubmit.appendChild(cancelBtn);


// submit button
let submitBtn = document.createElement("button");
submitBtn.textContent = "Submit Test";
submitBtn.classList.add("submit-btn");
cardForSubmit.appendChild(submitBtn);



// cancel popup
cancelBtn.addEventListener("click", function () {

cardForSubmit.style.display = "none";

clearInterval(stop);
SubmitTest();

});

// submitBtn.addEventListener("click", function(){
//   window.location.href="/result_page/result.html";
// })
let loader= document.querySelector(".loader-wrapper");

submitBtn.addEventListener("click", function(){

clearInterval(stop);

let timeTaken = initialTime - totalTime;

let minutesTaken = Math.floor(timeTaken / 60);
let secondsTaken = timeTaken % 60;

localStorage.setItem("minutesTaken", minutesTaken);
localStorage.setItem("secondsTaken", secondsTaken);
 


submitBtn.addEventListener("click", function(){

  

  window.location.href = "/result_page/result.html";
});

loader.style.display="flex";
setTimeout(function(){

window.location.href = "/result_page/result.html";

}, 4000);
 


// window.location.href="/result_page/result.html";

});
