let timeEl = document.getElementById("timer");
// document.getElementById("startbtn").addEventListener("click", setTime);
document.getElementById("startbtn").addEventListener("click", startGame);
let answerButtonEl = document.getElementById("answerbtns");
let currentQuestionIndex =0; 
let askQuestion = document.getElementById("questions-box");
let answerPrompt = document.getElementsByClassName("AnswerResult");
let btn1EL = document.getElementById("Btn1");
let btn2EL = document.getElementById("Btn2");
let btn3EL = document.getElementById("Btn3");
let btn4EL = document.getElementById("Btn4");
let nextBtn = document.getElementById("nextbtn");

///function getQuestion


document.getElementById("Btn1").addEventListener("click", startGame);
  // let answer = questionsText[currentQuestionIndex].answer
  // let currentChoice = questionsText[currentQuestionIndex].options[0];
  // if (answer === currentChoice) {
  //   console.log("red")
  //   answerPrompt.textContent = ("Correct")
  // }
  // else{
  //   console.log("blue")
  //   answerPrompt.textContent = ("incorrect")
  // }
 
nextBtn.addEventListener("click", function () {
  currentQuestionIndex++;
  nextQuestion();
});

console.log(nextBtn)

document.getElementById("Btn2").addEventListener("click", function() {

});
document.getElementById("Btn3").addEventListener("click", function() {

});
document.getElementById("Btn4").addEventListener("click", function() {

});
// setInterval(function(){ alert("Popup window!"); }, 1000);
let startButton = document.getElementById("startbtn");

function startGame() {
  let answer = questionsText[currentQuestionIndex].answer
  let currentChoice = questionsText[currentQuestionIndex].options[0];
  // for (i=0; i < questionsText.length; i++) {
  //   if (answer === currentChoice) {
  //     console.log("red")
  //     answerPrompt.textContent = ("Correct")
  //   }
  //   else{
  //     console.log("blue")
  //     answerPrompt.textContent = ("incorrect")
  //   }
    console.log("green")
    nextQuestion()
    setTime()
  }


function selectAnswer() {

}

let questionsText = [
    {
        title: "What is 2+2",
        options: [
            "3",
            "4",
            "5",
            "22",
        ],
        answer: "4",
    },
    {
        title: "what color is the sky",
        options: [
            "blue",
            "red",
            "green",
            "pink",
        ],
        answer: "blue",
    },
    {
        title: "What is the capital of Minnesota",
        options: [
          "Albany",
          "Burbank",
          "Blaine",
          "St. Paul",
        ],
        answer: "St. Paul",
    },
    {
        title: "Example question 4",
        options: [
          "A",
          "B",
          "C",
          "D",
        ],
        answer: "B",
    },
    {
        title: "Example question 5",
        options: [
          "A",
          "B",
          "C",
          "D",
        ],
        answer: "C",
    },
]


function nextQuestion() {
    // get current question from array
    // let currentQuestion = questionsText[currentQuestionIndex];

    //update title question
    // let questionEl = document.getElementById("questions-box");
    // questionEl.textContent = questionsText[0].title;
    // console.log("purple")
    // add questions to buttons
  let answer = questionsText[currentQuestionIndex].answer
  let currentChoice = questionsText[currentQuestionIndex].options[0];
    let questionEl = document.getElementById("questions-box");
    questionEl.textContent = questionsText[currentQuestionIndex].title;
    console.log("grey")
    btn1EL.textContent = questionsText[currentQuestionIndex].options[0]
    btn2EL.textContent = questionsText[currentQuestionIndex].options[1]
    btn3EL.textContent = questionsText[currentQuestionIndex].options[2]
    btn4EL.textContent = questionsText[currentQuestionIndex].options[3]
    if (answer === currentChoice) {
      console.log("red")
      answerPrompt.textContent = ("Correct")
    }
    else{
      console.log("blue")
      answerPrompt.textContent = ("incorrect")
    }
  
    // for (i=0; i < questionsText.length; i++) {
    //   let questionEl = document.getElementById("questions-box");
    //   questionEl.textContent = questionsText[i].title;
    //   console.log("grey")
    //   btn1EL.textContent = questionsText[i].options[0]
    //   btn2EL.textContent = questionsText[i].options[1]
    //   btn3EL.textContent = questionsText[i].options[2]
    //   btn4EL.textContent = questionsText[i].options[3]
    // }


    // for loop to cycle through options array
    // currentQuestion.options.forEach(function(choice, i) {

}























// setInterval(function(){ showTimer(); }, 1000);

// function showTimer () {
//     let start = new Date();
//     let now = new Date().getTime;
//     console.log(start);
//     console.log(start - now);
//     // Set the date we're counting down to
//     // let countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
//     // let seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     // alert("show timer function has been called.");
//     // setInterval(function() { 
      
//     //   console.log((new Date()));
    
//     //   console.log(time);
//       document.querySelector("#timer").textContent = start;
//     //   ; }, 1000);
//     }




// document.getElementById("timer").addEventListener("click", function() {

// }
let secondsLeft = 180;

// Create a function that will initiate the timer and the quiz.
function setTime() {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "time remaining:" + " " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval();
      sendMessage();
    }
  }, 1000);
}

function sendMessage() {
  timeEl.textContent = "Times Up!";
  document.body.appendChild(timeEl);
  clearInterval();

}

// document.body.appendChild(timeEl)

// setTime();

// Create a function that will initiate the timer and the quiz.

// Create a function for each question that makes wrong answers deduct from total time and show wrong and right answers to show correct
