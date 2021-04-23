const check = document.getElementById('agreement');
const submit = document.getElementById('submit-btn');

const login = document.getElementById('login');
const password = document.getElementById('password');
const loginButton = document.getElementById('login-button');

function checkTerms() {
  if (check.value === 'on') {
    submit.disabled = true;
  } else {
    submit.disabled = false;
  }
}

function submitLogin() {
  if (login.value === 'tryber@betrybe.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

loginButton.addEventListener('click', submitLogin);
check.addEventListener('change', checkTerms);

checkTerms();
