const loginButton = document.getElementById('login');
const submitButton = document.querySelector('#submit-btn');
const agreementCheck = document.querySelector('#agreement');
const textArea = document.getElementById('textarea');
const counterText = document.getElementById('counter');
const main = document.querySelector('main');
const evaluationForm = document.querySelector('#evaluation-form');
const resultContainer = document.querySelector('.result-container');

function checkForLogin() {
  const loginValue = document.getElementById('login-value').value;
  const passwordValue = document.getElementById('password-value').value;
  if (loginValue === 'tryber@teste.com' && passwordValue === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

let checked = false;
function checkAgreement() {
  if (agreementCheck.checked) {
    checked = true;
  }
  if (checked) {
    submitButton.disabled = false;
  }
}

function counter() {
  const textLength = textArea.value.length;
  const initialText = 500;
  const difference = initialText - textLength;
  counterText.innerText = difference;
}

function getForm() {
  const form = document.querySelector('#evaluation-form');
  const formValues = new FormData(form);
  const result = [];
  for (let key of formValues) {
    result.push(key);
  }
  
  return result;
}

function createResult() {
  const result = getForm();

  for (let index of result) {
    const label = document.createElement('label');
    const value = document.createElement('p');

    label.innerText = index[0];
    value.innerText = index[1];

    resultContainer.appendChild(label);
    resultContainer.appendChild(value);
  }
}

function submitForm(event) {
  event.preventDefault();
  createResult();
  main.removeChild(evaluationForm);
}

function addEventListeners() {
  loginButton.addEventListener('click', checkForLogin);
  agreementCheck.addEventListener('change', checkAgreement);
  textArea.addEventListener('keyup', counter);
  submitButton.addEventListener('click', submitForm);
}

window.onload = () => {
  addEventListeners();
};
