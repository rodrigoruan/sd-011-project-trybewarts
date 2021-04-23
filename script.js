const checkboxAgreement = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');
const loginButton = document.querySelector('#loginBtn');
const loginPlace = document.querySelector('#loginValue');
const passwordPlace = document.querySelector('#senhaValue');
const textPlace = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

function agreementCheck() {
  if (checkboxAgreement.checked === false) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
}

checkboxAgreement.addEventListener('click', agreementCheck);

loginButton.addEventListener('click', () => {
  if (loginPlace.value === 'tryber@teste.com' && passwordPlace.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

textPlace.addEventListener('keyup', () => {
  const textSize = textPlace.value.length;
  const count = 500 - textSize;
  counter.innerHTML = count.toString();
});

const nameInput = document.querySelector('#input-name');
const lastNameInput = document.querySelector('#input-lastname');
const emailInput = document.querySelector('#input-email');
const houseInput = document.querySelector('#house');
const houseChoice = document.getElementsByClassName('family');
const rateChoice = document.getElementsByClassName('radioRate');
const wichContent = document.getElementsByClassName('subject');
const mainContent = document.querySelector('main');

function checkedRadio() {
  for (let index = 0; index < houseChoice.length; index += 1) {
    if (houseChoice[index].checked === true) {
      return houseChoice[index];
    }
  }
}

function checkedSubject() {
  const subjectsChoice = [];
  for (let index = 0; index < wichContent.length; index += 1) {
    if (wichContent[index].checked === true) {
      const check = wichContent[index];
      subjectsChoice.push(check);
    }
  }
  return subjectsChoice;
}

function checkedRate() {
  for (let index = 0; index < rateChoice.length; index += 1) {
    if (rateChoice[index].checked === true) {
      return rateChoice[index];
    }
  }
}

submitButton.addEventListener('click', (event) => {
  const checkedFunction = checkedRadio();
  const checkedRated = checkedRate();
  const checkedSubjects = checkedSubject();
  event.preventDefault();
  console.log(nameInput.value);
  console.log(lastNameInput.value);
  console.log(emailInput.value);
  console.log(houseInput.value);
  console.log(checkedFunction.value);
  for (const check of checkedSubjects) {
    console.log(check.value);
  }
  console.log(checkedRated.value);
  console.log(textPlace.value);

  const array = [
    `Nome: ${nameInput.value} ${lastNameInput.value}`,
    `Email: ${emailInput.value}`,
    `Casa: ${houseInput.value}`,
    `Família: ${checkedFunction.value}`,
    `Avaliação: ${checkedRated.value}`,
    `Observações: ${textPlace.value}`,
  ];

  for(let index = 0; index < array.length; index += 1){
    const p = document.createElement('p');
    p.innerText = array[index];
    mainContent.appendChild(p);
  }
});
