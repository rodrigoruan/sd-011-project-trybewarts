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
  const textEntered = document.getElementById('text-area').value;
  const counter = (500 - textEntered.length);
  const countRemaining = document.getElementById('counter');
  countRemaining.textContent = counter;
}

function handleChanges() {
  const nameElement = document.getElementById('input-name');
  const nameFilled = nameElement.value;
  const divFlex = nameElement.parentNode;
  divFlex.innerHTML = `Nome: ${nameFilled}`;
}

const button = document.getElementById('botao');
button.addEventListener('click', handleLogin);
const agreement = document.getElementById('agreement');
agreement.addEventListener('change', handleAgreement);
const textAreaElement = document.getElementById('text-area');
textAreaElement.addEventListener('keyup', countCaracter);
const submitButton = document.getElementById('submit-btn');
submitButton.addEventListener('click', handleChanges);
