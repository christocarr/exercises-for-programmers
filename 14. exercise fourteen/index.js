const amountInput = document.getElementById('orderAmountInput')
const stateInput = document.getElementById('stateInput')

let amount
let state
amountInput.addEventListener('change', (ev) => {
  amount = Number(ev.target.value)
})
stateInput.addEventListener('change', ev => {
  state = ev.target.value.toUpperCase()
})

function calculateTax() {
  let tax
  if (state === 'WI') {
    tax = 5.5
  } else {
    tax = 4.5
  }

  let taxOnPurchase = amount * (tax / 100)
  let total = amount + taxOnPurchase
  displayOutput(taxOnPurchase, total)
}

function displayOutput(taxOnPurchase, total) {
  
}

