const loginField = document.querySelector('#login-field');
const passwordField = document.querySelector('#password-field');
const loginButton = document.querySelector('#login-button');
const getForm = document.querySelector('#evaluation-form');
const getBtn = document.querySelector('#submit-btn');
const getCheckBox = document.querySelector('#agreement');
const getCounter = document.querySelector('#counter');
const getTextArea = document.querySelector('#textarea');
const firstName = document.querySelector('#input-name');
const lastName = document.querySelector('#input-lastname');
const getEmail = document.querySelector('#input-email');
const getHouse = document.querySelector('#house');
const getObs = document.querySelector('#textarea');

function alertLogin() {
  if (loginField.value === 'tryber@teste.com' && passwordField.value === '123456') {
    return alert('Olá, Tryber!');
  }
  return alert('Login ou senha inválidos.');
}

getCheckBox.addEventListener('click', () => {
  if (getCheckBox.checked) {
    getBtn.disabled = false;
  } else {
    getBtn.disabled = true;
  }
});

getTextArea.addEventListener('keyup', () => {
  getCounter.innerHTML = getTextArea.maxLength - getTextArea.value.length;
});

function tryMateriais() {
  const getMaterials = document.querySelectorAll('.subject:checked');
  const newArr = [];
  for (let index = 0; index < getMaterials.length; index += 1) {
    newArr.push(`${getMaterials[index].value}`);
  }
  return newArr.join(', ');
}

function putInForm(event) {
  const arr = {
    Nome: `${firstName.value} ${lastName.value}`,
    Email: `${getEmail.value}`,
    Casa: `${getHouse.value}`,
    Família: `${document.querySelector('input[name="family"]:checked').value}`,
    Matérias: tryMateriais(),
    Avaliação: `${document.querySelector('input[name="rate"]:checked').value}`,
    Observações: `${getObs.value}`,
  };
  let contentOfForm = '';
  for (const index of Object.keys(arr)) {
    contentOfForm += `${index}: ${arr[index]}<br>`;
  }
  getForm.innerHTML = contentOfForm;
  event.preventDefault();
}

getBtn.addEventListener('click', putInForm);
loginButton.addEventListener('click', alertLogin);
