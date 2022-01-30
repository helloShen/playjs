#!usr/bin/node

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

function firstLetterUpper(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function playerSelection() {
    let input = "";
    const options = ["Rock", "Paper", "Scissors"];
    do {
        input = firstLetterUpper(prompt("Rock, Paper or Scissors?").toLowerCase());
        if (!options.includes(input)) {
            console.log("Only three options: 'Rock', 'Paper' or 'Scissors'. Try again!");
        }
    } while (!options.includes(input));
    return input;
}

function computerSelection() {
    return computerPlay();
}

function playRound(playerSelection, computerSelection) {
    console.log("Round begin ...");
    let player = playerSelection();
    let computer = computerSelection();
    if ((player.localeCompare("Rock") === 0 && computer.localeCompare("Scissors") === 0) || 
    (player.localeCompare("Paper") === 0 && computer.localeCompare("Rock") === 0) || 
    (player.localeCompare("Scissors") === 0 && computer.localeCompare("Paper") === 0)) {
        console.log("You Win! " + player + " beats " + computer);
    } else if ((player.localeCompare("Rock") === 0 && computer.localeCompare("Paper") === 0) || 
    (player.localeCompare("Paper") === 0 && computer.localeCompare("Scissors") === 0) || 
    (player.localeCompare("Scissors") === 0 && computer.localeCompare("Rock") === 0)) {
        console.log("You Lose! " + computer + " beats " + player);
    } else if ((player.localeCompare("Rock") === 0 && computer.localeCompare("Rock") === 0) || 
    (player.localeCompare("Paper") === 0 && computer.localeCompare("Paper") === 0) || 
    (player.localeCompare("Scissors") === 0 && computer.localeCompare("Scissors") === 0)) {
        console.log("Draw! Player and computer both play " + player);
    }
    return;
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
    }
    return;
}

/* test */
// console.log("hello");
// console.log(computerPlay());
// console.log(playerSelection());
// console.log(computerSelection());
// console.log(playRound(playerSelection, computerSelection));
game();