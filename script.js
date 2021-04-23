const login = document.getElementById('login-value');
const password = document.getElementById('password-value');
const enter = document.getElementById('enter');

function clickenter() {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

enter.addEventListener('click', clickenter);
