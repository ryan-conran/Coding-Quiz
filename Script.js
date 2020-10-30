let timeEl = document.getElementById("timer");
document.getElementById("startbtn").addEventListener("click", startGame);
let answerButtonEl = document.getElementById("answerbtns");
let currentQuestionIndex =0; 
let askQuestion = document.getElementById("questions-box");
let answerPrompt = document.getElementById("AnswerResult");
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
  selectAnswer(0)
});
document.getElementById("Btn2").addEventListener("click", function() {
  selectAnswer(1)
});
document.getElementById("Btn3").addEventListener("click", function() {
  selectAnswer(2)
});
document.getElementById("Btn4").addEventListener("click", function() {
  selectAnswer(3)
});
let startButton = document.getElementById("startbtn");

function startGame() {
    console.log("green")
    nextQuestion()
    setTime()
  }


function selectAnswer(clicked) {
  let answer = questionsText[currentQuestionIndex].answer
  let currentChoice = questionsText[currentQuestionIndex].options[clicked];
  console.log(answerPrompt)
     if (answer === currentChoice) {
      answerPrompt.textContent = ("Correct")
    }
    else{
      answerPrompt.textContent = ("incorrect")

    }
  console.log(answerPrompt)
  console.log(answer);
  console.log(currentChoice);

}

let questionsText = [
    {
        title: "What symbol is used for arrays?",
        options: [
            "?",
            "$",
            "{}",
            "[]",
        ],
        answer: "[]",
    },
    {
        title: "What does API stand for?",
        options: [
            "Application programming interface",
            "Asynchronous page interface",
            "Applied page inserts",
            "Append property input",
        ],
        answer: "Application programming interface",
    },
    {
        title: "Code placed in between two curly brackets is called",
        options: [
          "Code snippet",
          "Code bracket",
          "Section",
          "Insert",
        ],
        answer: "Code bracket",
    },
    {
        title: "Code is uploaded to _______ to be able to be refactored",
        options: [
          "Facebook",
          "Visual Studio Code",
          "Git Hub",
          "your primary drive",
        ],
        answer: "Git Hub",
    },
    {
        title: "Var can also be expressed by",
        options: [
          "this",
          "let",
          "call",
          "name",
        ],
        answer: "let",
    },
]


function nextQuestion() {
    let questionEl = document.getElementById("questions-box");
    questionEl.textContent = questionsText[currentQuestionIndex].title;
    console.log("grey")

    btn1EL.textContent = questionsText[currentQuestionIndex].options[0]
    btn2EL.textContent = questionsText[currentQuestionIndex].options[1]
    btn3EL.textContent = questionsText[currentQuestionIndex].options[2]
    btn4EL.textContent = questionsText[currentQuestionIndex].options[3]

}

// }
let secondsLeft = 180;

// Create a function that will initiate the timer and the quiz.
function setTime() {
let timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "time remaining:" + " " + secondsLeft;

    if (secondsLeft === 0) {
      sendMessage();
      clearInterval(timerInterval);
    }
  }, 1000);
}

function sendMessage() {
  timeEl.textContent = "Times Up!";
  document.body.appendChild(timeEl);
  clearTimeout();
  

}

// document.body.appendChild(timeEl)

// setTime();

// Create a function that will initiate the timer and the quiz.

// Create a function for each question that makes wrong answers deduct from total time and show wrong and right answers to show correct
