let peopleInParty;
let pizzasNeeded;

function inputHandler() {
  peopleInParty = parseInt(document.getElementById('people').value)
  pizzasNeeded = parseInt(document.getElementById('pizzas').value)
}

function calculateShare() {
  const leftOvers = peopleInParty % pizzasNeeded
  console.log('Slices each:', Math.floor(peopleInParty / pizzasNeeded))
  console.log('Left overs:', leftOvers)
}