
import Game from '../src/Game';
import Round from '../src/Round'
import Turn from "./Turn";
import DOMupdates from "./DOMupdates";
import RegularTurn from "./RegularTurn"


class RegularRound extends Round  {
  constructor(game) {
    super(game)
    this.game = game;
    this.survey = game.currentSurvey;
    this.currentPlayer = game.getStartingPlayer();
    this.answers = [];
    this.question = {};
  }

  endRound() {
    if (this.answers.every(answer => answer.answer === 'false')) {
      this.game.roundCount++;
      this.game.chooseRound();
    }
  }
}






//Generates a new random survey question
//Should not generate a survey question that was already generated for that round
//Generates 3 correct answers from that question

//Instantiates turn (if there are still unguessed correct answers)
//Keeps track of how many correct answers have been guessed

//checkRound() called after every turn. Changes property this.isComplete if the answers array is empty
//


//Ends round when every correct answer is guessed


// <------ end of Round block

export default RegularRound;