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

  appendPlayerScore(score, currentPlayer, player) {
    let number = currentPlayer === player ? 1 : 2;
    $(`#player-${number}-score`).text(score);
  },

  appendCurrentPlayerName(name) {
    $('#players-turn').text(name);
  },

  appendMultiplierInput() {
    $('multiplier').show();
  }
}



export default DOMupdates;