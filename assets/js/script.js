var body = document.body;
var header = document.createElement("header");
var viewHighScores = document.createElement("a");
var quizTimer = document.createElement("p");
var mainEl = document.createElement("main");
var h1El = document.createElement("h1");
var startBtn = document.createElement("button");
const questionElement = document.createElement("p");
const optionsContainer = document.createElement("p");
var timeLeft = 60;
let currentQuestion = 0;

var listOfQuestions = [
    {question: "Question 1: The condition in an if/else statement is enclosed within ________.", 
    choices:["Curly brackets", "Square brackets", "Parentheses", "Angle brackets"], 
    answer: "Parenthesis"},

    {question: "Question 2: What is the name of the property that is used to define the special state of an element?", 
    choices:["Pseudo-class", "Syntax", "Alignment", "Style"], 
    answer: "Pseudo-class"},

    {question: "Question 3: Which operator is used to assign a value to a variable in JavaScript?", 
    choices:["=>", "==", ":=", "="], 
    answer: "="},

    {question: "Question 4: How do you concatenate two strings in JavaScript?", 
    choices:["string1 & string2", "string1 . string2", "string1 + string2", "string1 ~ string2"], 
    answer: "string1 + string2"},

    {question: "Question 5: What is the output of the following code: console.log(typeof 'hello');", 
    choices:["undefined", "string", "boolean", "number"], 
    answer: "string"}
];



viewHighScores.textContent = "High Scores";
quizTimer.textContent = "Time Left: " + timeLeft;
h1El.textContent = "Coding Quiz Challenge";
viewHighScores.setAttribute("href", "./highscore.html");
startBtn.textContent = "Start Quiz";
questionElement.textContent = "";
optionsContainer.textContent = "";

body.appendChild(header);
header.appendChild(viewHighScores);
header.appendChild(quizTimer);
body.appendChild(mainEl);
mainEl.appendChild(h1El);
mainEl.appendChild(startBtn);



startBtn.addEventListener("click", function(){ 
    startBtn.remove();
    startTimer();
    startQuestions();

} );

function startTimer() {
    timer = setInterval(() => {
              timeLeft--;

              quizTimer.innerText = "Time Left: " + timeLeft;
          
              if (timeLeft <= 0) {
                endQuiz();
              }
            }, 1000);

};

function startQuestions() {
  
    const currentQuizData = listOfQuestions[currentQuestion];
  
    questionElement.innerText = currentQuizData.question;
    optionsContainer.innerHTML = "";
  
    currentQuizData.options.forEach((option) => {
      const button = document.createElement("button");
      button.innerText = option;
      button.addEventListener("click", () => selectAnswer(option));
      optionsContainer.appendChild(button);
    });
    

};


function selectAnswer(selectedOption) {
        const currentQuizData = quizData[currentQuestion];
      
        if (selectedOption === currentQuizData.correctAnswer) {
          score++;
        }
      
        currentQuestion++;
      
        if (currentQuestion < quizData.length) {
          showQuestion();
        } else {
          endQuiz();
        }
      }



function endQuiz() {

    clearInterval(timer);
  
    const playerName = prompt("Finished! Please enter your name:");
    saveHighScore(playerName, score);
  
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score is ${score} out of ${quizData.length}.</p>
      <p>Check the High Scores page for your ranking.</p>
      <button onclick="location.href='highscore.html'">View High Scores</button>
    `;

};



