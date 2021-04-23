const user = document.querySelector('#user');
const password = document.querySelector('#password');
const btnLogin = document.querySelector('#login');

btnLogin.addEventListener('click', () => {
  if ((user === 'tryber@teste.com') && (password === '123456')) {
    alert('Login ou senha inválidos.');
    return;
  } else {
    alert('Olá, Tryber!');
  }
});
