import Player from "./Player";

class Turn {
  constructor(currentRound) {
    this.currentRound = currentRound;
    // this.currentAnswers = currentRound.answers
    this.currentPlayer = round.currentPlayer;
    // this.pointsAlloted = 0; <----can probably delte this****
    // this.correctGuesses = []; <--- for domination turn?
  }

  identifyQuestion() {
    return this.currentRound.survey[0].id
  }

  identifyAnswerInfo() {
    return this.currentRound.survey.filter(survey => {
      return survey.answer;
    });
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

  updateScore(guess) {
    if(this.checkGuess(guess)) {
      this.currentPlayer.score += this.countRespondents(guess);
    }
  }


  // giveFeedback(guess) {
  //   // console.log(this.checkGuess(guess))
  //   return this.checkGuess(guess)? 'Correct!' : 'X'
  // }

  togglePlayer() {
    if(this.currentPlayer === player1) {
      this.currentPlayer = player2
    } else if (this.currentPlayer === player2) {
      this.currentPlayer = player1
    }
  }

//helper function to toggle players
//make it happen ^^^ depending on correct/incorrect guess


} //<---- end of Turn class






export default Turn;