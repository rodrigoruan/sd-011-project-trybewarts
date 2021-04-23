const btnLogin = document.getElementById('btnLogar');
const inputLogin = document.getElementById('login');
const inptPassword = document.getElementById('password');

function LoginAlert() {
  if (inputLogin.value === 'tryber@teste.com' && inptPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', LoginAlert);
