class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.multiplier = 1;
  }

  calculateFinalScore(respondents) {
    return this.score = this.score + respondents * this.multiplier;
  }



}

export default Player;