import Round from "./Round";
import Player from "./Player";

class Game {
  constructor(data) {
    this.data = data
    this.currentSurvey = [];
    this.usedSurveys = [];
    this.roundCount = 1;
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


  
  chooseSurvey(id = Math.floor(Math.random() * (15 - 1 + 1)) + 1) {
    if (!this.usedSurveys.includes(id)) {
      console.log('random id -->', id)
      this.currentSurvey.push(this.data.surveys.find(survey => survey.id === id));
      this.usedSurveys.push(id);
      let answers = this.data.answers.filter(answer => answer.surveyId === id).sort((a, b) => b.respondents - a.respondents);
      this.currentSurvey = this.currentSurvey.concat(answers);
      console.log('current survey --->', this.currentSurvey)
  } else {
    this.chooseSurvey();
  }
}

  chooseRound() {
    if(this.roundCount < 3) {
      this.startRegularRound()
    }
    if(this.roundCount === 3) {
      this.startDominationRound()
    } 
  }

  getStartingPlayer() {
    if(this.roundCounter % 2 === 0) {
      return this.player1
    } else {
      return this.player2
    }
  }

  // startRound() {
  //   this.currentSurvey = [];
  //   this.chooseSurvey();
  //   this.chooseRound()
  // }

  //Not sure what we'll end up passing through Round, but this will instantiate it
  startRegularRound() {
    this.currentSurvey =[]
    this.currentRound = new Round(this);
    this.roundCount++
  }

  startDominationRound() {
    this.currentSurvey = []

  }




  // On start game:
  // Instantiate players REQUIRES 2 players to start

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







} //<------ end of Game block

export default Game;