import Round from "./Round";

class Game {
  constructor(data) {
    this.data = data
    this.currentSurvey = [];
    this.usedSurveys = [];
    this.roundCount = 0;
    this.roundType = "";
    this.player1 = new Player("");
    this.player2 = new Player("")

  }

  startGame() {
    this.selectSurvey()
  }

 // Not sure how to test these handler functions

  startRound() {
    this.currentSurvey = []
    this.chooseSurvey();

  }

  generateRandomId() {
    return Math.floor(Math.random() * (this.data.surveys.length - 1 + 1)) + 1;
  }

  chooseSurvey(randomId) {
    if (!this.usedSurveys.includes(randomId)) {
      this.currentSurvey.push(this.data.surveys.find(survey => survey.id === randomId));
      this.usedSurveys.push(randomId);
      let answers = this.data.answers.filter(answer => answer.surveyId === randomId).sort((a, b) => b.respondents - a.respondents);
      this.currentSurvey = this.currentSurvey.concat(answers);
    } else {
      this.chooseSurvey();
    }
  }

  chooseRound() {
    if(this.roundCount < 3) {
      this.startRound()
    }
  }

  getStartingPlayer() {
    if(this.roundCounter % 2 === 0) {
      return this.player2
    } else {
      return this.player1
    }
  }





  // On start game:
  // Instantiate players REQUIRES 2 players to start
  // Player1 = Player(1, name, score)
  // Player2 = Player(2, name, score)

  // Instantiate a Round(question)

  // Method to keep track of 2 rounds and 1 domination round to then end game
  // roundCount++
  // Instantiates new round 
  // If(roundCount < 2) then instantiate Round
  // If(roundCount > 2) then instantiate Domination Round
  // If(roundCount >= 3) then Display Winner, don't instantiate anything so that the game is "over"

  //End game 
  // On click, end the game and go back to the title/start page







} //<------ end of Game block

export default Game;