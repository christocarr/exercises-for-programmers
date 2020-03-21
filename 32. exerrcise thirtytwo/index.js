/*jslint es6*/

const inputs = document.querySelectorAll('input[type=radio]');
const startButton = document.querySelector('button');
const outputDiv = document.querySelector('#outputDiv')

const startGame = () => {
  startButton.classList.add('hide')
  const selectedInput = [...inputs].filter(input => {
    return input.checked === true
  })
  const selectedInputValue = selectedInput[0].value
  
};
