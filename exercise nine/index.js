const lengthInput = document.getElementById('length')
const widthInput = document.getElementById('width')

let length;
let width;

lengthInput.addEventListener('change', (ev) => {
  length = parseInt(ev.target.value)
})

widthInput.addEventListener('change', (ev) => {
  width = parseInt(ev.target.value)
})

function calculate() {
  const areaToPaint = length * width
  const oneGallonCovers = 350
  if (areaToPaint < oneGallonCovers) {
    const paintNeeded = 'One Gallon'
  } else {
    
  }
  console.log(oneGallonCovers / areaToPaint)
}
