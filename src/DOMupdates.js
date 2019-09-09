import $ from 'jquery';


const DOMupdates = {
  showWinner(player) {
    $('').text(player.name);
    $('').text(player.score);
  },

  appendQuestion(question) {
    $('#current-question').text(question);
  },

  clearQuestion() {
    $('#current-question').text('');
  },

  clearAnswers() {
    $('#answer-1').text('');
    $('#answer-2').text('');
    $('#answer-3').text('');
    $(`#answer-pts-1`).text('');
    $(`#answer-pts-2`).text('');
    $(`#answer-pts-3`).text('');
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
    $('#multiplier').show();
  },

  submitMultiplierInput() {
    $('#multiplier-input-btn').click(appendGoButton());
  },

  appendGoButton() {
    $('#go-btn').show();
  },

  clickGoBtn() {
    $('#go-btn').on('click', console.log('Go!'));
  }
}



export default DOMupdates;