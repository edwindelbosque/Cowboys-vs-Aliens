import Turn from './Turn.js';

class DominationTurn extends Turn {
  constructor(currentRound) {
    super(currentRound)
    this.answers = []
  }

  getQuestion() {
    //returns STRING of actual survey question
    return this.currentRound.survey[0].question
  }

  getAnswerStrings() {
    console.log(this.currentRound)
    return this.answers.push(this.currentRound.survey[1].answer, this.currentRound.survey[2].answer, this.currentRound.survey[3].answer)
  }

  capitalizeGuess(guess) {
    return guess.toUpperCase();
  }

  checkGuess(guess) {
    // console.log('answers--->', this.answers)
    console.log('guess---->', guess)
    console.log('boolean??', this.answers)
    return this.currentRound.answers.includes(guess);
    // **how do we capitalize the answers coming in??**
  }

  
  // organizeRespondents() {
    //   let answerInfo = this.currentRound.survey.filter(obj => {
      //     return obj.answer
      //   })
      
      //   return answerInfo.reduce((acc, obj) => {
        //     acc[obj.answer] = obj.respondents
        //     return acc
        //   }, {})
        
        //   //makes survey into a single object of key-value pairs
        //   // {[answer]: [respondents], [answer]: [respondents], [answer]: [respondents]}
        // }
        
  saveRespondents() {
    let answerInfo = [this.currentRound.survey[1], this.currentRound.survey[2], this.currentRound.survey[3]]
    
    answerInfo.forEach(answer => {
      this.currentRound.respondentsInfo.push(answer)
    })
    //surveys saved will allow for points to be added once dom ROUND is complete
  }
  
  getScores(guess) {
    if(this.checkGuess){
      let answerObj= this.currentRound.respondentsInfo.find(answer => {
        return answer.answer === guess
    })
      return answerObj.respondents
    } else {
      return 0
    }
  }
  
  
  savePoints(guess) {
    return this.currentRound.dominationGuesses.push(this.getScores(guess))
    //surveys saved will allow for points to be added once dom ROUND is complete
  }




  decreaseTimer() {

  }


  multiplyScores(multiplier) {
    // game.player.score + this.dominationPoints
    // return score * multiplier
  }


//   continueDominationRound() {
//     if (this.currentPlayer === player2) {
//       game.getWinner()
//     } else {
//       this.changeDominationTurn()
//     }
//   }

//   changeDominationTurn() {
//     this.guesses = [];
//     this.seconds = 30;
//     game.selectSurvey();
//   }


// }

// //Extend from round
// //Keep track of timer
}

export default DominationTurn;
import Game from './Game.js';
