/* Variaveis */
const validEmail = 'tryber@teste.com';
const validPassword = '123456';
const houses = ['Gitnória', 'Reactpuff', 'Corvinode', 'Pytherina'];
const inputs = ['HoFs', 'Jest', 'Promises', 'React', 'SQL', 'Python'];
const labels = ['Higher Order Functions', 'Jest', 'Promises', 'React', 'SQL', 'Python'];

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

function validateLogin(event) {
  if (inputLogin.value === validEmail && inputPassword.value === validPassword) {
    alert('Olá, Tryber!');
  } else {
    event.preventDefault();
    alert('Login ou senha inválidos.');
  }
}

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

function onLoad() {
  buttonSubmitLogin.addEventListener('click', validateLogin);
  createSelectHouseOptions();
  createCheckbox();
}

window.onload = onLoad;
