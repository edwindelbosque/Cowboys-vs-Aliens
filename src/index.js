// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/start-page.gif';
import './images/alien-icon.png';
import './images/cowboy-icon.png';
import './images/favicon-32x32.png';
import './images/favicon-16x16.png';
import './images/grainy-filter.jpg'
import './images/grainy-filter-2.png'
import data from '../data/surveys'
import Game from './Game';

let game;

const main = $('main');
const startGameButton = $('#start-game-button');
const exitButton = $('#exit-button');
const cowboyInput = $('#cowboy-name-input');
const alienInput = $('#alien-name-input');

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

startGameButton.on('click', () => {
  $('#cowboy-name').text(cowboyInput.val());
  $('#alien-name').text(alienInput.val());
  $("html").delay(250).animate({ scrollTop: main.offset().top }, 1000)
  // game = new Game(data, cowboyInput.val(), alienInput.val())
})

exitButton.on('click', () => {
  $("html").delay(250).animate({ scrollTop: 0 }, 1000);
})
