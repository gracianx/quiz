
let counterEl = document.getElementById("counter");

let startBtnEl = document.getElementById("startBtn");

let questionsEl = document.getElementById("questions");

let scoreEl = document.getElementById("score");

let choicesEl = document.getElementById("choices");

let startQuizEl = document.getElementById("beginHere")

let quizEl = document.getElementById("quiz")

//Use mouse-click events to start the quiz

startBtnEl.addEventListener("click", function countdown(minutes) {
   let seconds = 45;
  let mins = minutes
  function tick() {
      let counter = document.getElementById("counter");
      let current_minutes = mins-1
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



document.addEventListener("DOMContentLoaded" + "click", function startQuiz() {
  if (quizEl.style.display === "block") {
    quizEl.style.display = "none";
  }else{
    quizEl.style.display = block;
  }
 
  questionTitleEl.addEventListener("click", function renderQuestion()
  {
    let activeQuestion = questions[activeQuestionIndex];

    let questionTitleEl = document.getElementById("title");
    questionTitleEl.textContent = activeQuestion.title;
    answersEl.innerHTML ="";
    activeQuestion.answers.forEach(function(answer, i) {
      let answerNode = document.createElement("button");
      answerNode.setAttribute("class", "answer");
      answerNode.setAttribute("value", answer);
  
      answerNode.textContent = i + 1 + ". " + answer;
      answerNode.onclick = questionClick;
      answersEl.appendChild(answerNode);
  });

  
  

  //Write for loops to cycle through quiz questions

  //Use key-press events to receive user input in the form of answers to quiz questions
  
  //Create a time limit for the game using time functions
  
  //Write conditional statements to determine wrong and right answers
  
  //Use client-side storage to store high scores
});

});

});