const outputDiv = document.querySelector('div');
const numberInput = document.querySelector('input');
const calculationOutput = document.getElementById('calculationsOutput')

let number = 0;
let numberArr = [];

numberInput.addEventListener('keyup', ev => {
  number = ev.target.value;
  if (ev.keyCode === 13 ) {
    const para = document.createElement('p')
    para.textContent = number
    outputDiv.append(para)
    ev.target.value = ''
    numberArr.push(number)
  }
});

const calculate = () => {
  console.log('calc')
}