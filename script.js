const button = document.getElementById('botao');
const login = document.getElementById('login');
const password = document.getElementById('password');
const commentTextarea = document.getElementById('textarea');
const commentCounter = document.getElementById('counter');
const check = document.getElementById('agreement');
const subButton = document.getElementById('submit-btn');

function validateLogin() {
  if (login.value + password.value !== 'tryber@teste.com123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

function countering() {
  const commentLength = commentTextarea.value.length;
  commentCounter.textContent = 500 - commentLength;
}

check.addEventListener('click', () => {
  subButton.toggleAttribute('disabled');
});

// eventLissiners

commentTextarea.addEventListener('keyup', countering);
button.addEventListener('click', validateLogin);
