const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerSelection = button.id;
        console.log(playerSelection);
        document.getElementById("pChoice").innerHTML = playerSelection.toUpperCase();

        const computerSelection = computerPlay();
        console.log(computerSelection);
        document.getElementById("cChoice").innerHTML = computerSelection.toUpperCase();

        const status = playRound(playerSelection, computerSelection);
        console.log(status);
        document.getElementById("currentStatus").innerHTML = status;

        const off = terminate();
        console.log(off);
        document.getElementById("bestFive").innerHTML = off;

        const score = updateScore(); 
        console.log(score);
        document.getElementById("score").innerHTML = score;

        again();
    });

});


function computerPlay() {
    x = Math.floor(Math.random()*3 + 1);
    if (x == 1) {
        return "rock";
    }
    else if (x == 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

let Win = 0;
let Loss = 0;
let Draw = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            Draw += 1;
            return "its a draw, rock v rock";
        }
        else if (computerSelection === 'paper') {
            Loss += 1;
            return "You lose, Paper beats Rock";
        }
        else {
            Win += 1;
            return "You Win, Rock beats Scissors";
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            Win += 1;
            return "You Win, Paper beats Rock";
        }
        else if (computerSelection == 'paper') {
            Draw += 1;
            return "Its a draw, paper v paper";
        }
        else {
            Loss += 1;
            return "You Lose, Scissors beat Paper";
        }
    }
    else {
        if (computerSelection == 'rock') {
            Loss += 1;
            return "You Lose, Rock beats Scissors";
        }
        else if (computerSelection == 'paper') {
            Win += 1;
            return "You win, Scissors beat Paper";
        }
        else {
            Draw += 1;
            return "Its a draw, Scissors v Scissors";
        }    
    }
}

function updateScore() {
    return `Wins: ${Win}, Losses: ${Loss}, Draws: ${Draw}`;
}

function terminate() {
    if (Win==5) {
        return "Great Scott, You've Won!"
    }
    else if (Loss==5) {
        return "Better Luck Next Time <:("
    }
    else {
        return "First to 5 round wins wins the game";
    }

}

function again() {
    if (Win>=5 || Loss>=5) {
        alert("Hit F5 or reload to continue");
    }
}
