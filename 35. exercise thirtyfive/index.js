const outputDiv = document.querySelector('div')
const nameInput = document.querySelector('input')
const winnerDiv = document.getElementById('winnerDiv')

let name = ''
let nameArr = []

nameInput.addEventListener('keyup', (ev) => {
  name = ev.target.value
  if (ev.keyCode === 13 ) {
    const para = document.createElement('p')
    para.textContent = name
    outputDiv.append(para)
    ev.target.value = ''
    nameArr.push(name)
  }
})

const selectWinner = () => {
  const lengthOfArr = nameArr.length
  const randomNumber = Math.floor(Math.random() * lengthOfArr)
  const winner = nameArr.slice(randomNumber, randomNumber + 1)
  winnerDiv.textContent = `The winner is: ${winner[0]}`
}
