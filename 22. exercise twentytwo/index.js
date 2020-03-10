const firstNumberInput = document.getElementById('firstNumberInput')
const secondNumberInput = document.getElementById('secondNumberInput')
const thirdNumberInput = document.getElementById('thirdNumberInput')
const outputDiv = document.getElementById('outputDiv')

let numbersArr = []
firstNumberInput.addEventListener('change', ev => {
  numbersArr.push(Number(ev.target.value))
})
secondNumberInput.addEventListener('change', ev => {
  numbersArr.push(Number(ev.target.value))
})
thirdNumberInput.addEventListener('change', ev => {
  numbersArr.push(Number(ev.target.value))
})
const compareNumbers = () => {
  console.log(numbersArr)
}