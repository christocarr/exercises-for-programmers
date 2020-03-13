const firstWordInput = document.getElementById('firstWordInput')
const secondWordInput = document.getElementById('secondWordInput')

let firstWord, secondWord
firstWordInput.addEventListener('change', ev => {
  firstWord = ev.target.value
})
secondWordInput.addEventListener('change', ev => {
  secondWord = ev.target.value
})