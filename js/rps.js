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
    let winCount = 0;
    let lossCount = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose one of the following: rock, paper, scissors");
        let result = playRound(playerSelection);
        if (result.startsWith("You win!")) {
            winCount++;
        } else if (result.startsWith("You lose!")) {
            lossCount++;
        }
        console.log(result);
    }
    if (winCount == lossCount) {
        console.log("DRAW!");
    } else if (winCount > lossCount) {
        console.log("You win!");
    } else {
        console.log("You lose!");
    }
}