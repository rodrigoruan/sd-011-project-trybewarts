const submit = document.getElementById('submit-button');
const login = document.getElementById('login');
const password = document.getElementById('password');
const agreement = document.getElementById('agreement');
const formSubmit = document.getElementById('submit-btn');
const textArea = document.getElementById('comment-text');
const counter = document.getElementById('counter');

function submitForm() {
  const standardLogin = 'tryber@teste.com';
  const standardPassword = '123456';
  if (login.value === standardLogin && password.value === standardPassword) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

function enableSubmission() {
  if (agreement.checked) {
    formSubmit.disabled = false;
  } else {
    formSubmit.disabled = true;
  }
}

function charCounter() {
  let charsLeft = 500;
  const typedString = textArea.value.toString();
  charsLeft -= typedString.length;
  counter.innerText = charsLeft;
}

submit.addEventListener('click', submitForm);
agreement.addEventListener('click', enableSubmission);
textArea.addEventListener('keyup', charCounter);
