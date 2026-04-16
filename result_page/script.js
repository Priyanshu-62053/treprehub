// const { createElement } = require("react");

window.addEventListener("pageshow", function () {
loader.style.display = "none";
});

let scoreText = document.querySelector("#score");
let totalText = document.querySelector("#total");
//get item score and total question leke aa rha ha dusre html file se 
let score = localStorage.getItem("score");
let total = localStorage.getItem("total");


let minutes = localStorage.getItem("minutesTaken");
let seconds = localStorage.getItem("secondsTaken");

document.querySelector("#time").textContent = minutes + " min " + seconds + " sec";

// scoreText.textContent = "Your Score : " + score;
// totalText.textContent = "Total Questions : " + total;

let toatal_question= document.querySelector("#toatal_question");
toatal_question.textContent=total;

let correct_answer= document.querySelector("#correct_answer");
correct_answer.textContent=  score;
correct_answer.style.color="Green";




let wrong_ans=  total-score;

let wrong_answer= document.querySelector("#wrong_answer");
wrong_answer.textContent= wrong_ans;
wrong_answer.style.color="red";


let your_score= document.querySelector("#your_score");
your_score.textContent= score+"/"+total;
your_score.classList.add("show_score")

// let percentage= (score/total)*100;
let percentage = ((score / total) * 100).toFixed(2);
console.log(percentage);
localStorage.setItem("percentage", percentage);

let scorePercent= document.querySelector("#scorePercent");
scorePercent.textContent="Your Score :"+"\u00A0" +Number( percentage).toFixed(2) +"%";

let percent = document.querySelector("#percent");
percent.textContent=percentage+"%";
percent.classList.add("percent_show");


// calculate gradimg system :
 let grading= document.querySelector("#grading");
 let performence= document.querySelector("#performence");

if (percentage === 100){
  grading.textContent =  "A+";
  performence.textContent = "Outstanding";
  grading.classList.add("grade");
  performence.classList.add("perform");
  performence.style.color="green";
   grading.style.color="green";
}

else if (percentage >= 90){
  grading.textContent = "A";
  performence.textContent =   "Excellent";
  grading.classList.add("grade");
  performence.classList.add("perform");
  performence.style.color="green";
   grading.style.color="green";
}

else if (percentage >= 80){
  grading.textContent =  "B+";
  performence.textContent = "Very Good";
  grading.classList.add("grade");
  performence.classList.add("perform");
  performence.style.color="green";
   grading.style.color="green";
}

else if (percentage >= 70){
  grading.textContent =  "B";
  performence.textContent =  "Good";
  grading.classList.add("grade");
  performence.classList.add("perform");
  performence.style.color="green";
   grading.style.color="green";
}

else if (percentage >= 60){
  grading.textContent =  "C+";
  performence.textContent =  "Above Average";
  grading.classList.add("grade");
  performence.classList.add("perform");
  performence.style.color="orange";
   grading.style.color="orange";
}

else if (percentage >= 50){
  grading.textContent =  "C";
  performence.textContent =   "Average";
  grading.classList.add("grade");
  performence.classList.add("perform");
   performence.style.color="orange";
   grading.style.color="oragnge";
}

else if (percentage >= 40){
  grading.textContent =  "D";
  performence.textContent = "Satisfactory";
  grading.classList.add("grade");
  performence.classList.add("perform");
  performence.style.color="red";
   grading.style.color="red";
}

else{
  grading.textContent =  "fail";
  performence.textContent =  "Keep Trying";
  grading.classList.add("grade");
  performence.classList.add("perform");
  performence.style.color="red";
   grading.style.color="red";
}

let sign_top= document.querySelector("#sign-top");
if (percentage<=50){
  sign_top.textContent="👍";
}
else if (percentage>50 && percentage<=70){
  sign_top.textContent="🏆";
}
else{
   sign_top.textContent="👑";
}

//add lleaderbpard button :

let rankBtn= document.querySelector("#rank-btn");

rankBtn.addEventListener("click", function(){
  window.location.href="/leaderboard_page/learderboard.html";
});





let loader= document.querySelector(".loader-wrapper");

 let review_btn= document.querySelector("#review-btn");
 review_btn.addEventListener("click", function(){
   loader.style.display="flex";
setTimeout(function(){

window.location.href = "/review_questions/review.html";

}, 4000);
  
  // window.location.href="/review_questions/review.html";
 })



