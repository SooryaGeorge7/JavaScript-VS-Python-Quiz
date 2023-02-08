let playButton = document.getElementById('start-game')
let userName = document.getElementById('username')
let homePage = document.getElementById('home-page')
let gamePage = document.getElementById('game-page')
let validationMessage = document.getElementById('validation')
let scorePage = document.getElementById('scoreboard-area')


//username validation 
let usernameLength = "Please enter a name longer than 2 charectors";
function validateMessage() {
    if(userName.value.length <= parseInt(2)) {
        validationMessage.innerHTML = usernameLength;
    }
    else {
        playGame()
    }

}
 //game starrts with timer and first question

let questionNumber =document.getElementById('question-number')
let score = document.getElementById('your-score')
let timer = document.getElementById('timer')
let questionsLeft = document.getElementById('question-remaining')

let userscore = 0;
let qNumber = 1;
let qLeft = 10;

function playGame() {
    gamePage.style.display = "block";
    homePage.style.display = "none";
    displayQuestions()
    questionNumber.innerText = qNumber;
    score.innerText = userscore;
    questionsLeft.innerText = qLeft;
}