const inputErr = document.querySelectorAll('#inputErr')
const lengthInput = document.getElementById('lengthInput')
const specialCharsInput = document.getElementById('specialCharsInput')
const numbersInput = document.getElementById('numbersInput')
const outputDiv = document.getElementById('outputDiv')

let passwordLength, specialCharsLength, numbersLength 

lengthInput.addEventListener('keyup', ev => {
  passwordLength = ev.target.value
  if (passwordLength > 7) {
    inputErr[0].classList.add('hide')
    inputErr[0].classList.remove('show')
  } else {
    inputErr[0].classList.add('show')
  }
})
specialCharsInput.addEventListener('keyup', ev => {
  specialCharsLength = ev.target.value
  if (specialCharsLength <= 2) {
    inputErr[1].classList.add('hide')
    inputErr[1].classList.remove('show')
  } else {
    inputErr[1].classList.add('show')
  }
})
numbersInput.addEventListener('keyup', ev => {
  numbersLength = ev.target.value
  if (numbersLength <= 3) {
    inputErr[2].classList.add('hide')
    inputErr[2].classList.remove('show')
  } else {
    inputErr[2].classList.add('show')
  }
})

const generatePassword = () => {
  console.log(passwordLength, specialCharsLength, numbersLength)
}