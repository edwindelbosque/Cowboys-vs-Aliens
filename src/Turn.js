import Player from "./Player";

class Turn {
  constructor(currentRound) {
    this.currentRound = currentRound;
    // this.currentSurvey = currentRound.surveyQuestion;
    // this.currentAnswers = currentRound.answers
    // this.currentPlayer = currentPlayer;
    this.correctGuesses = [];
  }

  identifyQuestion() {
    return this.currentRound.surveyQuestion.id;
  }

  identifyAnswerInfo() {
    return this.currentRound.answers
  }

  identifyCorrectAnswers() {
    return this.identifyAnswerInfo().map(answerInfo => {
      return answerInfo.answer
    })
  }

  capitalizeGuess(guess) {
    let capitalizedWords = guess.toLowerCase().split(' ').map(word => {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    });

    return capitalizedWords.join(' ') 
  }

  checkGuess(guess) {
    return this.identifyCorrectAnswers().includes(guess) ? true : false;
  }


  // displayCorrectAnser(guess) {

  // }



  // ?constructor(currentRound, currentSurvey, currentPlayer)
  //checks if guess is correct
  //if correct, updates score 
  //Give feedback
  //Toggle the player

} //<---- end of Turn class






export default Turn;