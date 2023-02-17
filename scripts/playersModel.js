export default class PlayersModel {
    constructor(maxScore, choices) {
        this._playerScore = 0;
        this._computerScore = 0;
        this._choices = choices;
        this._maxScore = maxScore;
    }

    initializeScores() {
        this._playerScore = 0;
        this._computerScore = 0;
    }
    
    getPlayerScore() {
        return this._playerScore;
    }

    getComputerScore() {
        return this._computerScore;
    }

    updatePlayerScore() {
        if (this._playerScore < this._maxScore) this._playerScore += 1;
    }

    updateComputerScore() {
        if (this._computerScore < this._maxScore) this._computerScore += 1;
    }

    getWinner() {
        if (this._playerScore == this._maxScore) {
            return 1; // player wins
        } else if (this._computerScore == this._maxScore) {
            return -1; // computer wins
        } else {
            return 0; // no winner 
        }
    }

    getComputerChoice() {
        const idx = Math.floor(Math.random()*this._choices.length);
        return this._choices[idx];
    }
}