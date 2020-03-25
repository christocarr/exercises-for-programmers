const lengthInput = document.getElementById('lengthInput')
const specialCharsInput = document.getElementById('specialCharsInput')
const numbersInput = document.getElementById('numbersInput')
const outputDiv = document.getElementById('outputDiv')

let passwordLength, specialCharsLength, numbersLength 

lengthInput.addEventListener('change', ev => {
  let passwordLengthErrPara = document.createElement('p')
  if (ev.target.value < 8) {
    passwordLengthErrPara = document.createElement('p')
    passwordLengthErrPara.textContent = 'Password must have 8 or more characters.'
    outputDiv.append(passwordLengthErrPara)
  } else {
    passwordLengthErrPara.remove()
    passwordLength = ev.target.value
  }
})
specialCharsInput.addEventListener('change', ev => {
  let specialCharsInputErrPara = document.createElement('p')
  if (ev.target.value > 2) {
    specialCharsInputErrPara = document.createElement('p')
    specialCharsInputErrPara.textContent = 'Provide less than 3 special characters.'
    outputDiv.append(specialCharsInputErrPara)
  } else {
    outputDiv.remove(specialCharsInputErrPara)
    specialCharsLength = ev.target.value
  }
})
numbersInput.addEventListener('change', ev => {
  let numberInputErrPara = document.createElement('p')
  if (ev.target.value > 3) {
    numberInputErrPara = document.createElement('p')
    numberInputErrPara.textContent = 'Provide less than 4 numbers.'
    outputDiv.append(numberInputErrPara)
  } else {
    outputDiv.remove(numberInputErrPara)
    specialCharsLength = ev.target.value
  }
  numbersLength = ev.target.value
})

const generatePassword = () => {
  console.log(passwordLength, specialCharsLength, numbersLength)
}