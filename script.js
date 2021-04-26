const btnLogin = document.querySelector('#logar');
const textArea = document.querySelector('#textarea');
const actBtn = document.getElementById('submit-btn');
const checkCheck = document.querySelector('#agreement');
const mainForms = document.querySelector('#evaluation-form');

btnLogin.addEventListener('click', () => {
  const loginInput = document.querySelector('#loginInput').value;
  const passwordInput = document.querySelector('#passwordInput').value;

  if (loginInput === 'tryber@teste.com' && passwordInput === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

textArea.addEventListener('keyup', () => {
  const inputLength = textArea.value.length;
  const counter = document.querySelector('#counter');

  counter.innerText = 500 - inputLength;
});

function checkBtn() {
  if (checkCheck.checked) {
    actBtn.classList.remove('inactive');
    actBtn.disabled = false;
  } else {
    actBtn.classList.add('inactive');
    actBtn.disabled = true;
  }
}

function removeChildren() {
  const mainFormsLength = document.querySelector('#evaluation-form').childNodes
    .length;

  for (let index = 0; index < mainFormsLength; index += 1) {
    mainForms.firstChild.remove();
  }
}

function createFormsData(data) {
  const formsData = document.createElement('p');
  formsData.innerText = data;
  return formsData;
}

function checkedRadio(nodeName) {
  for (let index = 0; index < nodeName.length; index += 1) {
    if (nodeName[index].checked) {
      return nodeName[index].value;
    }
  }
}

function checkedBox(nodeName) {
  const checkArray = [];
  for (let index = 0; index < nodeName.length; index += 1) {
    if (nodeName[index].checked) {
      checkArray.push(` ${nodeName[index].value}`);
    }
  }
  return checkArray;
}

function getData() {
  const formsName = document.querySelector('#input-name').value;
  const formsLastName = document.querySelector('#input-lastname').value;
  const formsEmail = document.querySelector('#input-email').value;
  const formsSelect = document.querySelector('#house').value;
  const formsRadioFamily = document.querySelectorAll('.radio-family .radio-content input');
  const radioFamilyValue = checkedRadio(formsRadioFamily);
  const formsCheckFamily = document.querySelectorAll('.subject');
  const checkFamilyValue = checkedBox(formsCheckFamily);
  const radioRatesFamily = document.querySelectorAll('.radio-rates .radio-content input');
  const radioRateValue = checkedRadio(radioRatesFamily);
  const forsmTextArea = document.querySelector('textarea').value;

  return { fullName: `Nome: ${formsName} ${formsLastName}`,
    emailString: `Email: ${formsEmail}`,
    houseChosen: `Casa: ${formsSelect}`,
    familyChosen: `Família: ${radioFamilyValue}`,
    subjectsChosen: `Matérias:${checkFamilyValue}`,
    rateChosen: `Avaliação: ${radioRateValue}`,
    comments: `Observações: ${forsmTextArea}` };
}

function showData(event) {
  event.preventDefault();
  const datas = getData();

  removeChildren();
  for (const dataContent in datas) {
    if ({}.hasOwnProperty.call(datas, dataContent)) {
      mainForms.appendChild(createFormsData(datas[dataContent]));
    }
  }
}

checkCheck.addEventListener('change', checkBtn);
actBtn.addEventListener('click', showData);
