// validar login
function validateEmail() {
  const emailInput = document.getElementById('login');

  if (emailInput.value === 'tryber@teste.com') {
    return true;
  }
  return false;
}

// validar senha
function validatePassword() {
  const passwordInput = document.getElementById('password');

  if (passwordInput.value === '123456') {
    return true;
  }
  return false;
}

// validar login e senha mediante click
function validateAccess() {
  const loginButton = document.getElementById('login-button');

  loginButton.addEventListener('click', () => {
    if (validateEmail() && validatePassword()) {
      window.alert('Olá, Tryber!');
    } else {
      window.alert('Login ou senha inválidos.');
    }
  });
}

// valida checkbox termos
function enableSubmit() {
  const getSubmitButton = document.getElementById('submit-btn');
  const getAgreementCheck = document.getElementById('agreement');

  getSubmitButton.disabled = true;

  getAgreementCheck.addEventListener('click', () => {
    if (getAgreementCheck.checked === true) {
      getSubmitButton.disabled = false;
    } else {
      getSubmitButton.disabled = true;
    }
  });
}

// contar caracteres
function countCharacters() {
  const counter = document.getElementById('counter');
  const textarea = document.getElementById('textarea');
  let count = 500;

  textarea.addEventListener('keyup', () => {
    count = 500 - textarea.value.length;

    counter.innerText = count;
  });
}


// cria parágrafo com nome e sobrenome
function returnNameValue() {
  const getFormDiv = document.getElementById('evaluation-form');
  const fullNameDiv = document.querySelector('.first-row');
  const nameInput = document.getElementById('input-name');
  const lastNameInput = document.getElementById('input-lastname');
  const fullName = document.createElement('p');
  fullName.innerText =  `Nome: ${nameInput.value} ${lastNameInput.value}`;

  getFormDiv.appendChild(fullName);
  fullNameDiv.parentNode.removeChild(fullNameDiv);
}

// cria parágrafo com email e casa selecionada
function returnEmailHouseValue() {
  const getFormDiv = document.getElementById('evaluation-form');
  const emailHouseDiv = document.querySelector('.second-row');
  const emailInput = document.getElementById('input-email');
  const houseInput = document.getElementById('house');
  const email = document.createElement('p');
  email.innerText =  `Email: ${emailInput.value}`;
  const house = document.createElement('p');
  house.innerText = `Casa: ${houseInput.value}`;

  getFormDiv.appendChild(email);
  getFormDiv.appendChild(house);
  emailHouseDiv.parentNode.removeChild(emailHouseDiv);
}

// cria parágrafo com família
function returnFamilyValue() {
  const getFormDiv = document.getElementById('evaluation-form');
  const checkFamily = document.querySelector("input[type='radio'][name='family']:checked").value;
  const returnFamily = document.createElement('p');
  returnFamily.innerText = `Família: ${checkFamily}`;

  getFormDiv.appendChild(returnFamily);

}

// cria parágrafo com matérias


// altera elementos do formulário
function changeFormChilds() {
  const getSubmitButton = document.getElementById('submit-btn');
  

  getSubmitButton.addEventListener('click', (event) => {
    event.preventDefault();
    returnNameValue();
    returnEmailHouseValue();
    returnFamilyValue()
  });
}

window.onload = function start() {
  validateAccess();
  enableSubmit();
  countCharacters();
  changeFormChilds();
}
