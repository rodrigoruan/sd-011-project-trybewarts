const button = document.getElementById('botao');
const login = document.getElementById('login');
const password = document.getElementById('password');
const commentTextarea = document.getElementById('textarea');
const commentCounter = document.getElementById('counter');
const checkAgreements = document.querySelector('#label-infos');
const submitButton = document.querySelector('#submit-btn');
const agreement = document.getElementById('agreement');

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

/* function addClass() {
    checkAgreements.classList.add('checked');
}

function removeClass() {
  if (checkAgreements.className === 'checked') {
    checkAgreements.classList.remove('checked');
  }
} */

function checkClass() {
  
}

// eventLissiners

commentTextarea.addEventListener('keyup', counter);
button.addEventListener('click', validateLogin);/* 
checkAgreements.addEventListener('click', checkClass); */
agreement.addEventListener('click', () => {
  submitButton.toggleAttribute('disabled');
});