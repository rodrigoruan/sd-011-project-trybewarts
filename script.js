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
  counterText.innerText = 500 - textArea.value.length;
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

function removeFormInputs() {
  for (const index = 0; index < evaluationForm.children.length;) {
    evaluationForm.removeChild(evaluationForm.firstChild);    
  }
}

function createResult() {
  const formAnswer = getForm();
  removeFormInputs();
  const firstValue = document.createElement('p');
  firstValue.innerText= `${formAnswer[0][0]}: ${formAnswer[0][1]} ${formAnswer[1][1]}`;
  evaluationForm.appendChild(firstValue);
  for (let index = 2; index < formAnswer.length - 1; index += 1) {
    const value = document.createElement('p');
    value.innerText = `${formAnswer[index][0]}: ${formAnswer[index][1]}`;
    evaluationForm.appendChild(value);
  }
}

function submitForm(event) {
  event.preventDefault();
  createResult();
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
