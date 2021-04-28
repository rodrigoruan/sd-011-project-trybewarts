const loginInput = document.getElementById('loginInput');
const senhaInput = document.getElementById('senhaInput');
const submitLoginBttn = document.getElementById('login-button');
const formCheckBox = document.getElementById('agreement');
const submitFormButton = document.getElementById('submit-btn');
submitFormButton.disabled = true;

submitLoginBttn.addEventListener('click', () => {
  const loginInputVal = loginInput.value;
  const senhaInputVal = senhaInput.value;
  if (loginInputVal !== 'tryber@teste.com' || senhaInputVal !== '123456') {
    alert('Login ou senha inválidos.');
  } else if (loginInputVal === 'tryber@teste.com' && senhaInputVal === '123456') {
    alert('Olá, Tryber!');
  }
});

formCheckBox.addEventListener('click', () => {
  if (formCheckBox.checked) {
    submitFormButton.disabled = false;
  } else {
    submitFormButton.disabled = true;
  }
});

const textArea = document.getElementById('textarea');
const textCounter = document.getElementById('counter');

textArea.addEventListener('input', () => {
  const saveCharsNumber = textArea.value.length;
  textCounter.innerText = 500 - saveCharsNumber;
});

function checkFamily() {
  const family = document.getElementsByName('family');
  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked) {
      const checkedRadioFamily = family[index].value;
      return checkedRadioFamily;
    }
  }
}

function checkContent() {
  const subjects = document.getElementsByClassName('subject');
  const checkedContents = [];
  let stringContents = '';
  for (let index = 0; index < subjects.length; index += 1) {
    if (subjects[index].checked) {
      checkedContents.push(` ${subjects[index].value}`);
    }
  }
  stringContents += checkedContents.toString();
  return stringContents;
}

function checkRate() {
  const rate = document.getElementsByName('rate');
  for (let index = 0; index < rate.length; index += 1) {
    if (rate[index].checked) {
      const checkedRadioRate = rate[index].value;
      return checkedRadioRate;
    }
  }
}

submitFormButton.addEventListener('click', () => {
  const form = document.getElementById('evaluation-form');
  const name = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const houseSelect = document.getElementById('house').value;
  const family = checkFamily();
  const contents = checkContent();
  const rate = checkRate();
  const observation = textArea.value;

  const arrayInputs = [name, lastName, email, houseSelect, family, contents, rate, observation];
  const arrayInputsType = ['Nome: ', 'Email: ', 'Casa: ', 'Família: ',
    'Matérias:', 'Avaliação: ', 'Observações: '];

  for (let index = 0; index < arrayInputs.length; index += 1) {
    if (index === 0) {
      form.innerText = `${arrayInputsType[index]} ${arrayInputs[index]} ${arrayInputs[index + 1]}`;
      index += 2;
    } form.innerText += `${arrayInputsType[index - 1]} ${arrayInputs[index]}`;
  }
});
