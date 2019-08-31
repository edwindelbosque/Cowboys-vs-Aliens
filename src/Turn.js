class Turn {
  constructor(currentRound, currentSurvey, currentPlayer, correctGuesses) {
    this.currentRound = currentRound;
    this.currentSurvey = currentSurvey;
    this.currentPlayer = currentPlayer;
    this.correctGuesses = [];
  }
}


//checks if guess is correct
//if correct, updates score 
//Give feedback
//Toggle the player


export default Turn;