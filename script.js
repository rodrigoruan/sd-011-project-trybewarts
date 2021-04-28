// // get submit button
const loginButton = document.getElementById('login-button');
// get agreement checkbox
const agreementBox = document.getElementById('agreement');
// get send form button
const sendFormBtn = document.getElementById('submit-btn');
// get text area
const textAreaInput = document.getElementsByTagName('textarea');
// get counter
const textCounter = document.getElementById('counter');

// Login Function
loginButton.addEventListener('click', () => {
  // get login input
  const loginInput = document.getElementById('login');
  // get password input
  const passwordInput = document.getElementById('password');
  if (loginInput.value !== 'tryber@teste.com' || passwordInput.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

// Enable Send Form button!
agreementBox.addEventListener('change', () => {
  if (agreementBox.checked) {
    sendFormBtn.removeAttribute('disabled');
  } else {
    sendFormBtn.setAttribute('disabled', 'disabled');
  }
});

// Word Count!!!
textAreaInput[0].addEventListener('keyup', () => {
  textCounter.innerText = 500 - textAreaInput[0].value.length;
});

function getHouse() {
  const houseArray = document.getElementsByClassName('input-house');
  let chosenHouse = '';
  for (let i = 0; i < houseArray.length; i += 1) {
    if (houseArray[i].selected) {
      chosenHouse = houseArray[i].value;
    }
  }
  return chosenHouse;
}

function getFamily() {
  const familyArray = document.getElementsByClassName('input-family');
  let chosenFamily = '';
  for (let i = 0; i < familyArray.length; i += 1) {
    if (familyArray[i].checked) {
      chosenFamily = familyArray[i].value;
    }
  }
  return chosenFamily;
}

function getSubjects() {
  const subjectArray = document.getElementsByClassName('subject');
  const chosenSubject = [];
  for (let i = 0; i < subjectArray.length; i += 1) {
    if (subjectArray[i].checked) {
      chosenSubject.push(subjectArray[i].value);
    }
  }
  return chosenSubject.join(', ');
}

function getNPS() {
  const npsArray = document.getElementsByClassName('input-nps');
  let chosenNPS = [];
  for (let i = 0; i < npsArray.length; i += 1) {
    if (npsArray[i].checked) {
      chosenNPS = npsArray[i].value;
    }
  }
  return chosenNPS;
}

const formsOutput = document.getElementById('evaluation-form');

function getFullName() {
  const firstName = document.getElementById('input-name').value;
  const secondName = document.getElementById('input-lastname').value;
  return `${firstName} ${secondName}`;
}

sendFormBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const formResult = {
    Nome: getFullName(),
    Email: document.getElementById('input-email').value,
    Casa: getHouse(),
    Família: getFamily(),
    Matérias: getSubjects(),
    Avaliação: getNPS(),
    Observações: document.getElementsByTagName('textarea')[0].value,
  };
  const formResultKeys = Object.keys(formResult);
  for (let key = 0; key < formResultKeys.length; key += 1) {
    const newFormInfo = document.createElement('p');
    const part1 = formResultKeys[key];
    const part2 = formResult[formResultKeys[key]];
    formsOutput.appendChild(newFormInfo).innerText = `${part1}: ${part2}`;
  }
});
