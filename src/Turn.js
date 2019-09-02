import Player from "./Player";

class Turn {
  constructor(currentRound, currentPlayer) {
    this.currentRound = currentRound;
    this.currentAnswers = currentRound.answers
    this.currentPlayer = currentPlayer;
    // this.pointsAlloted = 0; <----can probably delte this****
    // this.correctGuesses = []; <--- for domination turn?
  }

  identifyQuestion() {
    return this.currentRound.survey[0].id
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

    return capitalizedWords.join(' ');
  }

  checkGuess(guess) {
    return this.identifyCorrectAnswers().includes(this.capitalizeGuess(guess)) ? true : false;
  }

  countRespondents(guess) {
    let answerInfo = this.identifyAnswerInfo().find(answer => {
     return answer.answer.includes(this.capitalizeGuess(guess))
    })
    return answerInfo.respondents;
  }

  // allotPoints(guess) {
  //   this.pointsAlloted = this.countRespondents(guess);
  //   return this.pointsAlloted;
  // } <----can probably delte this****

  // giveFeedback(guess) {
  //   // console.log(this.checkGuess(guess))
  //   return this.checkGuess(guess)? 'Correct!' : 'X'
  // }



  // ?constructor(currentRound, currentSurvey, currentPlayer)
  //checks if guess is correct
  //if correct, updates score in PLAYER
  //Give feedback


} //<---- end of Turn class






export default Turn;