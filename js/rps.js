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