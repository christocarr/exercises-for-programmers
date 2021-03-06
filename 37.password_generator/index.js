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
  let letterLength = Number(passwordLength) - (Number(specialCharsLength) + Number(numbersLength))
  const newPassword = []
  const specialChars = ['$', '*', '£', '%', '?', '!']
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  
  while (letterLength > 0) {
    newPassword.push(letters[Math.floor(Math.random() * (letters.length - 1))])
    letterLength --
  }

  while (specialCharsLength > 0) {
    newPassword.push(specialChars[Math.floor(Math.random() * (specialChars.length - 1))])
    specialCharsLength --
  }

  while (numbersLength > 0) {
    newPassword.push(numbers[Math.floor(Math.random() * (numbers.length - 1))])
    numbersLength --
  }

  outputDiv.textContent = `Your password is ${newPassword.join('')}`

}