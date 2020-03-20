const ageInput = document.getElementById('ageInput');
const restingPulseInput = document.getElementById('restingPulseInput');
const calculateButton = document.getElementById('calculateButton')
const tblBody = document.querySelector('tbody')

let age = 0;
let restingPulse = 0;
ageInput.addEventListener('keyup', ev => {
  age = Number(ev.target.value);
});
restingPulseInput.addEventListener('keyup', ev => {
  restingPulse = Number(ev.target.value);
});

calculateButton.addEventListener('click', () => {
  calculate()
})

const calculate = () => {

  let intensity = 0.55; //55%
  const targetHeartRate = (220 - age - restingPulse) * intensity + restingPulse;

  output(intensity, targetHeartRate)
};

const output = (intensity, targetHeartRate) => {
  intensity = Math.floor(intensity * 100)
  const tblRow = document.createElement('tr')
  const tblData1 = document.createElement('td')
  const tblData2 = document.createElement('td')
  tblData1.textContent = `${intensity}%`
  tblRow.append(tblData1)
  tblData2.textContent = `${targetHeartRate}bpm`
  tblRow.appendChild(tblData2)
  tblBody.append(tblRow)
}