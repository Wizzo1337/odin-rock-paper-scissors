function computerPlay () {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "Rock"
    } else if (randomNumber === 1) {
        return "Paper"
    } else {
        return "Scissors"
    }
};


function playRound (playerSelection, computerSelection) {
    let playerSelect = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (playerSelect === "Rock" && computerSelection === "Paper") {
        return `You Lose! ${computerSelection} beats ${playerSelect}`
    } else if (playerSelect === "Rock" && computerSelection === "Scissors") {
        return `You Win! ${playerSelect} beats ${computerSelection}`
    } else if (playerSelect === "Paper" && computerSelection === "Scissors") {
        return `You Lose! ${computerSelection} beats ${playerSelect}`
    } else if (playerSelect === "Paper" && computerSelection === "Rock") {
        return `You Win! ${playerSelect} beats ${computerSelection}`
    } else if (playerSelect === "Scissors" && computerSelection === "Paper") {
        return `You win! ${playerSelect} beats ${computerSelection}`
    } else if (playerSelect === "Scissors" && computerSelection === "Rock") {
        return `You Lose! ${computerSelection} beats ${playerSelect}`
    } else {
        return `It's a tie!`
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

function game () {
    playRound ()
}