function getComputerChoice() {
    const CHOICES = ['ROCK', 'PAPER', 'SCISSORS'];
    return CHOICES[Math.floor( Math.random() * CHOICES.length )];
}

function getHumanChoice() {
    const userChoice = prompt("Rock, Paper, or Scissors?");
    return userChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();
    const humanWon = `You won this round! ${humanChoice} beats ${computerChoice}.`;
    const humanLost = `You lost this round! ${computerChoice} beats ${humanChoice}.`
    const tie = `Tie! Nobody won this round`;
    if ( humanChoice === computerChoice ) {
        console.log(tie)
        return 'tie';
    } else if ( 
        (humanChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
        (humanChoice === 'SCISSORS' && computerChoice === 'PAPER') || 
        (humanChoice === 'PAPER' && computerChoice === 'ROCK')
     ) {
        console.log(humanWon);
        return 'HUMAN';
    } else if (
        (computerChoice === 'ROCK' && humanChoice === 'SCISSORS') ||
        (computerChoice === 'SCISSORS' && humanChoice === 'PAPER') || 
        (computerChoice === 'PAPER' && humanChoice === 'ROCK')
     ) {
        console.log(humanLost);
        return 'COMPUTER';
     }
}

function playGame(rounds = 1) {
    let currentRound = 1;
    let humanScore = 0;
    let computerScore = 0;

    while ( currentRound <= rounds ) {
        console.log(`Current round: ${currentRound}`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        const roundResult = playRound(humanSelection, computerSelection);
        currentRound++;

        if ( roundResult === 'COMPUTER' ) computerScore++;
        if ( roundResult === 'HUMAN' ) humanScore++;
    }

    if ( humanScore === computerScore ) {
        console.log('Tie! Nobody won.');
    } else if ( humanScore > computerScore ) {
        console.log('Human won.');
    } else {
        console.log('Computer won.');
    }

    console.log(`End score - Human ${humanScore} : Computer ${computerScore}`);
}

const ROUNDS = 5;
playGame(ROUNDS);
