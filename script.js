const loginUser = 'tryber@teste.com';
const passwordUser = '123456';
const sendButton = document.getElementById('submit-btn');
const btnLogin = document.getElementById('login-button');

sendButton.disabled = true;

function checkInput(value, data) {
  let check = false;
  if (value === data) {
    check = true;
  }
  return check;
}

btnLogin.addEventListener('click', () => {
  const loginInput = document.getElementById('input-login').value;
  const passwordInput = document.getElementById('input-senha').value;
  const dataUser = loginUser + passwordUser;
  const dataInput = loginInput + passwordInput;
  const checkData = checkInput(dataUser, dataInput);
  if (checkData === true) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

const checkAgreement = document.getElementById('agreement');

checkAgreement.addEventListener('change', () => {
  if (checkAgreement) {
    sendButton.disabled = false;
  }
});

const txtArea = document.getElementById('textarea');
const txtCounter = document.getElementById('counter');
txtCounter.innerText = txtArea.getAttribute('maxLength');

txtArea.addEventListener('keyup', () => {
  const nowLength = txtArea.value.length;
  txtCounter.innerText = txtArea.getAttribute('maxLength') - nowLength;
});

const nome = document.getElementById('input-name');
const sobrenome = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const casa = document.getElementById('house');
const familia = document.getElementsByClassName('familia');
const materias = document.getElementsByClassName('subject');
const avaliacao = document.getElementsByClassName('nota');
const obs = document.getElementById('textarea');
const nomeLabel = 'Nome: ';
const emailLabel = 'Email: ';
const casaLabel = 'Casa: ';
const familiaLabel = 'Família: ';
const materiasLabel = 'Matérias: ';
const avaliacaoLabel = 'Avaliação: ';
const obsLabel = 'Observações: ';
const space = ' ';

function recoveryRadio(values) {
  const txtValue = [];
  for (let index = 0; index < values.length; index += 1) {
    if (values[index].checked === true) {
      txtValue.push(values[index].value);
    }
  }
  return txtValue.join(', ');
}

sendButton.addEventListener('click', (event) => {
  event.preventDefault();
  const selectForm = document.getElementById('evaluation-form');
  const selectChild = document.getElementById('all-form');
  const extFamilia = recoveryRadio(familia);
  const extMaterias = recoveryRadio(materias);
  const extAvaliacao = recoveryRadio(avaliacao);
  const newForm = [nomeLabel + nome.value + space + sobrenome.value, emailLabel + email.value,
    casaLabel + casa.value, familiaLabel + extFamilia, materiasLabel + extMaterias,
    avaliacaoLabel + extAvaliacao, obsLabel + obs.value];
  selectForm.removeChild(selectChild);
  const newUl = document.createElement('ul');
  selectForm.appendChild(newUl);
  for (let index = 0; index < newForm.length; index += 1) {
    const newLine = document.createElement('li');
    newLine.innerText = newForm[index];
    newUl.appendChild(newLine);
  }
});
