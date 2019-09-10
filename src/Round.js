import DOMupdates from "./DOMupdates";

class Round {
  constructor(game) {
    this.game = game;
    this.survey = game.currentSurvey;
    this.currentPlayer = game.getStartingPlayer();
    this.answers = [];
    this.answerStrings = [];
    this.question = {};
  }

  beginTurn() {
    this.organizeSurvey();
    DOMupdates.appendCurrentPlayerName(this.currentPlayer.name);
    DOMupdates.appendQuestion(this.question.question);
  }

  organizeSurvey() {
    this.question = this.survey.shift();
    this.answers = this.survey;
    this.answerStrings = this.answers.map(answer => answer.answer.toUpperCase());
  }
}  

export default Round;