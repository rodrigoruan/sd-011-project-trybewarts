// const { formatters } = require("stylelint");

const btnLogin = document.getElementById('btnLogar');
const inputLogin = document.getElementById('login');
const inptPassword = document.getElementById('password');
const btnCheck = document.getElementById('agreement');
const btnSub = document.getElementById('submit-btn');
const main = document.getElementsByClassName('main-container');

function LoginAlert() {
  if (inputLogin.value === 'tryber@teste.com' && inptPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', LoginAlert);

btnSub.disabled = true;

function validateButton() {
  if (btnCheck.checked === false) {
    btnSub.disabled = true;
  } else {
    btnSub.disabled = false;
  }
}

btnCheck.addEventListener('click', validateButton);

// tentando desenrolar o requisito 21!
const forms = document.getElementById('evaluation-form');

const nameInput = document.getElementById('input-name');
const lastNameInput = document.getElementById('input-lastname');
const emailInput = document.getElementById('input-email');
const houseInput = document.getElementById('house');
const familyInput = document.getElementsByClassName('family');
const subjectInput = document.getElementsByClassName('subject');
const radioInput = document.getElementsByClassName('radioRate');

// function createParagraphs(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     const p = document.createElement('p');
//     p.innerText = array[i];
//     forms.appendChild(p);
//   }
// }
// }

const textArea = document.querySelector('#textarea');
textArea.addEventListener('keyup', () => {
  const paragrafo = document.querySelector('#counter');
  let caracteresDisponiveis = 0;
  caracteresDisponiveis = 500 - textArea.value.length;
  paragrafo.innerText = caracteresDisponiveis;
});

const subject = () => {
  const array = [];
  for (let i = 0; i < subjectInput.length; i += 1) {
    if (subjectInput[i].checked === true) {
      array.push(subjectInput[i].value);
    }
  }
  const resultado = array.join(', ');
  return resultado;
};

const rate = () => {
  for (let i = 0; i < radioInput.length; i += 1) {
    if (radioInput[i].checked === true) {
      return radioInput[i];
    }
  }
};

const family = () => {
  for (let i = 0; i < familyInput.length; i += 1) {
    if (familyInput[i].checked === true) {
      return familyInput[i];
    }
  }
};

const values = [];

const criaParagrafo = (event) => {
  for (let index = 0; index < event.length; index += 1) {
    const mostraResultados = document.createElement('p');
    mostraResultados.innerHTML = event[index];
    main.appendChild(mostraResultados);
  }
};

btnSub.addEventListener('click', (event) => {
  const checkedFunction = family();
  const subjects = subject();
  const rated = rate();

  forms.style.display = 'none';

  const list = {
    Nome: nameInput.value,
    Sobrenome: lastNameInput.value,
    Email: emailInput.value,
    Casa: houseInput.value,
    Família: checkedFunction.value,
    Matérias: subjects,
    Avaliação: rated.value,
    Observações: textArea.value,
  };

  event.preventDefault();
  values.push(list);
  // document.forms[1].reset();
  console.log(values);
  criaParagrafo(list);
});
