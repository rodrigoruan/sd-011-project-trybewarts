const loginButton = document.getElementById('login-button');
const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('senha');

loginButton.addEventListener('click', () => {
  const loginValue = loginInput.value;
  const passwordValue = passwordInput.value;

<<<<<<< HEAD
  if (loginValue === 'tryber@teste.com' && passwordValue === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
=======
  if (loginValue !== 'tryber@teste.com' && passwordValue !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
>>>>>>> 30a311ac8b6b120af735b701afad4c53e8328743
  }
});
