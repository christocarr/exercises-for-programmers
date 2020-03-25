const firstWordInput = document.getElementById('firstWordInput')
const secondWordInput = document.getElementById('secondWordInput')
const outputDiv = document.getElementById('outputDiv')

let firstWord, secondWord
firstWordInput.addEventListener('change', ev => {
  firstWord = ev.target.value
})
secondWordInput.addEventListener('change', ev => {
  secondWord = ev.target.value
})

const evalWords = () => {
  outputDiv.textContent = ''
  let err;
  let isAnagram = false;
  if (firstWord.length === secondWord.length) {
    let secondWordReversed = ''
    for (let i = secondWord.length -1; i > -1; i--) {
      secondWordReversed += secondWord[i]
    }
    isAnagram = firstWord.includes(secondWordReversed)
  } else {
    err = 'Words are different lengths'
    outputDiv.textContent = err
  }
  outputDiv.textContent = `${firstWord} and ${secondWord} are anagrams.`
}