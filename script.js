const submitLoginBtn = document.getElementById('header-submit');
const agreementCheckbox = document.getElementById('agreement');
const formSubmitButton = document.getElementById('submit-btn');
const commentBox = document.getElementById('comment-box');

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

commentBox.onkeyup = function () {
  document.getElementById('counter').innerHTML = 'Caracteres disponiveis: ' + (500 - this.value.length);
}
