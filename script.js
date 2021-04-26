const btnLogin = document.querySelector('#btn-login');

function validateLoginPassword() {
  const form1 = document.querySelector('.trybewarts-login');
  const login = document.querySelector('#inputEmail1');
  const password = document.querySelector('#inputPassword1');
  if (login.value !== 'tryber@teste.com' && password.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
    form1.value = '';
  }
}
btnLogin.addEventListener('click', validateLoginPassword);

const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
textarea.addEventListener('input', () => {
  const maxChar = 500;
  const charLength = textarea.value.length;
  const currentChar = maxChar - charLength;
  counter.textContent = currentChar.toString();
});

const agreement = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');
function enableButton() {
  if (agreement !== undefined) {
    submitBtn.removeAttribute('disabled');
  }
}
agreement.addEventListener('click', enableButton);

const evaluationForm = document.querySelector('#evaluation-form');
const submitButton = document.querySelector('#submit-btn');
const inputName = document.querySelector('#input-name');
const inputLastName = document.querySelector('#input-lastname');

function fillOutForms(event) {
  event.preventDefault();
  evaluationForm.innerHTML = `Nome: ${inputName.value} ${inputLastName.value}`; 
}
submitButton.addEventListener('click', fillOutForms);
