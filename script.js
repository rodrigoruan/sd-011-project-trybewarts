const btnLogin = document.querySelector('#logar');

btnLogin.addEventListener('click', () => {
  const loginInput = document.querySelector('#loginInput').value;
  const passwordInput = document.querySelector('#passwordInput').value;

  if (loginInput === 'tryber@teste.com' && passwordInput === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
