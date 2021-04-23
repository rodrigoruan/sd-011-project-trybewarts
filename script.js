const standardLoginInput = 'tryber@teste.com';
const standardPasswordInput = '123456';
const logInButton = document.querySelector('#logInButton');

function checkLogIn() {
  const passwordInputValue = document.querySelector('#passwordInput').value;
  const loginInputValue = document.querySelector('#loginInput').value;
  if (loginInputValue === 'tryber@teste.com' && passwordInputValue === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

logInButton.addEventListener('click', checkLoginInput);
