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
const forms = document.querySelector('#evaluation-form');

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
      subjectsChoice.push(check.value);
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

function createParagraphs(array) {
  for (let index = 0; index < array.length; index += 1) {
    const p = document.createElement('p');
    p.innerText = array[index];
    forms.appendChild(p);
  }
}

function eraseInfo() {
  document.querySelector('.divForm').style.display = 'none';
  document.querySelector('.content-two').style.display = 'none';
  document.getElementById('div14').style.display = 'none';
  document.getElementById('div15').style.display = 'none';
  document.getElementById('div16').style.display = 'none';
  document.getElementById('div17').style.display = 'none';
  document.querySelector('footer').style.display = 'none';
}

submitButton.addEventListener('click', (event) => {
  const checkedFunction = checkedRadio();
  const checkedRated = checkedRate();
  const checkedSubjects = checkedSubject();
  const subjects = checkedSubjects.join(', ');

  event.preventDefault();
  eraseInfo();

  const array = [
    `Nome: ${nameInput.value} ${lastNameInput.value}`,
    `Email: ${emailInput.value}`,
    `Casa: ${houseInput.value}`,
    `Família: ${checkedFunction.value}`,
    `Matérias: ${subjects}`,
    `Avaliação: ${checkedRated.value}`,
    `Observações: ${textPlace.value}`,
  ];

  createParagraphs(array);
});
