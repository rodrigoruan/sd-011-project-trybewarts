const login = document.getElementById('login');
const senha = document.getElementById('senha');
const button = document.querySelector('.entrar');

button.addEventListener('click', () => {
  if (login.value !== 'tryber@teste.com' || senha.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});
