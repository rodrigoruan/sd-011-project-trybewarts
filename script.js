/* Variaveis */
const validEmail = 'tryber@teste.com';
const validPassword = '123456';
const houses = ['Gitnória', 'Reactpuff', 'Corvinode', 'Pytherina'];
const inputs = ['HoFs', 'Jest', 'Promises', 'React', 'SQL', 'Python'];
const labels = ['Higher Order Functions', 'Jest', 'Promises', 'React', 'SQL', 'Python'];
const families = ['Frontend', 'Backend', 'FullStack'];

/* Variaveis do DOM */
const inputLogin = document.querySelector('.trybewarts-login input[type="email"]');
const inputPassword = document.querySelector('.trybewarts-login input[type="password"]');
const buttonSubmitLogin = document.getElementById('submitLogin');
const selectHouse = document.getElementById('house');
const labelContent = document.getElementById('label-content');

/* DOM Elements */
const optionElement = document.createElement('option');
const inputElement = document.createElement('input');
const labelElement = document.createElement('label');
const labelFamily = document.getElementById('label-family');

function validateLogin(event) {
  if (inputLogin.value === validEmail && inputPassword.value === validPassword) {
    alert('Olá, Tryber!');
  } else {
    event.preventDefault();
    alert('Login ou senha inválidos.');
  }
}

/*
  Esquema de remover acentos usando o normalize e replace tirados da seguinte thread
  Source: https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
*/
function createSelectHouseOptions() {
  houses.forEach((house) => {
    const idFragment = house.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const newOption = optionElement.cloneNode();
    newOption.innerText = house;
    newOption.value = house;
    newOption.id = `${idFragment}-house`;
    selectHouse.appendChild(newOption);
  });
}

function createCheckbox() {
  inputs.reverse().forEach((input, index) => {
    const newCheckbox = inputElement.cloneNode();
    newCheckbox.value = input;
    newCheckbox.setAttribute('type', 'checkbox');
    const newLabel = labelElement.cloneNode();
    newLabel.appendChild(newCheckbox);
    newLabel.appendChild(document.createTextNode(labels[index]));
    labelContent.insertAdjacentElement('afterend', newLabel);
  });
}

function createFamilyRadioOptions() {
  families.reverse().forEach((family) => {
    const newLabel = labelElement.cloneNode();
    const newRadio = inputElement.cloneNode();

    newRadio.value = family;
    newRadio.name = 'family';
    newRadio.setAttribute('type', 'radio');

    newLabel.appendChild(newRadio);
    newLabel.appendChild(document.createTextNode(family));
    labelFamily.insertAdjacentElement('afterend', newLabel);
  });
}

function onLoad() {
  buttonSubmitLogin.addEventListener('click', validateLogin);
  createSelectHouseOptions();
  createCheckbox();
  createFamilyRadioOptions();
}

window.onload = onLoad;
