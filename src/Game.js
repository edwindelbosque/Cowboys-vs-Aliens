import Round from "./Round";
import Player from "./Player";

class Game {
  constructor(data, nameOne, nameTwo) {
    this.data = data
    this.currentSurvey = [];
    this.currentSurveyId = 0
    this.usedSurveys = [];
    this.roundCount = 1;
    this.player1 = new Player(nameOne);
    this.player2 = new Player(nameTwo);
  }

  startGame() {
    this.chooseSurvey()
  }

  startRound() {
    this.currentSurvey = []
    this.chooseSurvey();
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
    if (this.roundCount < 3) {
      this.startRegularRound()
    }
    if (this.roundCount === 3) {
      this.startDominationRound()
    }
  }

  getStartingPlayer() {
    if (this.roundCounter % 2 === 0) {
      return this.player2
    } else {
      return this.player1
    }
  }

  startRegularRound() {
    new Round(this.currentSurvey)
    this.currentSurvey = []
  }

  startDominationRound() {
    this.currentSurvey = []
  }

  //Set players to property and that's where we instantiate the 2?
  // Player1 = Player(1, name, score)
  // Player2 = Player(2, name, score)

  // Instantiate a Round(pass in the whole game class?)

  // Method to keep track of 2 rounds and 1 domination round to then end game
  // roundCount++
  // Instantiates new round 

  // If(roundCount < 2) then instantiate Round
  // If(roundCount > 2) then instantiate Domination Round
  // If(roundCount >= 3) then Display Winner, don't instantiate anything so that the game is "over"

  //End game 
  // On click, end the game and go back to the title/start page

}

export default Game;