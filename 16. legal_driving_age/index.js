const ageInput = document.getElementById('ageInput');

let age;
ageInput.addEventListener('change', ev => {
  age = Number(ev.target.value);
});

function legalAge() {
  const legalAge = 18;
  let message;
  console.log(age);
  age >= legalAge
    ? (message = `You're old enough to drive`)
    : (message = `You're too young to drive`);
  displayOutput(message)
}

function displayOutput(message) {
  console.log(message)
}
