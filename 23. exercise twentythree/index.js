const newQuestionDiv = document.getElementById('newQuestionDiv')



const createNewQuestion = (question) => {
  const div = document.createElement('div')
  const label = document.createElement('label')
  const input = document.createElement('input')

  label.appendChild(input)
  div.appendChild(label)

  newQuestionDiv.appendChild(div)
}