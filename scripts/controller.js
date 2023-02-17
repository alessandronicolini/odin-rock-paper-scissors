export default class Controller {
    constructor(view, playersModel, gameModel) {
        this._view = view;
        this._playersModel = playersModel;
        this._gameModel = gameModel;
    }

    setPlayerButtonsListener() {
        const playerButtons = this._view.getPlayerButtons();
        playerButtons.forEach(button => button.addEventListener('click', event => this._gameplay(event)));
        const modalButton = this._view.getModalButton();
        modalButton.addEventListener('click', event => this._restartGame());
    }

    _gameplay(event) {
        const clickedButton = event.target.closest('.button-icon');
        const playerChoice = clickedButton.getAttribute('data-choice');
        this._view.setPlayerChoiceSmallImage(playerChoice);

        const computerChoice = this._playersModel.getComputerChoice();
        this._view.setComputerChoiceSmallImage(computerChoice);

        const roundOutcome = this._gameModel.playRound(playerChoice, computerChoice);
        if (roundOutcome > 0) { // player wins
            this._playersModel.updatePlayerScore();
        } else if (roundOutcome < 0) { // compute wins
            this._playersModel.updateComputerScore();
        }
        this._view.setMessage(roundOutcome, playerChoice, computerChoice);
        const playerScore = this._playersModel.getPlayerScore();
        const computerScore = this._playersModel.getComputerScore();
        this._view.setScore(playerScore, computerScore);

        const playerWins = this._playersModel.getWinner() === 1;
        const computerWins = this._playersModel.getWinner() === -1;
        const someoneWins = playerWins || computerWins;
        if (someoneWins) {
            const modalText = playerWins ? "You win :D" : "Computer wins :(";
            this._view.setModalMessage(modalText);
            this._view.toggleModal();
        }
    }

    _restartGame() {
        this._playersModel.initializeScores();
        this._view.toggleModal();
        this._view.initializeView();
    }
}