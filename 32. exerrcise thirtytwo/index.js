/*jslint es6*/

const inputs = document.querySelectorAll('input[type=radio]');
const startButton = document.querySelector('button');
const outputDiv = document.querySelector('#outputDiv');

let numberToGuess = 0;
let guessInput

const startGame = () => {
  startButton.classList.add('hide');
  const selectedInput = [...inputs].filter(input => {
    return input.checked === true;
  });
  const selectedInputValue = selectedInput[0].value;
  generateRandomNumber(selectedInputValue);
  outputDiv.append('I have my number. Whats your guess?')
  guessInputGenerator()
};

const generateRandomNumber = value => {
  if (value === 'one') {
    numberToGuess = Math.floor(Math.random() * 10);
  } else if (value === 'two') {
    numberToGuess = Math.floor(Math.random() * 100);
  } else if (value === 'three') {
    numberToGuess = Math.floor(Math.random() * 1000);
  }
};

const guessInputGenerator = () => {
  guessInput = document.createElement('input')
  outputDiv.append(guessInput)
}
