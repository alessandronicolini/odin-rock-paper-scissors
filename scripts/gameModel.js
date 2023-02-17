export default class GameModel {
    constructor () {
        this._choiceIdx = {};
        this._idx = 0;
        this._gameTable = [];
    }

    addRule(choiceName, weakerChoices, strongerChoices) {
        const isFirstRule = this._gameTable.length === 0 && strongerChoices === undefined;
        if (isFirstRule) {
            this._initializeTable(choiceName, weakerChoices);
        } else {
            this._addChoice(choiceName);
            const newRow = this._makeNewRow(weakerChoices, strongerChoices);
            this._updateTable(newRow);
        }
    }

    _updateTable(newRow){
        // add right side border
        for (let i = 0; i < this._gameTable.length; i++) {
            this._gameTable[i].push(- newRow[i]);
        }
        // add bottom side border
        this._gameTable.push(newRow);
    }

    _makeNewRow(weakerChoices, strongerChoices) {
        if (!Array.isArray(weakerChoices)) weakerChoices = [weakerChoices];
        if (!Array.isArray(strongerChoices)) strongerChoices = [strongerChoices];
        const newRow = new Array(this._gameTable.length + 1).fill(0);
        for (const choice of weakerChoices) {
            let i = this._choiceIdx[choice];
            newRow[i] = 1;
        }
        for (const choice of strongerChoices) {
            let i = this._choiceIdx[choice];
            newRow[i] = -1;
        }
        return newRow;
    }

    _initializeTable(choiceName, weakChoice) {
        this._addChoice(choiceName);
        this._gameTable.push([0, 1]);
        this._addChoice(weakChoice);
        this._gameTable.push([-1, 0]);
    }

    _addChoice(choiceName) {
        this._choiceIdx[choiceName] = this._idx;
        this._idx += 1;
    }

    playRound(playerChoice, computerChoice) {
        const i = this._choiceIdx[playerChoice];
        const j = this._choiceIdx[computerChoice];
        return this._gameTable[i][j];
    }

    getChoices() {
        return this._choiceIdx;
    }

    getTable() {
        return this._gameTable;
    }

    cleanTable() {
        this._gameTable = [];
    }
}