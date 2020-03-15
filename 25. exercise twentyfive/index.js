const passwordInput = document.getElementById('passwordInput');

passwordInput.addEventListener('keyup', ev => {
  let passwordString = ev.target.value;
  passwordValidator(passwordString);
});

const passwordValidator = passwordString => {
  let message = '';
  let string = passwordString.toLowerCase();
  const isOnlyLetters = /^[a-z]+$/.test(string);
  const isOnlyNumbers = /^[0-9]+$/.test(string);
  const isTooShort = string.length < 8 ? true : false;
  const hasSpecChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(string);


  if (isTooShort && isOnlyNumbers) {
    message = `Your password is very weak please enter more than eight characters and at least one letter`;
  } else if (isTooShort && isOnlyLetters) {
    message = `Your password is weak please enter at least one number and more than eight characters`;
  } else if (!isTooShort && !isOnlyLetters && hasSpecChar) {
    message = 'Your password is strong';
  } else {
    message = 'Your password is very strong';
  }
};
