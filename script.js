const buttonLogin = document.getElementById('button-login');
const inputName = document.getElementById('input-login');
const inputPassword = document.getElementById('input-password');
// const buttonSubmit = document.getElementById('submit-btn')
const userName = 'tryber@teste.com';
const password = '123456';

function checkLogin() {
  const validationLogin = (inputName.value === userName && inputPassword.value === password);
  if (validationLogin) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

// function sendForm() {

// }

buttonLogin.onclick = checkLogin;
// buttonSubmit.onabort = sendForm;
