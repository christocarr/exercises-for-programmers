const outputDiv = document.querySelector('div')
const nameInput = document.querySelector('input')

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

