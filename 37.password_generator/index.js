const inputDiv = document.querySelectorAll('.inputDiv')
const lengthInput = document.getElementById('lengthInput')
const specialCharsInput = document.getElementById('specialCharsInput')
const numbersInput = document.getElementById('numbersInput')
const outputDiv = document.getElementById('outputDiv')

let passwordLength, specialCharsLength, numbersLength 

lengthInput.addEventListener('change', ev => {
  let passwordLengthErrPara = document.createElement('p')
  if (ev.target.value < 8) {
    passwordLengthErrPara.textContent = 'Password must have 8 or more characters.'
    inputDiv[0].append(passwordLengthErrPara)
  } else {
    passwordLength = ev.target.value
  }
})
specialCharsInput.addEventListener('change', ev => {
  let specialCharsInputErrPara = document.createElement('p')
  if (ev.target.value > 2) {
    specialCharsInputErrPara.textContent = 'Provide less than 3 special characters.'
    inputDiv[1].append(specialCharsInputErrPara)
  } else {
    specialCharsLength = ev.target.value
  }
})
numbersInput.addEventListener('change', ev => {
  let numberInputErrPara = document.createElement('p')
  if (ev.target.value > 3) {
    numberInputErrPara.textContent = 'Provide less than 4 numbers.'
    inputDiv[2].append(numberInputErrPara)
  } else {
    numbersLength = ev.target.value
  }
})

const generatePassword = () => {
  console.log(passwordLength, specialCharsLength, numbersLength)
}