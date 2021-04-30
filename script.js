const loginUser = document.getElementById('login');
const passUser = document.getElementById('password');
const loginBtn = document.querySelector('#header__form--botao');

function verifyLogin() {
  if (loginUser.value !== 'tryber@betrybe.com' && passUser.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

loginBtn.addEventListener('click', verifyLogin);

const btnAgreement = document.getElementById('agreement');

function addProperty() {
  const submitBtn = document.getElementById('submit-btn');
  submitBtn.removeAttribute('disabled');
}

btnAgreement.addEventListener('click', addProperty);

const comentArea = document.getElementById('textarea');
const counter = document.getElementById('counter');

comentArea.addEventListener('input', () => {
  let wordCount = 500;
  wordCount -= (comentArea.value.length);
  counter.innerText = wordCount;
});

const firstName = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');

function captureName() {
  const fullName = `Nome: ${firstName.value} ${lastName.value}`;
  return fullName;
}

const radios = document.querySelectorAll('.radio-family');

function captureFamily() {
  let chosenFamily = 'Família: ';
  for (let index = 0; index < radios.length; index += 1) {
    if (radios[index].checked === true) {
      chosenFamily += radios[index].value;
    }
  }
  return chosenFamily;
}

const houseInput = document.getElementById('house');

function captureHouse() {
  const house = `Casa: ${houseInput.value}`;
  return house;
}

const emailInput = document.getElementById('input-email');

function captureEmail() {
  const email = `Email: ${emailInput.value}`;
  return email;
}

const contents = document.querySelectorAll('.subject');

function captureContents() {
  const arrayOfContent = [];
  for (let index = 0; index < contents.length; index += 1) {
    if (contents[index].checked === true) {
      arrayOfContent.push(contents[index].value);
    }
  }
  return `Matérias: ${arrayOfContent.join(', ')}`;
}

const textArea = document.getElementById('textarea');

function captureCommentary() {
  const commentary = `Observações: ${textArea.value}`;
  return commentary;
}

const evaluation = document.querySelectorAll('.input-Eva');

function captureEvaluation() {
  let evaluationChosen = 'Avaliação: ';
  for (let index = 0; index < evaluation.length; index += 1) {
    if (evaluation[index].checked === true) {
      evaluationChosen += evaluation[index].value;
    }
  }
  return evaluationChosen;
}

const submitBtn = document.getElementById('submit-btn');
const resumeForm = document.getElementById('evaluation-form');

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  resumeForm.classList.add('margin-top');
  resumeForm.innerText = `${captureName()}\n
  ${captureEmail()}\n
  ${captureHouse()}\n
  ${captureFamily()}\n
  ${captureContents()}\n
  ${captureEvaluation()}\n
  ${captureCommentary()}`;
});
