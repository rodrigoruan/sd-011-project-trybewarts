const loginField = document.querySelector('.login');
const passwordField = document.querySelector('.senha');
const button = document.querySelector('.buttonLogin');
const checkbox = document.querySelector('#agreement');
const buttonSubmit = document.querySelector('#submit-btn');

function verifyLogin() {
  if (loginField.value !== 'tryber@teste.com' || passwordField.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

button.addEventListener('click', verifyLogin);

function verifyAgreement() {
  if (checkbox.checked) {
    buttonSubmit.removeAttribute('disabled');
  } else {
    buttonSubmit.setAttribute('disabled', 'disabled');
  }
}

checkbox.addEventListener('click', verifyAgreement);

const counter = document.getElementById('counter');
const textArea = document.querySelector('#textarea');
counter.innerText = 500;

function countingLetters() {
  counter.innerText = 500 - textArea.value.length;
}
textArea.addEventListener('input', countingLetters);
