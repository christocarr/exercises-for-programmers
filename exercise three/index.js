/*Create a program that asks for a quote and the author */

const quoteInput = document.getElementById('quote')
const authorInput = document.getElementById('author')
const submitButton = document.getElementById('submit')
let quote = '';
let author = '';
quoteInput.addEventListener('change', (ev) =>{
  quote = ev.target.value
})

authorInput.addEventListener('change', (ev) => {
  author = ev.target.value
})

submitButton.addEventListener('click', () => {
  
})
