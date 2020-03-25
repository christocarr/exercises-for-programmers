const lengthInput = document.getElementById('lengthInput')
const specialCharsInput = document.getElementById('specialCharsInput')
const numbersInput = document.getElementById('numbersInput')

let passwordLength, specialCharsLength, numbersLength 

lengthInput.addEventListener('change', ev => {
  passwordLength = ev.target.value
})
specialCharsInput.addEventListener('change', ev => {
  specialCharsLength = ev.target.value
})
numbersInput.addEventListener('change', ev => {
  numbersLength = ev.target.value
})