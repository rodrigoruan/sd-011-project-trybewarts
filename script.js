const login = document.getElementById('login-input');
const password = document.getElementById('password-input');

function loginInput() {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

button.addEventListener('click', loginInput);