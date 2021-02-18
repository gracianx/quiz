//Create variables to store the quiz questions
let questionArr = [{
    question: "1+1 = "
    ansOne: "3"
    ansTwo: "5"
    ansThree: "2"
},
{
    question: "5+5 = "
    ansOne: "0"
    ansTwo: "10"
    ansThree: "5"
}

//Use mouse-click events to start the quiz
// button when I click it (√)
var button = document.getElementById("#btn")
// ... toggles between the two (√)
var viewView1 = false;
var count = 0;
button.addEventListener("click", function(){
  var view1 = document.getElementById("#view-1")
  var view2 = document.getElementById("#view-2")
  // If viewView1 is true, display "#view-1"
  if (viewView1 === true) {
    // ... it makes box "#view-1" dissappear (√)
    // display view-1
    view1.style.display = "block"
    // hide view-2
    view2.style.display = "none"
  } 
  // Else, display "#view-1"
  else {
    // ... makes another box appear (√)
    view2.style.display = "block"
    view1.style.display = "none"
  }
  // Swap between the viewView1s
  viewView1 = !viewView1
  // ... and keeps track of the count (√)
  count++
  var counter = document.getElementById("counter")
  counter.textContent = count
})
//Write for loops to cycle through quiz questions

//Use key-press events to receive user input in the form of answers to quiz questions

//Create a time limit for the game using time functions

//Write conditional statements to determine wrong and right answers

//Use client-side storage to store high scores

