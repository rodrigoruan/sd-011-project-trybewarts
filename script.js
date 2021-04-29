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

const submitMainForm = document.getElementById('submit-btn');

function ocultButton() {
  if (agreement.checked === true) {
    submitMainForm.disabled = false;
  }
  if (agreement.checked === false) {
    submitMainForm.disabled = true;
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

const trybewartsForm = document.getElementsByClassName('trybewarts-form')[0];
const mainform = document.getElementById('evaluation-form');
const name = document.querySelector('#input-name');
const lastName = document.querySelector('#input-lastname');
const eMail = document.querySelector('#input-email');
const house = document.getElementById('house');
const avaliations = document.querySelector('#textarea');
const hardSkills = document.getElementsByClassName('subject');

const infos1 = (event) => { event.preventDefault();
  const family = document.querySelector('input[name=family]:checked');
  const rate = document.querySelector('input[name=rate]:checked');
  const hardSkillsList = [];
  for (let index = 0; index < hardSkills.length; index += 1) {
    if (hardSkills[index].checked === true) {
      hardSkillsList.push(hardSkills[index].value);
    }
  }
  const infosMain = document.createElement('p');
  trybewartsForm.appendChild(infosMain);
  infosMain.innerText = (`Nome: ${name.value} ${lastName.value}
  E-mail: ${eMail.value}
  Casa: ${house.value}
  Família: ${family.value}
  Matéria: ${hardSkillsList}
  Avaliação: ${rate.value} -
  Observações: ${avaliations.value}`);
  trybewartsForm.removeChild(mainform);
};

submitMainForm.addEventListener('click', infos1);
