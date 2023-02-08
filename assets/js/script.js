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