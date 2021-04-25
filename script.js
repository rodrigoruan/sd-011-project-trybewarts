const loginButton = document.getElementById('login');
const submitButton = document.querySelector('#submit-btn');
const agreementCheck = document.querySelector('#agreement');
const textArea = document.getElementById('textarea');
const counterText = document.getElementById('counter');
const main = document.querySelector('main');
const evaluationForm = document.querySelector('#evaluation-form');


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
  const newForm = document.querySelector('#evaluation-form');
  const result = getForm();
  const formUpdated = new FormData(newForm);
  const resultContainer = document.querySelector('.result-container');
  for (let index of result) {
    const value = document.createElement('p');
    value.innerText = `${index[0]}: ${index[1]}`;

    formUpdated.set(value, Text);
  }
}

function removeFormInputs() {
  for (let index = 0; index < evaluationForm.children.length;) {
    evaluationForm.removeChild(evaluationForm.firstChild);    
  }
}

function submitForm(event) {
  event.preventDefault();
  createResult();
  removeFormInputs();
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
