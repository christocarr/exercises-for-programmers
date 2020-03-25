/* 
  Write a program that prompts for two numbers.
  Print the sum. difference, product, and quotient of those numbers.
*/

const firstNumber = document.getElementById('firstNumber');
const secondNumber = document.getElementById('secondNumber');
const calcButton = document.getElementById('calcButton');
const outputDiv = document.getElementById('outputDiv');

let first;
let second;
firstNumber.addEventListener('change', ev => {
  first = Number(ev.target.value);
});
secondNumber.addEventListener('change', ev => {
  second = Number(ev.target.value);
});

calcButton.addEventListener('click', () => {
  outputDiv.innerHTML = '';
  const sum = document.createElement('p');
  sum.innerHTML = `${first} + ${second} = ${first + second}`;
  outputDiv.append(sum);
  const diff = document.createElement('p');
  diff.innerHTML = `${first} - ${second} = ${first - second}`;
  outputDiv.append(diff);
  const product = document.createElement('p');
  product.innerHTML = `${first} X ${second} = ${first * second}`;
  outputDiv.append(product);
  const quotient = document.createElement('p');
  quotient.innerHTML = `${first} / ${second} = ${first / second}`;
  outputDiv.append(quotient);
});
