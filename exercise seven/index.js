const lenthInput = document.getElementById('length')
let length;
lenthInput.addEventListener('change', (ev) => {
  length = parseInt(ev.target.value)
})

const widthInput = document.getElementById('width')
let width;
widthInput.addEventListener('change', (ev) => {
  width = parseInt(ev.target.value)
})

function calculateArea() {
  console.log(length, width)
}

