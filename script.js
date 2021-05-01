const emailDefault = 'tryber@teste.com';
const passwordDefaul = '123456';
const loginInput = document.querySelector('#login');
const passwordInput = document.querySelector('#password');
const buttonInput = document.querySelector('#button');

function login() {
  if (loginInput.value === emailDefault && passwordInput.value === passwordDefaul) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
buttonInput.addEventListener('click', login);

const checkBtn = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');

function check() {
  if (checkBtn.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}
checkBtn.addEventListener('click', check);

const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

textArea.addEventListener('input', () => {
  const caracteres = textArea.value.length;
  counter.innerHTML = textArea.maxLength - caracteres;
});

// Requisito 21 com a ajuda do códdigo do JHenrique e Paulo Henrique:
// https://github.com/tryber/sd-011-project-trybewarts/blob/rafaelbamberg-011-project-trybewarts/script.js
const formContent = document.querySelector('#form-content');
const theForm = document.querySelector('#evaluation-form');

// Adiciona o campo nome com valor do input
const firstName = document.querySelector('#input-name');
const lastName = document.querySelector('#input-lastname');

const nameData = () => {
  const addName = document.createElement('p');
  addName.innerHTML = `Nome: ${firstName.value}  ${lastName.value}`;

  formContent.appendChild(addName);
};

// Adiciona campo email com valor do input
const email = document.querySelector('#input-email');

const emailData = () => {
  const addEmail = document.createElement('p');
  addEmail.innerHTML = `Email: ${email.value}`;

  formContent.appendChild(addEmail);
};

// Adiciona campo casa com valor do input
const casa = document.querySelector('#house');

const casaData = () => {
  const addCasa = document.createElement('p');
  addCasa.innerHTML = `Casa: ${casa.value}`;

  formContent.appendChild(addCasa);
};

// Adiciona campo casa com valor do input
const familyData = () => {
// https://stackoverflow.com/questions/15839169/how-to-get-value-of-selected-radio-button
  const chosenFamily = document.querySelector('input[name="family"]:checked');
  const addFamily = document.createElement('p');
  addFamily.innerHTML = `Família: ${chosenFamily.value}`;

  formContent.appendChild(addFamily);
};

const subjectsData = () => {
  const selectedSubjects = document.querySelectorAll('input[name="subs"]:checked');
  const array = [];
  let result = '';
  for (let index = 0; index < selectedSubjects.length; index += 1) {
    array.push(selectedSubjects[index].value);
  }
  result = array.join(', ');

  const addSubjects = document.createElement('p');
  addSubjects.innerHTML = `Matérias: ${result}`;

  formContent.appendChild(addSubjects);
};

const elevadorData = () => {
  const rating = document.querySelector('input[name="rate"]:checked');
  const addRating = document.createElement('p');
  addRating.innerHTML = `Avaliação: ${rating.value}`;

  formContent.appendChild(addRating);
};

// Adiciona o evento de para o atualização da página e preenche a seção form-content e limpa o form antigo
theForm.addEventListener('submit', (event) => {
  event.preventDefault();

  nameData();
  emailData();
  casaData();
  familyData();
  subjectsData();
  elevadorData();
  theForm.innerHTML = '';
});
