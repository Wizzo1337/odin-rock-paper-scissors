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

console.log(computerPlay());

function playRound (playerSelection, computerSelection) {

}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));