const button = document.getElementById('botao');
const login = document.getElementById('login');
const password = document.getElementById('password');
const commentTextarea = document.getElementById('textarea');
const commentCounter = document.getElementById('counter');

function validateLogin() {
  if (login.value + password.value !== 'tryber@teste.com123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

function counter() {
  const commentLength = commentTextarea.value.length;
  commentCounter.textContent = 500 - commentLength;
}

// eventLissiners

commentTextarea.addEventListener('keyup', counter);
button.addEventListener('click', validateLogin);
