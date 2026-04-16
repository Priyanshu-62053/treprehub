//connects both buttons :

let backTotest= document.querySelector("#backTotest");
backTotest.addEventListener("click", function(){
  
  window.location.href="/quistion_page/test.html";
});
let ViewResult= document.querySelector("#ViewResult");
ViewResult.addEventListener("click", function(){
  window.location.href="/result_page/result.html";
});

// let,s make leaderboard page working :
// get the name of user :
let userName = localStorage.getItem("userName");
console.log(userName);


// get score and total questions :
let score = localStorage.getItem("score");
console.log(score);
let total = localStorage.getItem("total");
console.log(total);

// get the percentage :

let percentage=localStorage.getItem("percentage");
console.log(percentage);

let userData = {
    name: userName,
    score: score,
    total: total,
    percentage: percentage
};
console.log(userData);

let leaderboard = localStorage.getItem("leaderboard");
console.log(leaderboard);



if (leaderboard === null) {
    leaderboard = [];
} else {
    leaderboard = JSON.parse(leaderboard);
}
leaderboard.push(userData);
localStorage.setItem("leaderboard", JSON.stringify(leaderboard));

leaderboard.sort(function(a, b){
    return b.percentage - a.percentage;
});
leaderboard = leaderboard.slice(0, 10);

