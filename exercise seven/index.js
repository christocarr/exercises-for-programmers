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
  const areaInFeet = length * width
  const areaInMeters = areaInFeet * 0.09290304
  view.createOutput(areaInFeet, areaInMeters)
}

view = {
  createOutput: function(feet, meters) {
    const outputDiv = document.getElementById('outputDiv')
    outputDiv.innerHTML = ''
    const userInput = document.createElement('p')
    const areaInFeet = document.createElement('p')
    const areaInMeters = document.createElement('p')
    userInput.textContent = `You entered a length of ${length} feet and a width of ${width} feet.`
    areaInFeet.textContent = `The area in feet is ${feet} square feet.`
    areaInMeters.textContent = `The area in meters is ${meters} square meters.`
    outputDiv.appendChild(userInput)
    outputDiv.appendChild(areaInFeet)
    outputDiv.appendChild(areaInMeters)
  }
}
