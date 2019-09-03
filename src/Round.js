import Turn from "./Turn";

class Round {
  constructor(game) {
    this.game = game;
    this.survey = game.currentSurvey;
    this.currentPlayer = game.getStartingPlayer();
    this.answers = [];
    this.question = {};
  }

  beginTurn() {
    let turn = new Turn(this)
    return turn;
  }

  togglePlayer() {

  }

  organizeSurvey() {
    this.question = this.survey.shift();

    this.answers = this.survey
  }

  endRound(game) {
    if (!this.answers.length) {
      game.roundCount++;
      // game.roundHandler();
    }
  }
}

//Generates a new random survey question
//Should not generate a survey question that was already generated for that round
//Generates 3 correct answers from that question

//Instantiates turn (if there are still unguessed correct answers)
//Keeps track of how many correct answers have been guessed

//checkRound() called after every turn. Changes property this.isComplete if the answers array is empty

//Ends round when every correct answer is guessed

export default Round;