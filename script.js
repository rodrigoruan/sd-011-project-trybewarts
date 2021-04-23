// Exercício 3
const loginButton = document.getElementById('button-logar');
const valueLogin = document.getElementById('login');
const valueSenha = document.getElementById('senha');

loginButton.addEventListener('click', () => {
  if (valueLogin.value !== 'tryber@teste.com' || valueSenha.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});
