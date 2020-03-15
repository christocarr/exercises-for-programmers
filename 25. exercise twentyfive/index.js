const passwordInput = document.getElementById('passwordInput');

passwordInput.addEventListener('keyup', ev => {
  let passwordString = ev.target.value;
  passwordValidator(passwordString);
});

const passwordValidator = passwordString => {
  let string = passwordString.toLowerCase()
  const isOnlyChars = /^[a-z]+$/.test(string)
  const isTooShort = string.length < 8 ? true : false
};
