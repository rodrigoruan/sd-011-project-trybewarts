const buttonLogin = document.getElementById('btn-login');
const sendBtn = document.getElementById('submit-btn');
const mainForm = document.getElementById('main-form');
const forms = document.getElementById('evaluation-form');

buttonLogin.addEventListener('click', () => {
  const inputLogin = document.getElementById('login');
  const inputSenha = document.getElementById('senha');
  if (inputLogin.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

const boxAgreement = document.getElementById('agreement');

function SendButton() {
  boxAgreement.addEventListener('click', () => {
    if (sendBtn.disabled) {
      sendBtn.disabled = false;
    } else {
      sendBtn.disabled = true;
    }
  });
}
SendButton();

const textField = document.getElementById('textarea');
const counter = document.getElementById('counter');

function counterText() {
  const comments = textField.value.length;
  counter.textContent = 500 - comments;
}

textField.addEventListener('keyup', counterText);

function nameAndLast() {
  const getName = document.getElementById('input-name').value;
  const getLastName = document.getElementById('input-lastname').value;
  const getDiv1 = document.createElement('div');
  getDiv1.innerHTML = `Nome: ${getName} ${getLastName}`;
  return getDiv1;
}

function emails() {
  const getEmail = document.getElementById('input-email').value;
  const getDiv2 = document.createElement('div');
  getDiv2.innerHTML = `Email: ${getEmail}`;
  return getDiv2;
}

function houses() {
  const getHouse = document.getElementById('house').value;
  const getDiv3 = document.createElement('div');
  getDiv3.innerHTML = `Casa: ${getHouse}`;
  return getDiv3;
}

function families() {
  const input = document.querySelectorAll('input');
  const getDiv4 = document.createElement('div');
  for (let index = 0; index < input.length; index += 1) {
    if (input[index].type === 'radio' && input[index].name === 'family' && input[index].checked) {
      getDiv4.innerHTML = `Família: ${input[index].value}`;
    }
  }
  return getDiv4;
}

function familyBox() {
  const getFamily = document.querySelectorAll('input[class="subject"]:checked');
  const getDiv5 = document.createElement('div');
  const addSubject = [];

  for (let index2 = 0; index2 < getFamily.length; index2 += 1) {
    if (getFamily[index2].checked) {
      addSubject.push(getFamily[index2].value);
    }
  }
  getDiv5.innerHTML = `Matérias: ${addSubject.join(', ')}`;
  return getDiv5;
}

function getRate() {
  const getAllInputs = document.querySelectorAll('input');
  const getDiv6 = document.createElement('div');

  for (let index3 = 0; index3 < getAllInputs.length; index3 += 1) {
    if (getAllInputs[index3].name === 'rate' && getAllInputs[index3].checked) {
      getDiv6.innerHTML = `Avaliação: ${getAllInputs[index3].value}`;
    }
  }
  return getDiv6;
}

function observation() {
  const getComment = document.getElementById('textarea').value;
  const getDiv7 = document.createElement('div');
  getDiv7.innerHTML = `Observações: ${getComment}`;
  return getDiv7;
}

function copyDatas(event) {
  event.preventDefault();
  const newestForm = document.createElement('form');
  newestForm.id = 'evaluation-form';
  const getDiv1 = nameAndLast();
  newestForm.appendChild(getDiv1);
  const getDiv2 = emails();
  newestForm.appendChild(getDiv2);
  const getDiv3 = houses();
  newestForm.appendChild(getDiv3);
  const getDiv4 = families();
  newestForm.appendChild(getDiv4);
  const getDiv5 = familyBox();
  newestForm.appendChild(getDiv5);
  const getDiv6 = getRate();
  newestForm.appendChild(getDiv6);
  const getDiv7 = observation();
  newestForm.appendChild(getDiv7);
  mainForm.replaceChild(newestForm, forms);
}

sendBtn.addEventListener('click', copyDatas);
