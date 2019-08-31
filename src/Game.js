import Player from "./Player";

class Game {
  constructor() {
    this.roundCount = 0;
  }




  // On start game:
    // Instantiate players REQUIRES 2 players to start
      // Player1 = Player(1, name, score)
      // Player2 = Player(2, name, score)

  // Instantiate a Round(question)

  // Method to keep track of 2 rounds and 1 domination round to then end game
      // roundCount++
      // Instantiates new round 
      // If(roundCount < 2) then instantiate Round
      // If(roundCount > 2) then instantiate Domination Round
      // If(roundCount >= 3) then Display Winner, don't instantiate anything so that the game is "over"

  //End game 
      // On click, end the game and go back to the title/start page







} //<------ end of Game block

export default Game;