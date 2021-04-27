window.onload = function onloadFunction() {
  const submitBtn = document.getElementById('submit-btn');
  submitBtn.disabled = true;
};

const email = document.querySelector('#email');
const password = document.querySelector('#password');
const loginButton = document.querySelector('#login-button');
const emailNav = document.querySelector('#email-nav');
const passwordNav = document.querySelector('#password-nav');
const loginButtonNav = document.querySelector('#login-button-nav');
const checkMark = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const contChar = document.getElementById('counter');
const menuBtn = document.querySelector('#checkbox-menu');

function checkEmail() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Login ou senha inválidos.');
  }
}

loginButton.addEventListener('click', checkEmail);

function checkEmailNav() {
  if (emailNav.value === 'tryber@teste.com' && passwordNav.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Login ou senha inválidos.');
  }
}

loginButtonNav.addEventListener('click', checkEmailNav);

function checkBox() {
  document.getElementById('agreement').onclick = function verifyChange() {
    const submitBtn = document.getElementById('submit-btn');
    if (checkMark.checked) {
      submitBtn.disabled = false;
      submitBtn.style.opacity = '100%'
    } else {
      submitBtn.disabled = true;
      submitBtn.style.opacity = '50%'
    }
  };
}

checkBox();

textArea.addEventListener('input', () => {
  if (textArea.value.length === 0) {
    contChar.innerText = '500';
  } else {
    contChar.innerText = 500 - textArea.value.length;
  }
});

//

function removeForm() {
  const evaluationFrom = document.querySelector('#evaluation-form');
  const main = document.querySelector('main');

  main.removeChild(evaluationFrom);
}

function nameLastName() {
  const createParagraph = document.createElement('p');

  const name = document.querySelector('#input-name').value;
  const lastName = document.querySelector('#input-lastname').value;

  createParagraph.innerText = `Nome: ${name} ${lastName}`;

  return createParagraph;
}

function returnEmail() {
  const createParagraph = document.createElement('p');

  const returnEmailValue = document.querySelector('#input-email').value;

  createParagraph.innerText = `Email: ${returnEmailValue}`;

  return createParagraph;
}

function returnHouse() {
  const createParagraph = document.createElement('p');

  const returnHouseValue = document.querySelector('#house').value;

  createParagraph.innerText = `Casa: ${returnHouseValue}`;

  return createParagraph;
}

function returnFamily() {
  const family = document.getElementsByName('family');
  let selectedFamily;

  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked === true) {
      selectedFamily = family[index].value;
    }
  }

  const createParagraph = document.createElement('p');

  createParagraph.innerText = `Família: ${selectedFamily}`;

  return createParagraph;
}

function returnSubjects() {
  const subjects = document.getElementsByClassName('subject');
  let selectedSubjects = [];

  for (let index = 0; index < subjects.length; index += 1) {
    if (subjects[index].checked === true) {
      selectedSubjects.push(` ${subjects[index].value}`);
    }
  }

  selectedSubjects = selectedSubjects.toString();

  const createParagraph = document.createElement('p');

  createParagraph.innerText = `Matérias: ${selectedSubjects}`;

  return createParagraph;
}

function avaliation() {
  const rate = document.getElementsByName('rate');
  let selectedRate;

  for (let index = 0; index < rate.length; index += 1) {
    if (rate[index].checked === true) {
      selectedRate = rate[index].value;
    }
  }

  const createParagraph = document.createElement('p');

  createParagraph.innerText = `Avaliação: ${selectedRate}`;

  return createParagraph;
}

function comment() {
  const createParagraph = document.createElement('p');

  const returnComment = document.querySelector('#textarea').value;

  createParagraph.innerText = `Observações: ${returnComment}`;

  return createParagraph;
}

function createFormElement() {
  const createForm = document.createElement('form');
  createForm.id = 'evaluation-form';

  createForm.appendChild(nameLastName());
  createForm.appendChild(returnEmail());
  createForm.appendChild(returnHouse());
  createForm.appendChild(returnFamily());
  createForm.appendChild(returnSubjects());
  createForm.appendChild(avaliation());
  createForm.appendChild(comment());
  document.querySelector('main').appendChild(createForm);

  removeForm();
}

document.querySelector('#submit-btn').addEventListener('click', createFormElement);

// botao menu interativo

function showMenu() {
  const menuBtnChecked = document.querySelector('#checkbox-menu').checked;
  const menuNav = document.querySelector('#nav-menu-login');

  if (menuBtnChecked === true) {
    menuNav.style.transform = 'translateX(-100%)';
    menuNav.style.transition = 'all .5s linear';
  } else {
    menuNav.style.transform = 'translateX(100%)';
    menuNav.style.transition = 'all .5s linear';
  }
}

menuBtn.addEventListener('click', showMenu);
