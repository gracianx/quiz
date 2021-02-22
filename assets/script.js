//Create variables to store the quiz questions
let counterEl = document.getElementById("counter");

let startBtnEl = document.getElementById("startBtn");

let questionsEl = document.getElementById("questions");

let scoreEl = document.getElementById("score");

let answersEl = document.getElementById("answers");

let startQuizEl = document.getElementById("beginHere")

let quizEl = document.getElementById("quiz")

let questions = [{
    question: "What tag is used to define an interactive field where users can enter data?",
    answers: ["<p>", "<input>", "<br>"],
    correctAnswer: "<input>"
},{
    question: "How do you add space around content using CSS?",
    answers: ["<padding>", "<space>", "<space-around>"],
    correctAnswer: "<padding>"

},{
  question: "What statement ends a loop?",
  answers: ["Conditional statement", "//STOP LOOP", "Close loop"],
  correctAnswer:"Conditional statement"
  
}];

for (i = 0; i < questions.length; i++);


//Use mouse-click events to start the quiz

startBtnEl.addEventListener("click", function countdown(minutes) {
   let seconds = 75;
  let mins = minutes
  function tick() {
      var counter = document.getElementById("counter");
      var current_minutes = mins-1
      seconds--;
      counter.innerHTML = "Time and Score: " + String(seconds);
      if( seconds > 0 ) {
          setTimeout(tick, 1000);
      } else {
          if(mins > 1){
              countdown(mins-1);           
          }
      }
  }
  tick();
});

document.addEventListener("click", function startQuiz() {
  let startQuizEl = document.getElementById("beginHere");
  document.getElementById("beginHere").hidden = true;
  document.getElementById("quiz").hidden = false;
}, false); 

  //Write for loops to cycle through quiz questions
  let txt = "";
questions.forEach(function(showQuestion) {
  document.getElementById("questionEl").innerHTML = txt;
       } ); 
    
  //Use key-press events to receive user input in the form of answers to quiz questions
  
  //Create a time limit for the game using time functions
  
  //Write conditional statements to determine wrong and right answers
  
  //Use client-side storage to store high scores