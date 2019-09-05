class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.multiplier = 1;
  }

  calculateFinalScore() {
    return this.score = this.score * this.multiplier;
  }



}

export default Player;