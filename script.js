"use strict"
const selections = ["rock", "scissors", "paper",];
const buttons = document.querySelectorAll('.btn');
const scoreContainers = document.querySelectorAll('.score');
const messageContainer = document.querySelector('.message');
let scores = {
    player: 0,
    computer: 0,
}

function getScoreText(playerName, scoreValue) {
    return `${playerName} score: ${scoreValue}`;
}

function showCurrentScores() {
    scoreContainers.forEach(container => {
        let playerName = container.getAttribute('id');
        container.textContent = getScoreText(playerName, scores[playerName]);
    });
}

function getComputerChoice() {
    let idx = Math.floor(Math.random()*3);
    return selections[idx];
}

function playRound(playerChoice, computerChoice) {
    let resultMessage = "";
    switch (playerChoice) {
        case "rock":
            if (computerChoice == "scissors") {
                resultMessage = "You win! Rock beats Scissors";
            } else if (computerChoice == "paper") {
                resultMessage = "You lose! Paper beats Rock";
            } else {
                resultMessage = "You are tied";
            }
            break;
        case "scissors":
            if (computerChoice == "paper") {
                resultMessage = "You win! Scissors beats Paper";
            } else if (computerChoice == "rock") {
                resultMessage = "You lose! Rock beats Scissors";
            } else {
                resultMessage = "You are tied";
            }
            break;
        case "paper":
            if (computerChoice == "rock") {
                resultMessage = "You win! Paper beats Rock";
            } else if (computerChoice == "scissors") {
                resultMessage = "You lose! Scissors beats Paper";
            } else {
                resultMessage = "You are tied";
            }
            break;
    }
    return resultMessage;
}

messageContainer.textContent = "Let's start the game!";
showCurrentScores();

buttons.forEach(button => {
    button.addEventListener('click', function(e){
        let message = playRound(e.target.getAttribute('id'), getComputerChoice());
        console.log(message);
        messageContainer.textContent = message;
        if (message.includes("win")) {
            scores.player += 1;
        } else if (message.includes("lose")) {
            scores.computer += 1;
        };
        showCurrentScores();
    });
});