export default class View {
    constructor() {
        this._roundOutcomeMessage = this._getDomElement('.result-message');
        this._scoreDisplay = this._getDomElement('.score-text');
        this._playerChoiceSmall = this._getDomElement('.player-left img');
        this._computerChoiceSmall = this._getDomElement('.player-right img');
        this._playerButtons = this._getDomElements('.button-icon');
        this._modal = {
            overlay: this._getDomElement('.overlay'),
            modalContainer: this._getDomElement('.modal'),
            text: this._getDomElement('.modal-text'),
            button: this._getDomElement('.modal-button'),
        }
        this._imagesFolder = '/images';
        this.initializeView();
    }

    _getDomElement(cssSelector) {
        return document.querySelector(cssSelector);
    }

    _getDomElements(cssSelector) {
        return document.querySelectorAll(cssSelector);
    }

    setMessage(outcome, playerChoice, computerChoice) {
        let message;
        switch (outcome) {
            case -1:
                message = 'You lose! ' + computerChoice + ' beats ' + playerChoice;
                break;
            case 0:
                message = 'Tie game';
                break;
            case 1:
                message = 'You win! ' + playerChoice + ' beats ' + computerChoice;
                break;
            default:
                message = 'Make a choice to start the game!';
                break;
        }
        this._roundOutcomeMessage.textContent = message;
    }

    setScore(playerChoice, computerChoice) {
        this._scoreDisplay.textContent = playerChoice + ':' + computerChoice;
    }

    setPlayerChoiceSmallImage(choice) {
        const imgPath = this._imagesFolder + '/' + choice + '.png';
        this._playerChoiceSmall.src = imgPath;
    }

    setComputerChoiceSmallImage(choice) {
        const imgPath = this._imagesFolder + '/' + choice + '.png';
        this._computerChoiceSmall.src = imgPath;
    }

    initializeView() {
        this.setMessage(2, "", "");
        this.setScore(0, 0);
        this.setPlayerChoiceSmallImage('unknown');
        this.setComputerChoiceSmallImage('unknown');
    }

    getPlayerButtons() {
        return this._playerButtons;
    }

    toggleModal() {
        this._modal.modalContainer.classList.toggle('modal-active');
        this._modal.overlay.classList.toggle('modal-active');
    }

    setModalMessage(text) {
        this._modal.text.textContent = text;
    }

    getModalButton() {
        return this._modal.button;
    }

}
