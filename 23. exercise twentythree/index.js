const newQuestionDiv = document.getElementById('newQuestionDiv')

const createNewQuestion = (answer) => {
  const div = createElement('div')
  const label = createElement('label')
  const input = createElement('input')

  label.appendChild(input)
  div.appendChild(label)

  newQuestionDiv.appendChild(div)
}