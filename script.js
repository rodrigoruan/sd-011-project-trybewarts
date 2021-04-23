const buttonLogin = document.getElementById('button-login');
const inputLogin = document.getElementById('email');
const inputSenha = document.getElementById('senha');

function validLogin() {
  if (inputLogin.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

function login() {
  buttonLogin.addEventListener('click', validLogin);
}

login();
