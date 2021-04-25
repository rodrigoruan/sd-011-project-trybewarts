const submitLoginBtn = document.getElementById('header-submit');
const agreementCheckbox = document.getElementById('agreement');
const formSubmitButton = document.getElementById('submit-btn');
const commentBox = document.getElementById('textarea');

function toggleFormSubmitButtonState() {
  if (agreementCheckbox.checked) {
    formSubmitButton.disabled = false;
  } else {
    formSubmitButton.disabled = true;
  }
}

function verifiedValues() {
  const loginValue = document.getElementById('login').value;
  const passwordValue = document.getElementById('password').value;

  if (loginValue === 'tryber@teste.com' && passwordValue === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

submitLoginBtn.addEventListener('click', verifiedValues);
agreementCheckbox.addEventListener('change', toggleFormSubmitButtonState);

const counterDiv = document.getElementById('counter');

function counterCaracteres() {
  counterDiv.innerHTML = `Caracteres disponiveis: ${500 - commentBox.value.length}`;
}

commentBox.onkeyup = counterCaracteres;
