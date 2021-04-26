// Declara variáveis comuns para as diferentes funções
const submitBtn = document.getElementById('submit-btn');
const inputName = document.querySelector('#input-name');
const inputLastN = document.querySelector('#input-lastname');
const inputEmail = document.querySelector('#input-email');
const house = document.querySelector('#house');

const subject = document.querySelectorAll('.subject').checked;
const evaluatorRate = document.querySelectorAll('#label-rate').checked;
const textArea = document.querySelector('#textarea');

// Login do usuário
function CheckLogin() {
  const loginBtn = document.querySelector('#login-btn');
  const validLogin = 'tryber@teste.com';
  const validPw = '123456';
  loginBtn.addEventListener('click', () => {
    const login = document.querySelector('#login').value;
    const password = document.querySelector('#password').value;
    if (login === validLogin && password === validPw) {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}

// Ativa o botão
function ActivateButton() {
  submitBtn.disabled = false;
}

// Desativa o botão
function DeactivateButton() {
  submitBtn.disabled = true;
}

// Checa se o usuário concorda com os termos ticando a checkbox
function CheckAgreement() {
  const checkAgreement = document.getElementById('agreement');
  checkAgreement.addEventListener('change', () => {
    if (checkAgreement.checked) {
      ActivateButton();
    } else {
      DeactivateButton();
    }
  });
}

// Faz o contador da textarea contar
function CharacterLimit() {
  const counter = document.querySelector('textarea').value.length;
  const tMaxLength = document.getElementById('textarea').maxLength;
  const pCounter = document.getElementById('counter');
  pCounter.innerHTML = tMaxLength - counter;
}

function FillInputs() {
  const form = document.getElementsByTagName('form')[1];
  form.innerHTML = '';
  form.innerHTML += `Nome: ${inputName.value} ${inputLastN.value} <br>`;
  form.innerHTML += `Email: ${inputEmail.value} <br>`;
  form.innerHTML += `Casa: ${house.value} <br>`;
  form.innerHTML += `Família: <br>`;
  console.log(document.querySelector('input[class="family"]:checked'));

}

// Função que chama todas as funções do site
function Onload() {
  CheckLogin();
  CheckAgreement();
  CharacterLimit();
}

// Ao carregar toda a página, chama a função responsável por todas as funções
window.onload = Onload;
