import Game from '../src/Game';
import Turn from "./Turn";
import DOMupdates from "./DOMupdates";


class Round {
  constructor(game) {
    this.game = game;
    this.survey = game.currentSurvey;
    this.currentPlayer = game.getStartingPlayer();
    this.answers = [];
    this.question = {};
  }

  beginTurn() {
    this.organizeSurvey();
    DOMupdates.appendCurrentPlayerName(this.currentPlayer.name);
    DOMupdates.appendQuestion(this.question.question);
  }

  capitalizeAnswers() {
    return this.answers.map(answer => answer.answer.toUpperCase());
  }

  organizeSurvey() {
    this.question = this.survey.shift();
    this.answers = this.survey;
  }
}  

export default Round;