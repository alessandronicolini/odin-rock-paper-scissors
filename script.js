import View from "./scripts/view.js";
import PlayersModel from "./scripts/playersModel.js";
import GameFactoryModel from "./scripts/gameFactoryModel.js";
import Controller from "./scripts/controller.js";

const gameVersion = 'rock paper scissors';
const gameChoices = gameVersion.split(' ');

// Model View Controller design pattern elements
const playersModel = new PlayersModel(5, gameChoices);
const gameModel = new GameFactoryModel(gameVersion);
const view = new View();
const controller = new Controller(view, playersModel, gameModel);

controller.setPlayerButtonsListener();