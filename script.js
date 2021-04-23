const email = document.querySelector('#input-login-email');
const password = document.querySelector('#input-login-password');
const loginButton = document.querySelector('#loginButton');

// Função que valida o formato de E-mail
function checkLogin() {
  const insertedEmail = email.value;
  const insertedPassword = password.value;
  const emailFormat = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/.test(insertedEmail);
  const passwordFormat = /^[0-9.]/.test(insertedPassword);
  if (!emailFormat || !passwordFormat) {
    email.value = '';
    password.value = '';
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

loginButton.addEventListener('click', checkLogin);
