/* Variaveis */
const validEmail = 'tryber@teste.com';
const validPassword = '123456';
const houses = ['Gitnória', 'Reactpuff', 'Corvinode', 'Pytherina'];

/* Variaveis do DOM */
const inputLogin = document.querySelector('.trybewarts-login input[type="email"]');
const inputPassword = document.querySelector('.trybewarts-login input[type="password"]');
const buttonSubmitLogin = document.getElementById('submitLogin');
const selectHouse = document.getElementById('house');

/* DOM Elements */
const optionElement = document.createElement('option');

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

function onLoad() {
  buttonSubmitLogin.addEventListener('click', validateLogin);
  createSelectHouseOptions();
}

window.onload = onLoad;
