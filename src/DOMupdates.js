import $ from 'jquery';


const DOMupdates = {
  showWinner(player) {
    $('').text(player.name);
    $('').text(player.score);
  },

  appendQuestion(question) {
    $('#current-question').text(question);
  },

  appendAnswer(answer, index) {
    $(`#answer-${index}`).text(answer);
  },

  appendRespondents(number, index) {
    $(`#answer-pts-${index}`).text(number);
  },

  appendPlayerScore(score, player) {
    $(`${player}-score`).text(score);
  },

  appendCurrentPlayerName(name) {
    $('#players-turn').text(name);
  }
}



export default DOMupdates;