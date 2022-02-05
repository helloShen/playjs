#!usr/bin/node

/* start a new game, whoever reach 5 points first win */
const playRound = function() {
    /* bind listener to three options */
    const selections = document.querySelectorAll(".selection");
    selections.forEach((selection) => {
        selection.id = undefined;
        selection.classList.add('listening');
        /* save handler reference, which is required for removing the listener */
        selection.clickHandler = function(){
            judge(selection);
        };
        selection.addEventListener('click', selection.clickHandler, false);
    });
    /* initialize score board */
    const playerScore = document.querySelector('.playerScore');
    const computerScore = document.querySelector('.computerScore');
    playerScore.dataset.score = '0';
    playerScore.innerHTML = playerScore.dataset.score;
    computerScore.dataset.score = '0';
    computerScore.innerHTML = computerScore.dataset.score;
    /* clear screen */
    const screen = document.querySelector('.screen'); 
    screen.innerHTML = '';
};

/* Update the score board, and check the winner. */
const updateScore = function(target) {
    target.dataset.score = (parseInt(target.dataset.score) + 1).toString();
    target.innerHTML = target.dataset.score;
    if (parseInt(target.dataset.score) === 5) {
        if (target.classList[0].localeCompare('playerScore') === 0) {
            alert("Player Wins!");
        } else {
            alert("Computer Wins!");
        }
        gameOver();
    }
}

/* No matter who wins, it remove the click event listeners when the game ends. */
const gameOver = function() { 
    const selections = document.querySelectorAll('.selection');
    selections.forEach((selection) => {
        selection.classList.remove('listening');
        selection.removeEventListener('click', selection.clickHandler, false);
    });
}

/* Print the result of each single round on the screen div */
const updateScreen = function(result) {
    const screen = document.querySelector('.screen');
    screen.innerHTML = result;
}

/* Computer pick a random option */
function computerPlay() {
    while(true) {
        switch (Math.floor(Math.random() * 3)) {
            case 0:
                return "Rock";
            case 1:
                return "Paper";
            case 2:
                return "Scissors";
        }
    }
}

/* Compare the player and computer's choice, and show the result on the screen */
const judge = function(selected) {
    const player = selected.dataset.name;
    const computer = computerPlay();
    const playerScore = document.querySelector('.playerScore');
    const computerScore = document.querySelector('.computerScore');
    let result;
    if ((player.localeCompare("Rock") === 0 && computer.localeCompare("Scissors") === 0) || 
    (player.localeCompare("Paper") === 0 && computer.localeCompare("Rock") === 0) || 
    (player.localeCompare("Scissors") === 0 && computer.localeCompare("Paper") === 0)) {
        result = "You Win! " + player + " beats " + computer;
        updateScreen(result);
        updateScore(playerScore);
    } else if ((player.localeCompare("Rock") === 0 && computer.localeCompare("Paper") === 0) || 
    (player.localeCompare("Paper") === 0 && computer.localeCompare("Scissors") === 0) || 
    (player.localeCompare("Scissors") === 0 && computer.localeCompare("Rock") === 0)) {
        result = "You Lose! " + computer + " beats " + player;
        updateScreen(result);
        updateScore(computerScore);
    } else if ((player.localeCompare("Rock") === 0 && computer.localeCompare("Rock") === 0) || 
    (player.localeCompare("Paper") === 0 && computer.localeCompare("Paper") === 0) || 
    (player.localeCompare("Scissors") === 0 && computer.localeCompare("Scissors") === 0)) {
        result = "Draw! Player and computer both play " + player;
        updateScreen(result);
    }
}

const init = function() {
    const round = document.querySelector(".round");
    round.addEventListener('click', playRound);
}

init();
