"use strict"

const selections = ["Rock", "Scissors", "Paper",];

function getComputerChoice() {
    let idx = Math.floor(Math.random()*3);
    return selections[idx];
}

function playRound(playerSelection, computerSelection) {
    let [ps, cs] = [playerSelection.toLowerCase(), computerSelection.toLowerCase()];
    let resultMessage = "";
    switch (ps) {
        case "rock":
            if (cs == "scissors") {
                resultMessage = "You win! Rock beats Scissors";
            } else if (cs == "paper") {
                resultMessage = "You lose! Paper beats Rock";
            } else {
                resultMessage = "You are tied";
            }
            break;
        case "scissors":
            if (cs == "paper") {
                resultMessage = "You win! Scissors beats Paper";
            } else if (cs == "rock") {
                resultMessage = "You lose! Rock beats Scissors";
            } else {
                resultMessage = "You are tied";
            }
            break;
        case "paper":
            if (cs == "rock") {
                resultMessage = "You win! Paper beats Rock";
            } else if (cs == "scissors") {
                resultMessage = "You lose! Scissors beats Paper";
            } else {
                resultMessage = "You are tied";
            }
            break;
    }
    return resultMessage;
}

function game(){
    let score = [0, 0];
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Insert your choice:");
        let resultMessage = playRound(playerSelection, getComputerChoice());
        if (resultMessage.includes("win")) {
            score[0] += 1;
        } else if (resultMessage.includes("lose")) {
            score[1] += 1;
        };
        console.log(resultMessage);
        console.log(`score: ${score[0]} - ${score[1]}`);
    }
    if (score[0] > score[1]) {
        console.log("YOU WIN THE GAME!");
    } else if (score[1] > score[0]){
        console.log("YOU LOSE THE GAME!");
    } else {
        console.log("YOU ARE TIED, PLAY AGAIN!");
    }
}

game();