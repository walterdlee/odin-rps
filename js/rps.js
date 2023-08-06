let playerScore = 0;
let computerScore = 0;

let playerSelection;

const playerScoreDisplay = document.querySelector(".score#player");
playerScoreDisplay.textContent = `Your Score: ${playerScore}`;

const computerScoreDisplay = document.querySelector(".score#computer");
computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

const result = document.querySelector(".result");
result.textContent = "Click on a button to begin game!"

const buttons = document.querySelectorAll('.btn');

let gameOver = false;

for (let button of buttons) {
    button.addEventListener("click", () => {
        playerSelection = button.id;
        game();
    })
}


function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return "Rock";
    } else if (randomNum === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection = getComputerChoice()) {
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return `DRAW! Both player and computer have selected ${computerSelection}`;
    }

    if (playerSelection.toUpperCase() === "ROCK") {
        if (computerSelection === "Scissors") {
            return "You win! Rock beats scissors!";
        }
        else {
            return "You lose! Rock loses to paper!";
        }
    } else if (playerSelection.toUpperCase() === "PAPER") {
        if (computerSelection === "Rock") {
            return "You win! Paper beats rock!";
        }
        else {
            return "You lose! Paper loses to scissors!";
        }
    } else {
        if (computerSelection === "Paper") {
            return "You win! Scissors beats paper!";
        }
        else {
            return "You lose! Scissors loses to rock!";
        }
    }
}

function game() {
    if (gameOver) {
        playerScore = 0;
        computerScore = 0;
        gameOver = false;
    };

    let roundResult = playRound(playerSelection);
    result.textContent = roundResult;

    if (roundResult.startsWith("You win!")) {
        playerScore++;
    } else if (roundResult.startsWith("You lose!")) {
        computerScore++;
    }

    playerScoreDisplay.textContent = `Your Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

    console.log(roundResult);
    
    if (playerScore === 5) {
        result.textContent = "YOU WIN!! Click to play again!"
        gameOver = true;

    } else if (computerScore === 5) {
        result.textContent = "You lose :( Click to play again"
        gameOver = true;
    }
}