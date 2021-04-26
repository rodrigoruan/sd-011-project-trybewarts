const submit = document.getElementById('submit-button');
const login = document.getElementById('login');
const password = document.getElementById('password');
const agreement = document.getElementById('agreement');
const formSubmit = document.getElementById('submit-btn');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const evaluationForm = document.getElementById('evaluation-form');

function submitForm() {
  const standardLogin = 'tryber@teste.com';
  const standardPassword = '123456';
  if (login.value === standardLogin && password.value === standardPassword) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

function enableSubmission() {
  if (agreement.checked) {
    formSubmit.disabled = false;
  } else {
    formSubmit.disabled = true;
  }
}

function charCounter() {
  let charsLeft = 500;
  const typedString = textArea.value.toString();
  charsLeft -= typedString.length;
  counter.innerText = charsLeft;
}

function createResume() {
  const inputData = new FormData(evaluationForm);
  const resume = document.createElement('div');
  resume.id = 'resume';
  resume.className = 'section';
  for (const [key, value] of inputData) {
    const singleField = document.createElement('p');
    singleField.className = 'container';
    singleField.innerText = `${key}: ${value}`;
    resume.appendChild(singleField);
  }
  return resume;
}

function submitForms(event) {
  event.preventDefault();
  const report = createResume();
  evaluationForm.innerHTML = '';
  evaluationForm.appendChild(report);
}

submit.addEventListener('click', submitForm);
agreement.addEventListener('click', enableSubmission);
textArea.addEventListener('keyup', charCounter);
formSubmit.addEventListener('click', submitForms);
