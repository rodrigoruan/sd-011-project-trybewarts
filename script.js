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
const theForm = document.querySelector('#evaluation-form');

// Adiciona o campo nome com valor do input
const firstName = document.querySelector('#input-name');
const lastName = document.querySelector('#input-lastname');

const nameData = () => {
  const addName = document.createElement('p');
  addName.innerHTML = `Nome: ${firstName.value}  ${lastName.value}`;
  addName.id = 'nome';
  // document.querySelector('#nome')

  theForm.appendChild(addName);
};

// Adiciona campo email com valor do input
const email = document.querySelector('#input-email');

const emailData = () => {
  const addEmail = document.createElement('p');
  addEmail.innerHTML = `Email: ${email.value}`;

  theForm.appendChild(addEmail);
};

// Adiciona campo casa com valor do input
const casa = document.querySelector('#house');

const casaData = () => {
  const addCasa = document.createElement('p');
  addCasa.innerHTML = `Casa: ${casa.value}`;

  theForm.appendChild(addCasa);
};

// Adiciona campo casa com valor do input
const familyData = () => {
// https://stackoverflow.com/questions/15839169/how-to-get-value-of-selected-radio-button
  const chosenFamily = document.querySelector('input[name="family"]:checked');
  const addFamily = document.createElement('p');
  addFamily.innerHTML = `Família: ${chosenFamily.value}`;

  theForm.appendChild(addFamily);
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

  theForm.appendChild(addSubjects);
};

// Adiciona campo de avaliação com valor do input
const elevadorData = () => {
  const rating = document.querySelector('input[name="rate"]:checked');
  const addRating = document.createElement('p');
  addRating.innerHTML = `Avaliação: ${rating.value}`;

  theForm.appendChild(addRating);
};

// Adiciona campo de comentário
const comentaryData = () => {
  const comentary = document.querySelector('#textarea');
  const addComentary = document.createElement('p');
  addComentary.innerHTML = `Observações: ${comentary.value}`;

  theForm.appendChild(addComentary);
};

// Função para apagar form
const removeForm = () => {
  const formSections = theForm.querySelectorAll('section');
  for (let index = 0; index < formSections.length; index += 1) {
    formSections[index].innerHTML = '';
  }
  theForm.querySelectorAll('hr')[0].remove();
  theForm.querySelectorAll('hr')[0].remove();
  theForm.querySelector('h2').remove();
};

// Adiciona o evento de para o atualização da página e preenche a seção form-content e limpa o form antigo
theForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // https://stackoverflow.com/questions/7803814/prevent-refresh-of-page-when-button-inside-form-clicked

  removeForm();
  nameData();
  emailData();
  casaData();
  familyData();
  subjectsData();
  elevadorData();
  comentaryData();

  // theForm.querySelector('p').style.alignContent: screenLeft;
});
