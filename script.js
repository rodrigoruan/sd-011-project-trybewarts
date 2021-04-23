const btnLogin = document.querySelector('#logar');
const textArea = document.querySelector('#textarea');

btnLogin.addEventListener('click', () => {
  const loginInput = document.querySelector('#loginInput').value;
  const passwordInput = document.querySelector('#passwordInput').value;

  if (loginInput === 'tryber@teste.com' && passwordInput === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

textArea.addEventListener('keyup', () => {
  const inputLength = textArea.value.length;
  const counter = document.querySelector('#counter');

  counter.innerText = 500 - inputLength;
});
