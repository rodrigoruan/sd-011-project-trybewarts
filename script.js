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

function createObjectToPrint(formData) {
  const objectToPrint = {
    Nome: `${formData.get('name')} ${formData.get('lastname')}`,
    Email: `${formData.get('email')}`,
    Casa: `${formData.get('house')}`,
    Família: `${formData.get('family')}`,
    Matérias: `${formData.getAll('subject').toString()}`,
    Avaliação: `${formData.get('rate')}`,
    Observações: `${formData.get('comment-text')}`,
  };
  return objectToPrint;
}

function createPrintData() {
  const inputData = createObjectToPrint(new FormData(evaluationForm));
  console.log(inputData);
  const dataToPrint = document.createElement('div');
  dataToPrint.id = 'dataToPrint';
  dataToPrint.className = 'section';
  for (const [key, value] of Object.entries(inputData)) {
    const paragraph = document.createElement('p');
    paragraph.innerText = `${key}: ${value}`;
    dataToPrint.appendChild(paragraph);
  }
  return dataToPrint;
}

function submitForms(event) {
  event.preventDefault();
  const report = createPrintData();
  evaluationForm.innerHTML = '';
  evaluationForm.appendChild(report);
}

submit.addEventListener('click', submitForm);
agreement.addEventListener('click', enableSubmission);
textArea.addEventListener('keyup', charCounter);
formSubmit.addEventListener('click', submitForms);
