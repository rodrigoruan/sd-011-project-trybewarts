const email = 'tryber@teste.com';
const pass = '123456';
const loginInput = document.querySelector('#login');
const passwordInput = document.querySelector('#password');
const buttonInput = document.querySelector('#button');

function login() {
  if (loginInput.value === email && passwordInput.value === pass) {
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

// Adiciona o campo nome do Resultado
const firstName = document.querySelector('#input-name');
const lastName = document.querySelector('#input-lastname');

const nameData = () => {
  const addName = document.createElement('p');
  addName.innerHTML = `${firstName.value}  ${lastName.value}`;

  formContent.appendChild(addName);
};

// Adiciona campo email

// Adiciona o evento de para o atualização da página e preenche a seção form-content e limpa o form antigo
theForm.addEventListener('submit', (event) => {
  event.preventDefault();

  theForm.innerHTML = '';
  nameData();
});

