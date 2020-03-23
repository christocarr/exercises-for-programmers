const outputDiv = document.querySelector('div')
const nameInput = document.querySelector('input')

let name = ''

nameInput.addEventListener('keyup', (ev) => {
  name = ev.target.value
  if (ev.keyCode === 13 ) {
    const para = document.createElement('p')
    para.textContent = name
    outputDiv.append(para)
    ev.target.value = ''
  }
})

