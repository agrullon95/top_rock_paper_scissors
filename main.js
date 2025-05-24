function getComputerChoice() {
    const CHOICES = ['ROCK', 'PAPER', 'SCISSORS'];
    return CHOICES[Math.floor( Math.random() * CHOICES.length )];
}

function getHumanChoice() {
    const userChoice = prompt("Rock, Paper, or Scissors?");
    return userChoice;
}

function playRound(humanChoice, computerChoice) {
    const currentRoundWinnerMessage = document.querySelector('.current-round-winner');

    humanChoice = humanChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();

    const humanWon = `You won this round! ${humanChoice} beats ${computerChoice}.`;
    const humanLost = `You lost this round! ${computerChoice} beats ${humanChoice}.`
    const tie = `Tie! Nobody won this round`;

    if ( humanChoice === computerChoice ) {
        console.log(tie)
        currentRoundWinnerMessage.textContent = tie;
        return 'tie';
    } else if ( 
        (humanChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
        (humanChoice === 'SCISSORS' && computerChoice === 'PAPER') || 
        (humanChoice === 'PAPER' && computerChoice === 'ROCK')
     ) {
        console.log(humanWon);
        currentRoundWinnerMessage.textContent = humanWon;
        return 'HUMAN';
    } else if (
        (computerChoice === 'ROCK' && humanChoice === 'SCISSORS') ||
        (computerChoice === 'SCISSORS' && humanChoice === 'PAPER') || 
        (computerChoice === 'PAPER' && humanChoice === 'ROCK')
     ) {
        console.log(humanLost);
        currentRoundWinnerMessage.textContent = humanLost;
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

function updateDOMScore() {
    const humanScoreContainer = document.querySelector('.human-score');
    const computerScoreContainer = document.querySelector('.computer-score');
    const winnerMessageContainer = document.querySelector('.winner-message');
    
    humanScoreContainer.textContent = humanScore;
    computerScoreContainer.textContent = computerScore;

    if ( humanScore === 5 || computerScore === 5 ) {
        let winnerMessage;
        if ( humanScore === 5 ) {
            winnerMessage = "You won 5 rounds!";
        } else if ( computerScore === 5) {
            winnerMessage = "You lost 5 rounds!";
        }
        winnerMessageContainer.textContent = winnerMessage;
    }
}

const ROUNDS = 5;

let currentRound = 1;
let humanScore = 0;
let computerScore = 0;


const playButtonNodeList = document.querySelectorAll('.play-round');
playButtonNodeList.forEach( playButton => {
    playButton.addEventListener('click', event => {
        if ( humanScore !== 5 && computerScore !== 5 ) {
            const humanSelection = event.target.value;
            const computerSelection = getComputerChoice();

            const roundResult = playRound(humanSelection, computerSelection);
            currentRound++;

            if ( roundResult === 'COMPUTER' ) computerScore++;
            if ( roundResult === 'HUMAN' ) humanScore++;
            updateDOMScore();       
        }
    });
});