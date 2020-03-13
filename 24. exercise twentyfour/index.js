const firstWordInput = document.getElementById('firstWordInput')
const secondWordInput = document.getElementById('secondWordInput')

let firstWord, secondWord
firstWordInput.addEventListener('change', ev => {
  firstWord = ev.target.value
})
secondWordInput.addEventListener('change', ev => {
  secondWord = ev.target.value
})

const evalWords = () => {
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
    console.log(err)
  }
  console.log(isAnagram)
}