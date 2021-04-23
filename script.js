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

loginButton.addEventListener('click', submitLogin);

textarea.addEventListener('keyup', counterEvent);
textarea.addEventListener('change', counterEvent);
check.addEventListener('change', checkTerms);

checkTerms();
