'use strict';

/* console.log(document.querySelector('.message'));

document.querySelector('.message').textContent = '🎉 Correct number';

document.querySelector('.number').textContent = '7';
document.querySelector('.score').textContent = '20';

document.querySelector('.guess').value = 45;
console.log(document.querySelector('.guess').value); */

let secretNumber = Number(Math.trunc(Math.random() * 20)) + 1;
let score20 = 20;
let hScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No argument!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct number';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    if (score20 > hScore) {
      hScore = score20;
      document.querySelector('.highscore').textContent = hScore;
    }
  } else if (guess > secretNumber) {
    if (score20 <= 1) {
      document.querySelector('.message').textContent = '😇 Game Lost';
      document.querySelector('.score').textContent = 0;
    } else {
      document.querySelector('.message').textContent = '📈 High value';
      score20--;
      document.querySelector('.score').textContent = score20;
    }
  } else if (guess < secretNumber) {
    if (score20 <= 1) {
      document.querySelector('.message').textContent = '😇 Game Lost';
      document.querySelector('.score').textContent = 0;
    } else {
      document.querySelector('.message').textContent = '📉 Low value';
      score20--;
      document.querySelector('.score').textContent = score20;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Number(Math.trunc(Math.random() * 20)) + 1;
  score20 = 20;
  console.log(secretNumber);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
