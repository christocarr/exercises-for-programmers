const answers = ['Yes', 'No', 'Maybe', 'Ask again later']
const outputDiv = document.querySelector('div')

const getAnswer = () => {
  const randomNumber = Math.floor(Math.random() * 4)
  outputDiv.textContent = `${answers[randomNumber]}`
}
