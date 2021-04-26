const loginButton = document.getElementById('login-button');
const loginInput = document.getElementById('login-input');
const loginPassword = document.getElementById('password-input');
const labelRate = document.querySelector('.rate-label');
const buttonSend = document.querySelector('#submit-btn');
const checkboxTerms = document.querySelector('#agreement');
const textAreaInput = document.querySelector('#textarea');
const counterText = document.querySelector('#counter');
const formsContent = document.querySelector('#evaluation-form');
const nameInput = document.querySelector('#input-name');
const lastnameInput = document.querySelector('#input-lastname');
const emailInput = document.querySelector('#input-email');
const houseInput = document.querySelector('#house');
const familyInput = document.querySelectorAll('.input-radios');
const subjectInput = document.querySelectorAll('.subject');

function createRadio() {
  for (let index = 1; index <= 10; index += 1) {
    const newRadio = document.createElement('input');
    const textRadio = document.createElement('span');
    newRadio.setAttribute('type', 'radio');
    newRadio.setAttribute('value', index);
    newRadio.setAttribute('name', 'rate');
    newRadio.classList.add('score');
    labelRate.appendChild(newRadio);
    labelRate.appendChild(textRadio);
    textRadio.innerText = ` ${index} `;
  }
}

createRadio();
const scoreInput = document.querySelectorAll('.score');

// Observações Textarea

loginButton.addEventListener('click', () => {
  if (loginInput.value !== 'tryber@teste.com' && loginPassword.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

checkboxTerms.addEventListener('click', () => {
  if (checkboxTerms.checked) {
    buttonSend.removeAttribute('disabled');
  } else {
    buttonSend.setAttribute('disabled', 'disabled');
  }
});

textAreaInput.addEventListener('input', () => {
  let textCount = 500;
  textCount -= (textAreaInput.value.length);
  counterText.innerText = textCount;
});

function getFeedback() {
  let response = 'Observações: ';
  response += textAreaInput.value;
  return response;
}

function getScore() {
  let response = 'Avaliação: ';
  for (let index = 0; index < scoreInput.length; index += 1) {
    if (scoreInput[index].checked) {
      response += scoreInput[index].value;
      console.log(scoreInput[index].value);
    }
  }
  return response;
}

function getSubjects() {
  let response = 'Matérias: ';
  const subjects = [];
  for (let index = 0; index < subjectInput.length; index += 1) {
    if (subjectInput[index].checked) {
      subjects.push(subjectInput[index].value);
    }
  }
  response += subjects.join(', ');
  return response;
}

function getFamily() {
  let response = 'Família: ';
  for (let index = 0; index < familyInput.length; index += 1) {
    if (familyInput[index].checked) {
      response += familyInput[index].value;
    }
  }
  return response;
}

function getHouse() {
  let response = 'Casa: ';
  response += houseInput.value;
  return response;
}

function getEmail() {
  let response = 'Email: ';
  response += emailInput.value;
  return response;
}

function getFullName() {
  let response = 'Nome: ';
  response += nameInput.value;
  response += ' ';
  response += lastnameInput.value;
  return response;
}

buttonSend.addEventListener('click', (event) => {
  event.preventDefault();
  formsContent.innerHTML = '';
  const fistRow = getFullName();
  formsContent.innerHTML += `${fistRow}<br>`;
  const secondRow = getEmail();
  formsContent.innerHTML += `${secondRow}<br>`;
  const thirdRow = getHouse();
  formsContent.innerHTML += `${thirdRow}<br>`;
  const fourthRow = getFamily();
  formsContent.innerHTML += `${fourthRow}<br>`;
  const fifthRow = getSubjects();
  formsContent.innerHTML += `${fifthRow}<br>`;
  const sixthRow = getScore();
  formsContent.innerHTML += `${sixthRow}<br>`;
  const sevnRow = getFeedback();
  formsContent.innerHTML += `${sevnRow}<br>`;
});
