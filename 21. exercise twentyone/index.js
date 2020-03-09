const monthNumInput = document.getElementById('monthNumInput')
const outputDiv = document.getElementById('outputDiv')

let monthNum
monthNumInput.addEventListener('change', ev => {
  monthNum = Number(ev.target.value)
})

const getMonthName = () => {
  let monthName
  switch (monthNum) {
    case 1:
      monthName = 'January'
      break
    case 2:
      monthName = 'Febuary'
      break
    case 3:
      monthName = 'March'
      break
    case 4:
      monthName = 'April'
      break
    case 5:
      monthName = 'May'
      break
    case 6:
      monthName = 'June'
      break
    case 7:
      monthName = 'July'
      break
    case 8:
      monthName = 'August'
      break
    case 9: 
      monthName = 'September'
      break
    case 10: 
      monthName = 'October'
      break
    case 11: 
      monthName = 'November'
      break
    case 12: 
      monthName = 'December'
      break
    default:
      monthName = `Please enter 1 - 12`
      break
  }
  outputMonth(monthName)
}

const outputMonth = (month) => {
  outputDiv.textContent = month
}