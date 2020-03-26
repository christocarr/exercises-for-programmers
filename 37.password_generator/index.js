const inputDiv = document.querySelectorAll('.inputDiv')
const lengthInput = document.getElementById('lengthInput')
const specialCharsInput = document.getElementById('specialCharsInput')
const numbersInput = document.getElementById('numbersInput')
const outputDiv = document.getElementById('outputDiv')

let passwordLength, specialCharsLength, numbersLength 

lengthInput.addEventListener('keyup', ev => {
  passwordLength = ev.target.value
  validateInput()
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

const validateInput = () => {
  const isLengthGood = passwordLength > 7 ? true : false
  if (isLengthGood) {
    const passwordLengthErrPara = document.createElement('p')
    passwordLengthErrPara.textContent = 'Password must have 8 or more characters.'
    inputDiv[0].append(passwordLengthErrPara)
  } else {
    
  }
}

const generatePassword = () => {
  console.log(passwordLength, specialCharsLength, numbersLength)
}