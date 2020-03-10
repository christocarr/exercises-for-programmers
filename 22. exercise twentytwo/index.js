const firstNumberInput = document.getElementById('firstNumberInput')
const secondNumberInput = document.getElementById('secondNumberInput')
const thirdNumberInput = document.getElementById('thirdNumberInput')
const outputDiv = document.getElementById('outputDiv')

let firstNumber, secondNumber, thirdNumber
firstNumberInput.addEventListener('change', ev => {
  firstNumber = Number(ev.target.value)
})
secondNumberInput.addEventListener('change', ev => {
  secondNumber = Number(ev.target.value)
})
thirdNumberInput.addEventListener('change', ev => {
  thirdNumber = Number(ev.target.value)
})
const compareNumbers = () => {
  console.log(firstNumber, secondNumber, thirdNumber)
}