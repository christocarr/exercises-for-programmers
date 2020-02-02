const nounInput = document.getElementById('noun')
const verbInput = document.getElementById('verb') 
const adverbInput = document.getElementById('adverb') 
const adjectiveInput = document.getElementById('adjective')
const makeMadLibButton = document.getElementById('makeMadLib')
const outputDiv = document.getElementById('outputDiv')

let noun; 
let verb;
let adverb;
let adjective;
nounInput.addEventListener('change', ev => {
  noun = ev.target.value
})
verbInput.addEventListener('change', ev => {
  verb = ev.target.value
})
adverbInput.addEventListener('change', ev => {
  adverb = ev.target.value
})
adjectiveInput.addEventListener('change', ev => {
  adjective = ev.target.value
})
makeMadLibButton.addEventListener('click', () => {
  
})