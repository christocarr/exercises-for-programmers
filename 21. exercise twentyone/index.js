const monthNumInput = document.getElementById('monthNumInput')
const outputDiv = document.getElementById('outputDiv')

let monthNum
monthNumInput.addEventListener('change', ev => {
  monthNum = Number(ev.target.value)
})

