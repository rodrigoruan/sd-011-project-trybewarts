const loginButton = document.querySelector('#login-button');
const checkValue = document.getElementById('agreement');
const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
counter.innerText = 500;

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

function agreement() {
  if (checkValue.checked) {
    document.getElementById('submit-btn').disabled = false;
  } else {
    document.getElementById('submit-btn').disabled = true;
  }
}

[loginButton, checkValue].forEach((item) => {
  item.addEventListener('click', () => {
    if (item === loginButton) {
      loginValidation();
    } else if (item === checkValue) {
      agreement();
    }
  });
});

textarea.addEventListener('keyup', () => {
  const current = textarea.value.split('').length;
  counter.innerText = 500 - current;
});

const submitBtn = document.querySelector('#submit-btn');
const fName = document.querySelector('#input-name');
const lName = document.querySelector('#input-lastname');
const eMail = document.querySelector('#input-email');
const house = document.querySelector('#house');
const family = document.querySelector('#label-family');

function getDataForm(e) {
  e.preventDefault();
  let object = {
    name: `Nome: ${fName.value} ${lName.value}`,
    email: `Email: ${eMail.value}`,
    house: `Casa: `,
    family: `Família: `,
    subjects: `Matérias: `, 
    score: `Avaliação: `,
    observations: `Observações: `
  }
  
  const keys = Object.keys(object);
  for (let key in object) {
    const paramForm = document.createElement('p');
    paramForm.innerText = object[key];
    formFilled.appendChild(paramForm);
  }
  // for (let index = 0; index < keys.length; index += 1) {
  //   let currentKey = keys[index];
  //   paramForm.innerText = object.currentKey;
  //   formFilled.appendChild(paramForm);
  // }

}

submitBtn.addEventListener('click', getDataForm);

const formFilled = document.querySelector('#form-filled');

