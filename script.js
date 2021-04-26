const buttonLogin = document.getElementById('button-login');
const inputName = document.getElementById('input-login');
const inputPassword = document.getElementById('input-password');
const checkboxAgreement = document.getElementById('agreement');
const userName = 'tryber@teste.com';
const password = '123456';
const counter = document.getElementById('counter');
const textArea = document.getElementById('textarea');
const formElement = document.getElementById('evaluation-form');
const formNameInput = document.getElementById('input-name');
const formLastNameInput = document.getElementById('input-lastname');
const formEmailInput = document.getElementById('input-email');
const formHouseInput = document.getElementById('house');
const commentTextArea = document.getElementById('textarea');
const submitButton = document.getElementById('submit-btn');

function checkLogin() {
  const validationLogin = (inputName.value === userName && inputPassword.value === password);
  if (validationLogin) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

// Botão desabilitado: https://stackoverflow.com/questions/46917270/javascript-disable-button-until-all-fields-are-filled.
function checkAgreement(event) {
  if (event.target.classList.contains('on')) {
    event.target.classList.remove('on');
    submitButton.disabled = true;
  } else {
    event.target.classList.add('on');
    submitButton.disabled = false;
  }
}

// Ideia: https://stackoverflow.com/questions/14086398/count-textarea-characters
function countChars(event) {
  const { length } = event.target.value;
  const charactersLeft = textArea.maxLength - length;
  counter.innerText = charactersLeft;
}

window.onload = function opening() {
  counter.innerText = 500;
  submitButton.disabled = true;
};

buttonLogin.addEventListener('click', checkLogin);
checkboxAgreement.addEventListener('click', checkAgreement);
textArea.addEventListener('keyup', countChars);

function showValues() {
  const name = formNameInput.value;
  const lastName = formLastNameInput.value;
  const email = formEmailInput.value;
  const house = formHouseInput.value;
  const family = document.querySelector('input[name="family"]:checked').value;
  const contentElements = document.querySelectorAll('input.subject:checked');
  const rate = document.querySelector('input[name="rate"]:checked').value;
  const comment = commentTextArea.value;

  const contentValues = [];
  for (let index = 0; index < contentElements.length; index += 1) {
    contentValues[index] = contentElements[index].value;
  }
  const contents = contentValues.join(', ');

  return { name, lastName, email, house, family, contents, rate, comment };
}

function createTextElements() {
  const values = showValues();

  const nameText = document.createElement('p');
  nameText.textContent = `Nome: ${values.name} ${values.lastName}`;

  const emailText = document.createElement('p');
  emailText.textContent = `Email: ${values.email}`;

  const houseText = document.createElement('p');
  houseText.textContent = `Casa: ${values.house}`;

  const familyText = document.createElement('p');
  familyText.textContent = `Família: ${values.family}`;

  const subjectsText = document.createElement('p');
  subjectsText.textContent = `Matérias: ${values.contents}`;

  const rateText = document.createElement('p');
  rateText.textContent = `Avaliação: ${values.rate}`;

  const commentText = document.createElement('p');
  commentText.textContent = `Observações: ${values.comment}`;

  return [nameText, emailText, houseText, familyText, subjectsText, rateText, commentText];
}

function submitForm(event) {
  event.preventDefault();
  const elements = createTextElements();
  console.log(elements)
  for (let index = 0; index < elements.length; index += 1) {
    formElement.appendChild(elements[index]);
  }
}

submitButton.addEventListener('click', submitForm);
