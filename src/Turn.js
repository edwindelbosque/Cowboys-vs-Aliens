class Turn {
  constructor(currentRound) {
    this.currentRound = currentRound;
    this.currentPlayer = currentRound.currentPlayer;
    this.correctGuesses = [];
  }

  identifyQuestion() {
    return this.currentRound.survey[0].id
  }

  identifyAnswerInfo() {
    return this.currentRound.answers;
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
    if (this.checkGuess(guess)) {
      this.currentPlayer.score += this.countRespondents(guess);
    }
  }

  giveFeedback(guess) {
    return this.checkGuess(guess) ? 'Correct!' : 'Incorrect!'
  }

  toggleHelper() {
    this.currentPlayer === this.currentRound.game.player1
      ? this.currentPlayer = this.currentRound.game.player2
      : this.currentPlayer = this.currentRound.game.player1
  }

  togglePlayer(guess) {
    if(this.checkGuess(guess) === false){
      return this.toggleHelper()
    }
  }
}

export default Turn;