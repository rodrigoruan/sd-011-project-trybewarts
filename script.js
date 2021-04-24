const loginField = document.querySelector('#login-field');
const passwordField = document.querySelector('#password-field');
const loginButton = document.querySelector('#login-button');

function alertLogin() {
  if (loginField.value === 'tryber@teste.com' && passwordField.value === '123456') {
    return alert('Olá, Tryber!');
  }
  return alert('Login ou senha inválidos.');
}

loginButton.addEventListener('click', alertLogin);

const getBtn = document.querySelector('#submit-btn');
const getCheckBox = document.querySelector('#agreement');

getCheckBox.addEventListener('click', () => {
  if (getCheckBox.checked) {
    getBtn.disabled = false;
  } else {
    getBtn.disabled = true;
  }
});

const getCounter = document.querySelector('#counter');
const getTextArea = document.querySelector('#textarea');

getTextArea.addEventListener('keyup', () => {
  getCounter.innerHTML = getTextArea.maxLength - getTextArea.value.length;
});
