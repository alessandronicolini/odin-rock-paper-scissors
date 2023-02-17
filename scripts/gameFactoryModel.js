import GameModel from "./gameModel.js";

export default class GameFactoryModel {
    constructor(gameType) {
        let game;
        switch (gameType) {
            case 'rock paper scissors':
                game = this._rockPaperScissors();
                break;
            case 'rock paper scissors lizard spock':
                game = this._rockPaperScissorsLizardSpock();
                break;
            case 'rock paper scissors candle':
                game = this._rockScissorsPaperCandle();
                break;
        }
        return game;
    }

    _rockPaperScissors() {
        const game = new GameModel();
        game.addRule('rock', 'scissors');
        game.addRule('paper', 'rock', 'scissors');
        return game;
    }

    _rockPaperScissorsLizardSpock() {
        const game = this._rockPaperScissors();
        game.addRule('lizard', 'paper', ['rock', 'scissors']);
        game.addRule('spock', ['rock', 'scissors'], ['paper', 'lizard']);
        return game;
    }

    _rockScissorsPaperCandle() {
        const game = this._rockPaperScissors();
        game.addRule('candle', 'paper', 'scissors');
        return game;
    }

}