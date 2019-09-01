import Player from "./Player";

class Game {
  constructor(data) {
    this.data = data
    this.currentSurvey = [];
    this.usedSurveys = [];
    this.roundCount = 0;
  }

  startRound() {
    // currentRound = new Round
    // New file for round where normal round and domination round both inherit from?

  }

  generateRandomId() {
     return Math.floor(Math.random() * (this.data.surveys.length - 1 + 1)) + 1;
  }

  selectSurvey(randomId) {
    if (!this.usedSurveys.includes(randomId)) {
      this.currentSurvey.push(this.data.surveys.find(survey => survey.id === randomId)); 
      this.usedSurveys.push(randomId);
      let answers = this.data.answers.filter(answer => answer.surveyId === randomId).sort((a, b) => b.respondents - a.respondents);
      this.currentSurvey = this.currentSurvey.concat(answers);
    } else { 
      this.selectSurvey();
      
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