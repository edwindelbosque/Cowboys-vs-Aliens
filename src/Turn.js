import Round from "./Round";
import DOMupdates from "./DOMupdates";

class Turn {
  constructor(currentRound) {
    this.currentRound = currentRound;
    this.currentPlayer = currentRound.currentPlayer;
  }

  // identifyQuestion() {
  //   return this.currentRound.survey[0].id
  // }

  // capitalizeGuess(guess) {
  //   return guess.toUpperCase();
  // }

  // checkGuess(guess) {
  //   console.log(this.currentRound.capitalizeAnswers());
  //   return this.currentRound.capitalizeAnswers().includes(this.capitalizeGuess(guess));
  // }



}



export default Turn;