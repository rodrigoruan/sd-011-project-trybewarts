// Exercício 3
const loginButton = document.getElementById('button-logar');
const valueLogin = document.getElementById('login').value;
const valueSenha = document.getElementById('senha').value;

loginButton.addEventListener('click', () => {
  if (valueLogin !== 'tryber@teste.com' || valueSenha !== '123456') {
    alert('Login ou senha inválidos');
  } else {
    alert('Olá, Tryber!');
  }
});
