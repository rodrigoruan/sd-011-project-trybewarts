const btnlogin = document.getElementById('btnlogin');
const login = document.getElementById('login');
const password = document.getElementById('password');

function authentication() {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

btnlogin.addEventListener('click', authentication);