const login = document.getElementById('login-input');
const password = document.getElementById('password-input');
const button = document.getElementById('login-button');

console.log(login, password, button);

function loginTry() {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

button.addEventListener('click', loginTry);
