const emailLogin = document.getElementById('email-login');
const password = document.getElementById('password-login');
const btnEnvia = document.getElementById('submit-btn');
const mainContainer = document.getElementById('form-container');
const formData = document.getElementById('evaluation-form');

function verificaDados() {
  const btnLogin = document.getElementById('btn-login');
  btnLogin.addEventListener('click', () => {
    if ((emailLogin.value === 'tryber@teste.com') && (password.value === '123456')) {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}
verificaDados();

function caracteresTextArea() {
  const textArea = document.getElementById('textarea');
  const counter = document.getElementById('counter');
  textArea.addEventListener('keyup', () => {
    counter.innerText = 500 - (textArea.value.length);
  });
}
caracteresTextArea();

function habilitaEnvio() {
  const checkbox = document.getElementById('agreement');
  checkbox.addEventListener('change', () => {
    btnEnvia.removeAttribute('disabled');
  });
}
habilitaEnvio();

function nameData() {
  const inputName = document.getElementById('input-name').value;
  const inputLastName = document.getElementById('input-lastname').value;
  const name = document.createElement('div');
  name.innerHTML = `Nome: ${inputName} ${inputLastName}`;
  return name;
}

function emailData() {
  const inputEmail = document.getElementById('input-email').value;
  const email = document.createElement('div');
  email.innerHTML = `Email: ${inputEmail}`;
  return email;
}

function houseData() {
  const inputHouse = document.getElementById('house').value;
  const house = document.createElement('div');
  house.innerHTML = `Casa: ${inputHouse}`;
  return house;
}

function familyData() {
  const input = document.querySelectorAll('input');
  const family = document.createElement('div');
  for (let index = 0; index < input.length; index += 1) {
    if (input[index].type === 'radio' && input[index].name === 'family' && input[index].checked) {
      family.innerHTML = `Família: ${input[index].value}`;
    }
  }
  return family;
}

function subjectData() {
  const checkOptions = document.getElementsByClassName('subject');
  const subjects = document.createElement('div');
  const subjectsIndex = [];
  for (let index = 0; index < checkOptions.length; index += 1) {
    if (checkOptions[index].checked) {
      subjectsIndex.push(checkOptions[index].value);
    }
  }
  subjects.innerHTML = `Matérias: ${subjectsIndex.join(', ')}`;
  return subjects;
}

function rateData() {
  const allInputs = document.querySelectorAll('input');
  const rate = document.createElement('div');
  for (let index = 0; index < allInputs.length; index += 1) {
    if (allInputs[index].name === 'rate' && allInputs[index].checked) {
      rate.innerHTML = `Avaliação: ${allInputs[index].value}`;
    }
  }
  return rate;
}

function observationData() {
  const comments = document.createElement('div');
  const commentsInput = document.getElementById('textarea').value;
  comments.innerHTML = `Observações: ${commentsInput}`;
  return comments;
}

function renderedData(event) {
  event.preventDefault();
  const newForm = document.createElement('form');
  newForm.id = 'evaluation-form';
  const name = nameData();
  newForm.appendChild(name);
  const email = emailData();
  newForm.appendChild(email);
  const house = houseData();
  newForm.appendChild(house);
  const family = familyData();
  newForm.appendChild(family);
  const subject = subjectData();
  newForm.appendChild(subject);
  const rate = rateData();
  newForm.appendChild(rate);
  const observation = observationData();
  newForm.appendChild(observation);
  mainContainer.replaceChild(newForm, formData);
}

btnEnvia.addEventListener('click', renderedData);
