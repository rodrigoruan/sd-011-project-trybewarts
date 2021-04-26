const submitButton = document.querySelector('#submit-button');

function validation() {
  const login = document.querySelector('#login').value;
  const pass = document.querySelector('#pass').value;
  if (login === 'tryber@teste.com' && pass === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

submitButton.addEventListener('click', validation);

const agreement = document.getElementById('agreement');

function ocultButton() {
  if (agreement.checked === true) {
    document.getElementById('submit-btn').disabled = false;
  }
  if (agreement.checked === false) {
    document.getElementById('submit-btn').disabled = true;
  }
}

agreement.addEventListener('click', ocultButton);

const textArea = document.getElementById('textarea');

function conText(event) {
  const max = 500;
  const total = textArea.value.length;
  if (max >= total) {
    const resto = max - total;
    document.getElementById('counter').innerHTML = resto;
  } else {
    event.preventDefault();
  }
}

textArea.addEventListener('keyup', conText);

const submitMainForm = document.getElementById('submit-btn');

const trybewartsForm = document.getElementsByClassName('trybewarts-form')[0];
const mainform = document.getElementById('evaluation-form');
const name = document.querySelector('#input-name');
const lastName = document.querySelector('#input-lastname');
const eMail = document.querySelector('#input-email');
const house = document.getElementById('house');
const family = document.querySelector('input[name="family"]:checked');
const avaliations = document.querySelector('#textarea');

const infos1 = (event) => {
  event.preventDefault();  
  trybewartsForm.removeChild(mainform);
  const infosMain = document.createElement('p');
  trybewartsForm.appendChild(infosMain);
  infosMain.innerText = (`Dados recebidos:
  Nome: ${name.value}
  Sobrenome: ${lastName.value}
  E-mail: ${eMail.value}
  Casa: ${house.value}
  Observações: ${avaliations.value}`);
}

submitMainForm.addEventListener('click', infos1);
