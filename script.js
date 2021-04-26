function handleLogin() {
  const loginText = document.getElementById('login').value;
  const passwordText = document.getElementById('senha').value;
  if ((loginText === 'tryber@teste.com') && (passwordText === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

function handleAgreement(event) {
  const agreeElement = event.target;
  const buttonSubmit = document.getElementById('submit-btn');
  if (agreeElement.checked === true) {
    buttonSubmit.disabled = false;
  } else {
    buttonSubmit.disabled = true;
  }
}

function countCaracter() {
  const textEntered = document.getElementById('textarea').value;
  const counter = (500 - textEntered.length);
  const countRemaining = document.getElementById('counter');
  countRemaining.textContent = counter;
}

function handleChangeFullName() {
  const nameElement = document.getElementById('input-name');
  const nameFilled = nameElement.value;
  const lastNameFilled = document.getElementById('input-lastname').value;
  const divRow1 = nameElement.parentNode;
  divRow1.innerHTML = `Nome: ${nameFilled} ${lastNameFilled}`;
}

function handleChangeEmail() {
  const emailElement = document.getElementById('input-email');
  const emailFilled = emailElement.value;
  const divRow2 = emailElement.parentNode;
  divRow2.innerHTML = `Email: ${emailFilled}`;
}

function handleChanges() {
  handleChangeFullName();
  handleChangeEmail();
}

const button = document.getElementById('botao');
button.addEventListener('click', handleLogin);

const agreement = document.getElementById('agreement');
agreement.addEventListener('change', handleAgreement);

const textAreaElement = document.getElementById('textarea');
textAreaElement.addEventListener('keyup', countCaracter);

const submitButton = document.getElementById('submit-btn');
submitButton.addEventListener('click', handleChanges);
