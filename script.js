const loginField = document.querySelector('#login-field');
const passwordField = document.querySelector('#password-field');
const loginButton = document.querySelector('#login-button');
const getBtn = document.querySelector('#submit-btn');
const getCheckBox = document.querySelector('#agreement');
const getCounter = document.querySelector('#counter');
const getTextArea = document.querySelector('#textarea');

function alertLogin() {
  if (loginField.value === 'tryber@teste.com' && passwordField.value === '123456') {
    return alert('Olá, Tryber!');
  }
  return alert('Login ou senha inválidos.');
}

getCheckBox.addEventListener('click', () => {
  if (getCheckBox.checked) {
    getBtn.disabled = false;
  } else {
    getBtn.disabled = true;
  }
});

getTextArea.addEventListener('keyup', () => {
  getCounter.innerHTML = getTextArea.maxLength - getTextArea.value.length;
});

loginButton.addEventListener('click', alertLogin);
