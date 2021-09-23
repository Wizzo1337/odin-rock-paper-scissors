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


function playSingleRound (playerSelection, computerSelection) {
    let playerSelect = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (playerSelect === "Rock" && computerSelection === "Paper") {
        return `You Lose!`
    } else if (playerSelect === "Rock" && computerSelection === "Scissors") {
        return `You Win!`
    } else if (playerSelect === "Paper" && computerSelection === "Scissors") {
        return `You Lose!`
    } else if (playerSelect === "Paper" && computerSelection === "Rock") {
        return `You Win!`
    } else if (playerSelect === "Scissors" && computerSelection === "Paper") {
        return `You Win!`
    } else if (playerSelect === "Scissors" && computerSelection === "Rock") {
        return `You Lose!`
    } else {
        return `It's a tie!`
    }
}

const playerSelection = "rock"; //prompt("Rock, Paper, or Scissors?", "Choose your weapon!")//;
const computerSelection = computerPlay();
// console.log(playSingleRound(playerSelection, computerSelection));



function game () {
    var playerScore = 0;
    var computerScore = 0;
    playSingleRound(playerSelection, computerPlay());
    
    for (var i = 1; i <= 5; i++) {
        if (playSingleRound(playerSelection, computerPlay()) === 'You Win!') {
            playerScore++
        } else if (playSingleRound(playerSelection, computerPlay()) === 'You Lose!') {
            computerScore++
        }
        console.log(playSingleRound(playerSelection, computerPlay()));
        console.log('computer selection value: ', computerPlay());
    }
    
    console.log('playerScore: ' + playerScore, 'computerScore: ' + computerScore);
}

console.log(game());