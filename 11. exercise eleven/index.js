const eurosInput = document.getElementById('eurosInput')
const exchangeRateInput = document.getElementById('exchangeRateInput')
const outputDiv = document.getElementById('outputDiv')

let euros
eurosInput.addEventListener('change', (ev) => {
  euros = parseInt(ev.target.value)
})

let exchangeRate
exchangeRateInput.addEventListener('change', (ev) => {
  exchangeRate = parseInt(ev.target.value)
})

