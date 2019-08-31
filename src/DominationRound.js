class DominationRound extends Round {
  constructor(survey, answers, multiplier) {
    super(survey, answers);
    this.survey = survey;
    this.answers = answers;
    this.multiplier = multiplier;
  }



  // Keeps track of timer
  // Instantiates domination turn


} //<-------end of DominationRound block

export default DominationRound;
import Round from './Round.js';