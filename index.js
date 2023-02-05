let playerScore = 0;
let computerScore = 0;

// Rock, Paper, Scissors Logic 
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw!"
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

// Get Computer Choice 
function getComputerChoice() {
    const moves = ['Rock', 'Paper', 'Scissors'];
    let chosenMove = moves[Math.floor(Math.random() * 3)]
    return chosenMove;
}

// Decide the Game Winner 
function gameWinner() {
    if (playerScore === 5) {
        return "You Win!"
    }
    else if (computerScore === 5) {
        return "You Lose!"
    }
}

function playGame() {
    let playerSelection = this.textContent
    let computerSelection = getComputerChoice();
    const resultDiv = document.querySelector('.roundResult')
    const scoreDiv = document.querySelector('.roundScore')
    const winnerDiv = document.querySelector('.winner')
    resultDiv.textContent = playRound(playerSelection, computerSelection)
    scoreDiv.textContent = `Total Score: Player- ${playerScore} | Computer- ${computerScore}`
    winnerDiv.textContent = gameWinner()
}

const btns = document.querySelectorAll('.gamebtn')
btns.forEach(btn => {
    btn.addEventListener('click', playGame)
})