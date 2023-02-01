let playerScore = 0;
let computerScore = 0;

// Rock, Paper, Scissors Logic 
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

// Get Player Choice 
function getPlayerChoice() {
    let playerSelection = prompt("Enter Rock, Paper or Scissor").toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    return playerSelection;
}

// Get Computer Choice 
function getComputerChoice() {
    const moves = ['Rock','Paper','Scissor'];
    let chosenMove = moves[Math.floor(Math.random()*3)]
    return chosenMove;
}

// Decide the Game Winner 
function gameWinner() {
    if (playerScore > computerScore) {
        return "You Win!"
    }
    else if(playerScore == computerScore) {
        return "It's a draw"
    }
    else {
        return "You Lose!"
    }
}

function game() {
    
    // 5 Round Game 
    for (i = 0; i < 5; i++) {

        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();

        // Round Status 
        console.log(`Round ${i+1}`)
        console.log(`Player Choice: ${playerSelection}`)
        console.log(`Computer Choice: ${computerSelection}`)
        console.log(playRound(playerSelection,computerSelection))
        console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`)
    }
    // Outputs the Final Result 
    console.log(`Final Score: Player - ${playerScore} | Computer - ${computerScore}`)
    console.log(gameWinner());
}

game();