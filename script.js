const loginButton = document.getElementById('login-button');
const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('senha');

loginButton.addEventListener('click', () => {
  const loginValue = loginInput.value;
  const passwordValue = passwordInput.value;

  if (loginValue !== 'tryber@teste.com' && passwordValue !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

const agreementButton = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');

function disabledButton() {
  submitButton.disabled = true;
}

disabledButton();

agreementButton.addEventListener('click', () => {
  const agreementStatus = agreementButton.checked;

  if (agreementStatus === true) {
    submitButton.disabled = false;
  }

  if (agreementStatus === false) {
    disabledButton();
  }
});

const msgElement = document.getElementById('textarea');
const cntElement = document.getElementById('counter');

msgElement.addEventListener('input', (e) => {
  const { target } = e;

  const maxLength = target.getAttribute('maxlength');
  const currentLength = target.value.length;

  cntElement.innerHTML = `${maxLength - currentLength}`;
});

const myForm = document.getElementById('evaluation-form');

function removeForm() {
  for (let i = 0; i < 10; i += 1) {
    myForm.lastElementChild.remove();
  }
}

let frase = '';

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const valueObject = [];
  for (const pair of formData.entries()) {
    valueObject.push(pair[1]);
  }

  removeForm();

  for (let j = 5; j < valueObject.length - 2; j += 1) {
    frase += valueObject[j];
    if (j < valueObject.length - 3) { frase += ', '; }
  }

  myForm.innerText = `Nome: ${valueObject[0]} ${valueObject[1]}
  Email: ${valueObject[2]}
  Casa: ${valueObject[3]}
  Família: ${valueObject[4]}
  Matérias: ${frase}
  Avaliação: ${valueObject[valueObject.length - 2]}
  Observações: ${valueObject[valueObject.length - 1]}`;
});
