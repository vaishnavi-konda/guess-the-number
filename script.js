'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const handleCheck = function () {
  const guess = Number(document.querySelector('.guess').value);
  let message = '';
  if (!guess) {
    message = '🚫 No number';
  } else if (guess === secretNumber) {
    message = guess + ' is the Correct Answer 🎉';
    highscore = Math.max(score, highscore);
    document.querySelector('body').style.backgroundColor = 'green';
  } else if (guess < secretNumber) {
    score--;
    message = guess + ' is Too Low 👇 ';
  } else {
    score--;
    message = guess + ' is Too High ☝ ';
  }

  if (score < 1) {
    message = 'You lost the game 😢';
  }

  document.querySelector('.message').textContent = message;
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = highscore;
};

const handleReset = function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = 'black';
};

document.querySelector('.check').addEventListener('click', handleCheck);
document.querySelector('.reset').addEventListener('click', handleReset);
