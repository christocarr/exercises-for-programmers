const itemOnePriceInput = document.getElementById('itemOnePriceInput')
const itemTwoPriceInput = document.getElementById('itemTwoPriceInput')
const itemThreePriceInput = document.getElementById('itemThreePriceInput')

const itemOneQuantityInput = document.getElementById('itemOneQuantityInput')
const itemTwoQuantityInput = document.getElementById('itemTwoQuantityInput')
const itemThreeQuantityInput = document.getElementById('itemThreeQuantityInput')

let itemOnePrice
let itemTwoPrice
let itemThreePrice
let itemOneQuantity
let itemTwoQuantity
let itemThreeQuantity

itemOnePriceInput.addEventListener('change', (ev) => {
  itemOnePrice = parseInt(ev.target.value)
})
itemTwoPriceInput.addEventListener('change', (ev) => {
  itemTwoPrice = parseInt(ev.target.value)
})
itemThreePriceInput.addEventListener('change', (ev) => {
  itemThreePrice = parseInt(ev.target.value)
})

itemOneQuantityInput.addEventListener('change', (ev) => {
  itemOneQuantity = parseInt(ev.target.value)
})
itemTwoQuantityInput.addEventListener('change', (ev) => {
  itemTwoQuantity = parseInt(ev.target.value)
})
itemThreeQuantityInput.addEventListener('change', (ev) => {
  itemThreeQuantity = parseInt(ev.target.value)
})