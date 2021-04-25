// const { create } = require("eslint/lib/rules/*");

function checkLogin() {
  const inputList = document.querySelectorAll('.trybewarts-login input');
  if (inputList[0].value === 'tryber@teste.com' && inputList[1].value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

function addEventCheckLogin() {
  const button = document.querySelector('.trybewarts-login button');
  button.addEventListener('click', checkLogin);
}

function disableButon(event) {
  const checkbox = event.target;
  const button = document.getElementById('submit-btn');
  if (checkbox.checked) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

function addEventDisableButton() {
  const checkbox = document.getElementById('agreement');
  checkbox.addEventListener('change', disableButon);
}

function countChars() {
  const counter = document.getElementById('counter');
  const textarea = document.getElementById('textarea');
  counter.innerText = 500 - textarea.value.length;
}

function addEventCount() {
  const textarea = document.getElementById('textarea');
  textarea.addEventListener('keyup', countChars);
}

function removeChilds(parent) {
  for (let index = parent.children.length - 1; index >= 0; index -= 1) {
    parent.removeChild(parent.lastElementChild);
  }
}

function printForm(answersList) {
  const form = document.getElementById('evaluation-form');
  removeChilds(form);
  for (let secondindex = 0; secondindex < answersList.length; secondindex += 1) {
    const element = document.createElement('p');
    element.innerText = answersList[secondindex];
    form.appendChild(element);
  }
}

function saveName(answersList) {
  const name = document.getElementById('input-name').value;
  const lastname = document.getElementById('input-lastname').value;
  answersList.push(`Nome: ${name} ${lastname}`);
}

function saveEmail(answersList) {
  const email = document.getElementById('input-email').value;
  answersList.push(`Email: ${email}`);
}

function saveHouse(answersList) {
  const house = document.getElementById('house').value;
  answersList.push(`Casa: ${house}`);
}

function saveFamily(answersList) {
  const family = document.getElementsByName('family');
  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked) {
      answersList.push(`Família: ${family[index].value}`);
    }
  }
}
function saveSubject(answersList) {
  const subject = [];
  const checkbox = document.getElementsByName('content');
  for (let index = 0; index < checkbox.length; index += 1) {
    if (checkbox[index].checked) {
      subject.push(` ${checkbox[index].value}`);
    }
  }
  answersList.push(`Matérias:${subject}`);
}

function saveRate(answersList) {
  const rate = document.getElementsByName('rate');
  for (let index = 0; index < rate.length; index += 1) {
    if (rate[index].checked) {
      answersList.push(`Avaliação: ${rate[index].value}`);
    }
  }
}

function saveComment(answersList) {
  const comment = document.getElementById('textarea').value;
  answersList.push(`Observações: ${comment}`);
  printForm(answersList);
}

function saveForms() {
  const answersList = [];
  saveName(answersList);
  saveEmail(answersList);
  saveHouse(answersList);
  saveFamily(answersList);
  saveSubject(answersList);
  saveRate(answersList);
  saveComment(answersList);
}

function addEventSaveForms() {
  const button = document.getElementById('submit-btn');
  button.addEventListener('click', saveForms);
}

window.onload = function load() {
  addEventCheckLogin();
  addEventDisableButton();
  addEventCount();
  addEventSaveForms();
};
