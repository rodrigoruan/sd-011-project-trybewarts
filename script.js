const btnLogin = document.getElementById('btnLogar');
const inputLogin = document.getElementById('login');
const inptPassword = document.getElementById('password');
const btnCheck = document.getElementById('agreement');
const btnSub = document.getElementById('submit-btn');

const LoginAlert = () => {
  if (inputLogin.value === 'tryber@teste.com' && inptPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
};

btnLogin.addEventListener('click', LoginAlert);

btnSub.disabled = true;

btnCheck.addEventListener('click', () => {
  if (btnCheck.checked === false) {
    btnSub.disabled = true;
  } else {
    btnSub.disabled = false;
  }
});

const evaluationForms = document.getElementById('evaluation-form');
const nameInput = document.getElementById('input-name');
const lastNameInput = document.getElementById('input-lastname');
const emailInput = document.getElementById('input-email');
const houseInput = document.getElementById('house');
const familyInput = document.getElementsByClassName('family');
const subjectInput = document.getElementsByClassName('subject');
const radioInput = document.getElementsByClassName('radioRate');
const textArea = document.querySelector('#textarea');
const counterWord = document.querySelector('#counter');

textArea.addEventListener('keyup', () => {
  let characters = 0;
  characters = 500 - textArea.value.length;
  counterWord.innerText = characters;
});

const subjectCheck = () => {
  const array = [];
  for (let i = 0; i < subjectInput.length; i += 1) {
    if (subjectInput[i].checked === true) {
      array.push(subjectInput[i].value);
    }
  }
  return array.join(', ');
};

const rateCheck = () => {
  for (let i = 0; i < radioInput.length; i += 1) {
    if (radioInput[i].checked === true) {
      return radioInput[i];
    }
  }
};

const familyCheck = () => {
  for (let i = 0; i < familyInput.length; i += 1) {
    if (familyInput[i].checked === true) {
      return familyInput[i];
    }
  }
};

const makeParagraphs = (list) => {
  for (let i = 0; i < list.length; i += 1) {
    const p = document.createElement('p');
    p.innerText = list[i];
    evaluationForms.appendChild(p);
    const first = evaluationForms.firstChild;
    evaluationForms.insertBefore(first, p);
  }
};

btnSub.addEventListener('click', (event) => {
  const checked = familyCheck();
  const subjects = subjectCheck();
  const rated = rateCheck();

  event.preventDefault();

  document.querySelector('.divResult').style.display = 'none';

  const list = [
    `Nome: ${nameInput.value} ${lastNameInput.value}`,
    `Email: ${emailInput.value}`,
    `Casa: ${houseInput.value}`,
    `Família: ${checked.value}`,
    `Matérias: ${subjects}`,
    `Avaliação: ${rated.value}`,
    `Observações: ${textArea.value}`,
  ];
  makeParagraphs(list);
});
