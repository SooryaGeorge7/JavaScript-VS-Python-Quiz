let playButton = document.getElementById('start-game');
let userName = document.getElementById('username');
let homePage = document.getElementById('home-page');
let gamePage = document.getElementById('game-page');
let validationMessage = document.getElementById('validation');
let gameoverPage = document.getElementById('gameover-area');
let questionArea = document.getElementById('questions');
let python = document.getElementById('python');
let javaScript = document.getElementById('javascript');
let noTime = document.getElementById('no-time-left');

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
 let counting;

 let i = questions.length;
 while (--i > 0){
    let randomI = Math.floor(Math.random() * (i+1));
    [questions[randomI], questions[i]] = [questions[i], questions[randomI]];
 }
 //console.log(questions);

let m; 
let slicedQuestions;
 
m = Math.ceil(questions.length / 3);
slicedQuestions = questions.slice(0, m);
console.log(slicedQuestions[currentIndex]);

//play game

function playGame() {
    gamePage.style.display = "block";
    homePage.style.display = "none";
    displayQuestions(slicedQuestions[currentIndex]);
    questionNumber.innerText = qNumber;
    score.innerText = userscore;
    questionsLeft.innerText= qLeft;
    counting = setInterval(countDown,1000);
    countDown();
}

let secsLeft = 40;

let noTimeleft = "Sorry, You've run out of time!";
function countDown() {
    timer.innerText = --secsLeft;
    if (secsLeft <= 0) {
        gameOver();
        noTime.innerHTML = noTimeleft;
    }
}

function displayQuestions(question) {
    questionArea.innerText = question.question;
    python.innerText = question.choice[0];
    javaScript.innerText = question.choice[1];
    
    
}

function checkAnswer(event) {
    answerSelected = event.target;
    let selected = answerSelected.innerText;
    let rightAnswer = slicedQuestions[currentIndex].correct;
    
    if (selected === rightAnswer){
        answerSelected.style.background= "#226F54";
        score.innerText = ++userscore;
        
    } else {
        answerSelected.style.background= "#E04C4C";
    }
    

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
    if (currentIndex + 1 > slicedQuestions.length) {
        gameOver();
        clearInterval(counting);
    }else {
        displayQuestions(slicedQuestions[currentIndex]);
        
    }
}
function gameOver() {
    gamePage.style.display = "none";
    gameoverPage.style.display = "block";
}