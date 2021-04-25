const email = document.querySelector('#input-login-email');
const password = document.querySelector('#input-login-password');
const loginButton = document.querySelector('#loginButton');
// Formulário
const form = document.querySelector('#evaluation-form');
const inputName = document.querySelector('#input-name');
const inputLastName = document.querySelector('#input-lastname');
const inputEmail = document.querySelector('#input-email');
const selectHouse = document.querySelector('#house');
const textareaComment = document.querySelector('#textarea');
const rateContainer = document.querySelector('#rate-container');
const checkAgreement = document.querySelector('#agreement');
const btnSubmit = document.querySelector('#submit-btn');
btnSubmit.disabled = true;

// Função que valida o formato de E-mail
function checkLogin() {
  const insertedEmail = email.value;
  const insertedPassword = password.value;
  const emailFormat = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(insertedEmail);
  const passwordFormat = /^[0-9.]+$/.test(insertedPassword);
  if (!emailFormat || !passwordFormat) {
    email.value = '';
    password.value = '';
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

loginButton.addEventListener('click', checkLogin);

// Criação dos Radios de Rate
function createRateRadios() {
  const rates = 10;
  for (let index = 1; index <= rates; index += 1) {
    const radioRate = document.createElement('input');
    const labelRate = document.createElement('label');
    radioRate.type = 'radio';
    radioRate.name = 'rate';
    radioRate.value = index;
    labelRate.innerText = index;
    rateContainer.appendChild(radioRate);
    rateContainer.appendChild(labelRate);
  }
}

createRateRadios();

function disableSubmitButton() {
  checkAgreement.addEventListener('click', () => {
    if (!checkAgreement.checked) {
      btnSubmit.disabled = true;
    } else {
      btnSubmit.disabled = false;
    }
  });
}

disableSubmitButton();

function readingValues() {
  const formName = `${inputName.value} ${inputLastName.value}`;
  const formEmail = inputEmail.value;
  const formHouse = selectHouse.value;
  const formFamily = document.querySelector('input[name="family"]:checked').value;
  const formSubjectObjects = document.querySelectorAll('input[name="subject"]:checked');
  const formSubjectValues = [];
  for (const subject of formSubjectObjects) {
    formSubjectValues.push(subject.value);
  }
  const formSubjects = formSubjectValues.join(', ');
  const formRate = document.querySelector('input[name="rate"]:checked').value;
  const formComment = textareaComment.value;
  return [formName, formEmail, formHouse, formFamily, formSubjects, formRate, formComment];
}

function createPargraphs() {
  const values = readingValues();
  const strings = ['Nome:', 'Email:', 'Casa:', 'Família:',
    'Matérias:', 'Avaliação:', 'Observações:'];
  form.innerHTML = '';
  for (let index = 0; index < values.length; index += 1) {
    const string = strings[index];
    const value = values[index];
    const paragraph = document.createElement('p');
    paragraph.innerText = `${string} ${value}`;
    form.appendChild(paragraph);
  }
}

function submitButton() {
  btnSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    createPargraphs();
  });
}

submitButton();
