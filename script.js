function loginValidation() {
  const trybewartsLogin = document.forms['trybewarts-login'];
  const user = trybewartsLogin.user.value;
  const password = trybewartsLogin.password.value;
  if (user === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

const checkValue = document.getElementById('agreement');

function agreement() {
  if (checkValue.checked) {
    document.getElementById('submit-btn').disabled = false;
  } else {
    document.getElementById('submit-btn').disabled = true;
  }
}

const family = document.getElementsByName('family');

function getFamily() {
  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked) {
      return family[index].value;
    }
  }
}

const subject = document.getElementsByName('checkbox-content');

function getSubject() {
  let checkedSubjects = '';
  for (let index = 0; index < subject.length; index += 1) {
    if (subject[index].checked && checkedSubjects === '') {
      checkedSubjects = `${subject[index].value}`;
    } else if (subject[index].checked) {
      checkedSubjects = `${checkedSubjects}, ${subject[index].value}`;
    }
  }
  return checkedSubjects;
}

const score = document.getElementsByName('rate');

function getScore() {
  for (let index = 0; index < score.length; index += 1) {
    if (score[index].checked) {
      return score[index].value;
    }
  }
}

function createTexts(object, parent) {
  for (const key in object) {
    if (object[key] !== 0) {
      const paramForm = document.createElement('p');
      paramForm.innerText = object[key];
      parent.appendChild(paramForm);
    }
  }
}

const fName = document.querySelector('#input-name');
const lName = document.querySelector('#input-lastname');
const email = document.querySelector('#input-email');
const house = document.querySelector('#house');
const observations = document.querySelector('#textarea');
const mainForm = document.querySelector('#evaluation-form');

function getDataForm(event) {
  event.preventDefault();
  const formObject = {
    name: `Nome: ${fName.value} ${lName.value}`,
    email: `Email: ${email.value}`,
    house: `Casa: ${house.value}`,
    family: `Família: ${getFamily()}`,
    subject: `Matérias: ${getSubject()}`,
    score: `Avaliação: ${getScore()}`,
    observations: `Observações: ${observations.value}`,
  };
  const formFilled = document.createElement('div');
  formFilled.id = 'form-filled';
  mainForm.appendChild(formFilled);
  createTexts(formObject, formFilled);
}

function clearOlderForm() {
  const contentColumn = document.querySelector('.content-column');
  mainForm.removeChild(contentColumn);
}

const loginButton = document.querySelector('#login-button');
const submitBtn = document.querySelector('#submit-btn');

[loginButton, checkValue, submitBtn].forEach((item) => {
  item.addEventListener('click', (event) => {
    if (item === loginButton) {
      loginValidation();
    } else if (item === checkValue) {
      agreement();
    } else if (item === submitBtn) {
      getDataForm(event);
      clearOlderForm();
    }
  });
});

const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
counter.innerText = 500;

textarea.addEventListener('keyup', () => {
  const current = textarea.value.split('').length;
  counter.innerText = 500 - current;
});
