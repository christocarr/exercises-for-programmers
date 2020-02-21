const amountInput = document.getElementById('amountInput')
const stateInput = document.getElementById('stateInput')

let amount
let state
amountInput.addEventListener('change', (ev) => {
  amount = Number(ev.target.value)
})
stateInput.addEventListener('change', ev => {
  state = ev.target.value
})