function getComputerChoice() {
    const moves = ['rock','paper','scissor'];
    let chosenMove = moves[Math.floor(Math.random()*3)]
    return chosenMove;
}

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return "It's a draw!"
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        return "You Win! Rock Beats Scissor."
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "You Lose! Paper Beats Rock"
    }
    else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        return "You Lose! Rock Beats Scissor"
    }
    else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        return "You Win! Scissor Beats Paper"
    }
    else if (playerSelection === 'scissor' && computerSelection === 'scissor') {
        return "It's a draw!"
    }
    else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return "It's a draw!"
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You Win! Paper Beats Rock"
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return "You Lose! Scissor Beats Paper"
    }
    else {
        console.log("Invalid Input")
    }
}

console.log(getComputerChoice())