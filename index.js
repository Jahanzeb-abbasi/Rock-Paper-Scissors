function getComputerChoice() {
    const moves = ['Rock','Paper','Scissor'];
    let chosenMove = moves[Math.floor(Math.random()*3)]
    return chosenMove;
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw!"
    }
    else if(playerSelection === 'Rock' && computerSelection === 'Scissor') {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else if (playerSelection === 'Scissor' && computerSelection === 'Paper') {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else if(playerSelection === 'Rock' && computerSelection === 'Paper') {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
    else if(playerSelection === 'Scissor' && computerSelection === 'Rock') {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
    else if(playerSelection === 'Paper' && computerSelection === 'Scissor') {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

// Fix the Prompt when asking for input.
//Make smaller functions - Capitalize, Input

function game() {
    for (i = 0; i < 5; i++) {
        playerSelection = prompt("Enter Rock, Paper or Scissor").toLowerCase();
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
        let computerSelection = getComputerChoice();
        console.log(`Round ${i+1}`)
        console.log(`Player Choice: ${playerSelection}`)
        console.log(`Computer Choice: ${computerSelection}`)
        console.log(playRound(playerSelection,computerSelection))
        console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`)
    }
}

game();