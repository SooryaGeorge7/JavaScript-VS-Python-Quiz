let playButton = document.getElementById('start-game');
let userName = document.getElementById('username');
let homePage = document.getElementById('home-page');
let gamePage = document.getElementById('game-page');
let validationMessage = document.getElementById('validation');
let scorePage = document.getElementById('scoreboard-area');
let questionArea = document.getElementById('questions');
let python = document.getElementById('python');
let javaScript = document.getElementById('javascript');


//username validation 
let usernameLength = "Please enter a name longer than 2 charectors";
function validateMessage() {
    if(userName.value.length <= parseInt(2)) {
        validationMessage.innerHTML = usernameLength;
    }
    else {
        playGame();
    }

}
 //game starrts with timer and first question
 let questionNumber =document.getElementById('question-number');
 let score = document.getElementById('your-score');
 let timer = document.getElementById('timer');
 let questionsLeft = document.getElementById('question-remaining');
 
 let userscore = 0;
 let qNumber = 1;
 let qLeft = 10;
 let currentIndex = 0;

//play game
function playGame() {
    gamePage.style.display = "block";
    homePage.style.display = "none";
    displayQuestions(questions[currentIndex]);
    questionNumber.innerText = qNumber;
    score.innerText = userscore;
    questionsLeft.innerText= qLeft;
}

function displayQuestions(question) {
    questionArea.innerText = question.question;
    python.innerText = question.choice[0];
    javaScript.innerText = question.choice[1];
    
    
}

function checkAnswer(event) {
    answerSelected = event.target;
    let selected = answerSelected.innerText;
    let rightAnswer = questions[currentIndex].correct;
    
    if (selected === rightAnswer){
        answerSelected.style.background= "#226F54";
        score.innerText = ++userscore;
        
    } else {
        answerSelected.style.background= "#E04C4C";
    }
    currentIndex++;
    nextQuestion();

}
function changeColor(event) {
    answerRelease = event.target;
    answerRelease.style.background = "#FAF9F6";
    currentIndex++;
    questionsLeft.innerText= --qLeft;
    questionNumber.innerText = ++qNumber;
    nextQuestion();
}
let ansButton = document.getElementsByClassName('answer');
for (let i = 0; i < ansButton.length; i++) {
    ansButton[i].addEventListener('mousedown', checkAnswer);
    ansButton[i].addEventListener('mouseup', changeColor);
}


function nextQuestion() {
    if (currentIndex + 1 > questions.length) {
        gameOver()
    }else {
        displayQuestions(questions[currentIndex]);
        
    }
}