const loginButton = document.getElementById('login');

function checkForLogin() {
  const loginValue = document.getElementById('login-value').value;
  const passwordValue = document.getElementById('password-value').value;
  if (loginValue === 'tryber@teste.com' && passwordValue === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

function addEventListeners() {
  loginButton.addEventListener('click', checkForLogin);
}

window.onload = () => {
  addEventListeners();
};
