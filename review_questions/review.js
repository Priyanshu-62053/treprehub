let score = localStorage.getItem("score");
let total = localStorage.getItem("total");

console.log(score);
console.log(total);

let minutes = localStorage.getItem("minutesTaken");
let seconds = localStorage.getItem("secondsTaken");

let score_details=document.querySelector("#score");
score_details.textContent=score+" / "+total;

// show wrong score :
let wrong_ans=  total-score;
let wrong_answer= document.querySelector("#wrong_answer");
wrong_answer.textContent= wrong_ans;
// wrong_answer.style.color="red";


// show acuracy 

// pahle se percentage ko store karke rakhe the usko bas get kar liye  : simple :
let percentage = Number(localStorage.getItem("percentage"));
let accuracy=document.querySelector("#accuracy");
accuracy.textContent=percentage+"%";
console.log(percentage);

let userName = localStorage.getItem("userName");
let user_name= document.querySelector("#user_name");

user_name.textContent=userName;



let userAnswers = JSON.parse(localStorage.getItem("userAnswers"));
console.log(userAnswers);



let questions = JSON.parse(localStorage.getItem("questions"));

let count = 0;

// for (let i = 0; i < questions.length; i++) {

//     if (userAnswers[i] !== null) {

//         if (userAnswers[i] !== questions[i].answer) {
//             count++;
//            console.log( questions[i].question);
//         }}}

// console.log("Wrong Answers:", count);



// let questions = JSON.parse(localStorage.getItem("questions"));
// let userAnswers = JSON.parse(localStorage.getItem("userAnswers"));


let wrongQuestions = [];




for (let i = 0; i < questions.length; i++) {

   


    if (userAnswers[i] !== null && userAnswers[i] !== questions[i].answer) {
  count++;
        wrongQuestions.push({
            question: questions[i].question,
            options: questions[i].options,
            Answer: questions[i].answer,
            userAnswer: userAnswers[i],
            explanation: questions[i].explanation
        });

    }
}


let question_para= document.querySelector("#question_para");

// se;ect all option :
let option1= document.querySelector("#option1");
let option2= document.querySelector("#option2");
let option3= document.querySelector("#option3");
let option4= document.querySelector("#option4");

let incorrect_opt= document.querySelector("#incorrect-option");
let correct_option= document.querySelector("#correct-option");
let explaination= document.querySelector("#explaination");

let currentIndex = 0;
let increseQuesNum= 1;

let quesNum= document.querySelector("#quesNum");


function loadWrongQuestion(index) {

      quesNum.textContent=increseQuesNum;
    question_para.textContent = wrongQuestions[index].question;

    option1.textContent = wrongQuestions[index].options[0];
    option2.textContent = wrongQuestions[index].options[1];
    option3.textContent = wrongQuestions[index].options[2];
    option4.textContent = wrongQuestions[index].options[3];

    incorrect_opt.textContent = 
        wrongQuestions[index].options[wrongQuestions[index].userAnswer];

    correct_option.textContent = 
        wrongQuestions[index].options[wrongQuestions[index].Answer];

    explaination.textContent = wrongQuestions[index].explanation;
}

loadWrongQuestion(currentIndex);

  let next_btn= document.querySelector("#next-btn");

  next_btn.addEventListener("click", function(){
    if (currentIndex < wrongQuestions.length - 1) {
        currentIndex++;
        increseQuesNum++;
        loadWrongQuestion(currentIndex);
        
    }

  });

let prev_btn= document.querySelector("#prev-btn");

prev_btn.addEventListener("click", function(){
if (currentIndex > 0) {
        currentIndex--;
        increseQuesNum--;
        loadWrongQuestion(currentIndex);
        
    }
});
    











console.log("count of wrong questions : ", count );
// localStorage.setItem("wrongQuestions", JSON.stringify(wrongQuestions));
for (let key in wrongQuestions) {
    console.log(key);        // name, age, skill
    console.log(wrongQuestions[key]);   // Priyanshu, 22, Frontend
}