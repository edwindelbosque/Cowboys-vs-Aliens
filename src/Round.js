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
    let turn = new Turn(this);
    DOMupdates.appendCurrentPlayerName(this.currentPlayer.name);
  }

  capitalizeAnswers() {
    return this.answers.map(answer => answer.answer.toUpperCase());
  }

  organizeSurvey() {
    this.question = this.survey.shift();
    this.answers = this.survey;
    DOMupdates.appendQuestion(this.question.question);
    // DOMupdates.appendCurrentPlayerName(this.currentPlayer.name);
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
//


//Ends round when every correct answer is guessed


// <------ end of Round block

export default Round;


//  - A single, random survey should be chosen at the start of every round
//  - The survey chosen at the start of each round should not be shown more than once in a game
//  - Each survey includes a question and the top 3 responses
//  - Each response has a number associated with it that represents the number of people who gave that response
//  - Initially, only the survey question should be displayed and all responses should be hidden.
//  - As a player guesses a response, the survey should check its responses for a match
//    - If there is a match, that answer should be revealed along with the number of respondents who gave it
//    - If there is no match, the UI should indicate that answer is not on the board
//  - Responses should be displayed on the board in the order of most popular to least popular
