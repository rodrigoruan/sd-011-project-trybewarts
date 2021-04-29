const loginField = document.querySelector('.login');
const passwordField = document.querySelector('.senha');
const button = document.querySelector('.buttonLogin');
const checkbox = document.querySelector('#agreement');
const buttonSubmit = document.querySelector('#submit-btn');
const form = document.querySelector('#evaluation-form');

function verifyLogin() {
  if (loginField.value !== 'tryber@teste.com' || passwordField.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

button.addEventListener('click', verifyLogin);

function verifyAgreement() {
  if (checkbox.checked) {
    buttonSubmit.removeAttribute('disabled');
  } else {
    buttonSubmit.setAttribute('disabled', 'disabled');
  }
}

checkbox.addEventListener('click', verifyAgreement);

const counter = document.getElementById('counter');
const textArea = document.querySelector('#textarea');
counter.innerText = 500;

function countingLetters() {
  counter.innerText = 500 - textArea.value.length;
}
textArea.addEventListener('input', countingLetters);

const newForm = document.querySelector('#pos-form');

function getData() {
  const name = document.querySelector('#input-name');
  const lastName = document.querySelector('#input-lastname');
  const email = document.querySelector('#input-email');
  const house = document.querySelector('#house');
  const family = document.querySelector('.fml:checked');
  const evaluation = document.querySelector('.score:checked');

  return [name, lastName, email, house, family, evaluation];
}

function createFieldName() {
  const newName = getData();
  const div = document.createElement('div');
  div.textContent = `Nome: ${newName[0].value} ${newName[1].value}`;
  newForm.appendChild(div);
}

function createFieldEmail() {
  const newEmail = getData();
  const div = document.createElement('div');
  div.textContent = `Email: ${newEmail[2].value}`;
  newForm.appendChild(div);
}

function createFieldHouse() {
  const newHouse = getData();
  const div = document.createElement('div');
  div.textContent = `Casa: ${newHouse[3].value}`;
  newForm.appendChild(div);
}

function createFieldFamily() {
  const newFamily = getData();
  const div = document.createElement('div');
  div.textContent = `Família: ${newFamily[4].value}`;
  newForm.appendChild(div);
}

function createFieldSubjects() {
  const subjects = document.querySelectorAll('.subject:checked');
  const arraySub = [];
  for (let index = 0; index < subjects.length; index += 1) {
    arraySub.push(subjects[index].value);
  }
  const div = document.createElement('div');
  div.textContent = `Matérias: ${arraySub.join(', ')}`;
  newForm.appendChild(div);
}

function createFieldEvaluation() {
  const newEvaluation = getData();
  const div = document.createElement('div');
  div.textContent = `Avaliação: ${newEvaluation[5].value}`;
  newForm.appendChild(div);
}

function createFieldObs() {
  const div = document.createElement('div');
  div.textContent = `Observação: ${textArea.value}`;
  newForm.appendChild(div);
}

function submitForms() {
  createFieldName();
  createFieldEmail();
  createFieldHouse();
  createFieldFamily();
  createFieldSubjects();
  createFieldEvaluation();
  createFieldObs();
  form.remove();
}

buttonSubmit.addEventListener('click', submitForms);
