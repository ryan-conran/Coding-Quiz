let timeEl = document.getElementById("timer");
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
 
nextBtn.addEventListener("click", function () {
  currentQuestionIndex++;
  nextQuestion();
});


document.getElementById("Btn1").addEventListener("click", function() {
  

});
// document.getElementById("Btn2").addEventListener("click", function() {

// });
// document.getElementById("Btn3").addEventListener("click", function() {

// });
// document.getElementById("Btn4").addEventListener("click", function() {

// });
let startButton = document.getElementById("startbtn");

function startGame() {
    console.log("green")
    nextQuestion()
    setTime()
  }


function selectAnswer(event) {
  let answer = questionsText[currentQuestionIndex].answer
  let currentChoice = questionsText[currentQuestionIndex].options[0];
  event.preventDefault();
     if (answer === currentChoice) {
      answerPrompt.textContent = ("Correct")
    }
    else{
      answerPrompt.textContent = ("incorrect")
    }
  

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
      answerPrompt.textContent = ("Correct")
    }
    else{
      answerPrompt.textContent = ("incorrect")
    }

}

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
