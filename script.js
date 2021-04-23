const loginEmailInput = document.getElementById('login-email-input');
const loginPasswordInput = document.getElementById('login-password-input');
const loginButton = document.getElementById('login-button');
const commentTextArea = document.getElementById('textarea');
const counterElement = document.getElementById('counter');

function login() {
  const email = loginEmailInput.value;
  const password = loginPasswordInput.value;
  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

function updateCounter() {
  const commentLength = commentTextArea.value.length;
  counterElement.textContent = 500 - commentLength;
}

loginButton.addEventListener('click', login);
commentTextArea.addEventListener('keyup', updateCounter);
