import Player from "./Player";
import DOMupdates from "./DOMupdates";

class Game {
  constructor(data, playerOne, playerTwo) {
    this.data = data;
    this.currentSurvey = [];
    this.currentSurveyId = 0
    this.usedSurveys = [];
    this.roundCount = 1;
    this.player1 = new Player(playerOne);
    this.player2 = new Player(playerTwo);
    this.multiplier = 1;
  }

  chooseSurvey(id = Math.floor(Math.random() * (15 - 1 + 1)) + 1) {
    if (!this.usedSurveys.includes(id)) {
      this.currentSurvey.push(this.data.surveys.find(survey => survey.id === id));
      this.usedSurveys.push(id);
      let answers = this.data.answers.filter(answer => answer.surveyId === id).sort((a, b) => b.respondents - a.respondents);
      this.currentSurvey = this.currentSurvey.concat(answers);
      return this.currentSurvey
    } else {
      this.chooseSurvey();
    }
  }

  chooseRound() {
    if (this.roundCount <= 4) {
      this.startRound();
    }
    if (this.roundCount > 4) {
      this.getWinner();
    }
  }

  getStartingPlayer() {
    if (this.roundCount % 2 === 0) {
      return this.player2
    } else {
      return this.player1
    }
  }

  startRound() {
    DOMupdates.clearAnswers();
    this.currentSurvey = [];
    this.chooseSurvey();
  }

  getWinner() {
    if (this.player1.score > this.player2.score) {
      DOMupdates.showWinner(this.player1)
    } else if (this.player1.score < this.player2.score) {
      DOMupdates.showWinner(this.player2)
    } else {
      DOMupdates.showWinner('TIE!')
    }
  }
}

export default Game;