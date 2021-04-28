const buttonLogin = document.getElementById('logar');
function validate() {
  const fnome = document.getElementById('login');
  const fsenha = document.getElementById('senha');

  if (fnome.value === 'tryber@teste.com' && fsenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

buttonLogin.addEventListener('click', validate);

const counter = document.querySelector('#counter');
const textarea = document.querySelector('#textarea');

textarea.addEventListener('keyup', () => {
  const counterValue = 500 - textarea.value.length;
  counter.innerText = counterValue;
});

const fsubmitButton = document.getElementById('submit-btn');
const fagree = document.getElementById('agreement');

fsubmitButton.disabled = true;

fagree.addEventListener('change', (e) => {
  if (e.target.checked) {
    fsubmitButton.disabled = false;
  } else {
    fsubmitButton.disabled = true;
  }
});

// requisito 21

const evaluationForms = document.getElementById('evaluation-form');
const inputName = document.getElementById('input-name');
const inputLastname = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const inputHouse = document.getElementById('house');
const family = document.getElementsByClassName('family');
const subject = document.getElementsByClassName('subject');
const radio = document.getElementsByClassName('radioRate');
const areaText = document.querySelector('#textarea');

const subjectFunction = () => {
  const array = [];
  for (let i = 0; i < subject.length; i += 1) {
    if (subject[i].checked === true) {
      array.push(subject[i].value);
    }
  }
  return array.join(', ');
};

const rateFunction = () => {
  for (let i = 0; i < radio.length; i += 1) {
    if (radio[i].checked === true) {
      return radio[i];
    }
  }
};

const familyFunction = () => {
  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked === true) {
      return family[index];
    }
  }
};

const paragraphMake = (list) => {
  for (let i = 0; i < list.length; i += 1) {
    const p = document.createElement('p');
    p.innerText = list[i];
    evaluationForms.appendChild(p);
    const first = evaluationForms.firstChild;
    evaluationForms.insertBefore(first, p);
  }
};

fsubmitButton.addEventListener('click', (event) => {
  const checked = familyFunction();
  const subjects = subjectFunction();
  const rated = rateFunction();

  event.preventDefault();

  // document.querySelector('.divResult').style.display = 'none';
  const listBtn = [
    `Nome: ${inputName.value} ${inputLastname.value}`,
    `Email: ${inputEmail.value}`,
    `Casa: ${inputHouse.value}`,
    `Família: ${checked.value}`,
    `Matérias: ${subjects}`,
    `Avaliação: ${rated.value}`,
    `Observações: ${areaText.value}`,
  ];
  paragraphMake(listBtn);
});
