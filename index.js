function getComputerChoice() {
    const moves = ['Rock','Paper','Scissor'];
    let chosenMove = moves[Math.floor(Math.random()*3)]
    return chosenMove;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw!"
    }
    else if(playerSelection === 'Rock' && computerSelection === 'Scissor') {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else if (playerSelection === 'Scissor' && computerSelection === 'Paper') {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else if(playerSelection === 'Rock' && computerSelection === 'Paper') {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
    else if(playerSelection === 'Scissor' && computerSelection === 'Rock') {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
    else if(playerSelection === 'Paper' && computerSelection === 'Scissor') {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}