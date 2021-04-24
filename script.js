const check = document.getElementById('agreement');
const submit = document.getElementById('submit-btn');

const counter = document.getElementById('counter');
const textarea = document.getElementById('textarea').nextElementSibling;

const login = document.getElementById('login');
const password = document.getElementById('password');
const loginButton = document.getElementById('login-button');

function checkTerms() {
  submit.disabled = !check.checked;
}

function counterEvent() {
  counter.innerText = 500 - textarea.value.length;
}

function submitLogin() {
  if (login.value.toLowerCase() === 'tryber@betrybe.com' || password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

function deleteForms() {
  const form = document.getElementById('evaluation-form');
  form.parentNode.removeChild(form);
}

loginButton.addEventListener('click', submitLogin);

textarea.addEventListener('keyup', counterEvent);

check.addEventListener('change', checkTerms);

submit.addEventListener('click', submitForms);

window.onload = checkTerms;
