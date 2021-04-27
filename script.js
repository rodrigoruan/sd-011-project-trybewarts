const btnLogin = document.querySelector('#submitLogin');

const mainForm = document.querySelector('#evaluation-form');
const fieldsetInformations = document.querySelector('#field-set');

const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

const checkBox = document.querySelector('#agreement');
const btnSubmit = document.querySelector('#submit-btn');

const fields = {
  Nome: document.querySelector('#input-name'),
  Sobrenome: document.querySelector('#input-lastname'),
  Email: document.querySelector('#input-email'),
  Casa: document.querySelector('#house'),
  Família: document.querySelectorAll('#label-family ~ input.family'),
  Matérias: document.querySelectorAll('#label-content ~ input.content'),
  Avaliação: document.querySelectorAll('#label-rate ~input.rate'),
  Observações: document.querySelector('#textarea'),
};

btnLogin.addEventListener('click', (event) => {
  const eventPath = event.path;
  const email = eventPath[1][0].value;
  const password = eventPath[1][1].value;
  if (email === 'tryber@teste.com' && password === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Login ou senha inválidos.');
  }
});

checkBox.addEventListener('change', () => {
  if (checkBox.checked) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
});

textArea.addEventListener('keyup', () => {
  counter.innerText = 500 - textArea.value.length;
});

function checkedValues(elem) {
  const checkedItems = [];
  for (const item of elem) {
    if (item.checked) checkedItems.push(item.value);
  }
  return checkedItems.join(', ');
}

function createrElement(elem, fieldName) {
  const pText = document.createElement('p');
  pText.className = `${fieldName.toLowerCase()}`
  pText.innerText = `${fieldName}: `;

  if (elem.length > 0) {
    if (elem.nodeName === 'SELECT') pText.innerText += ` ${elem.value}`;
    pText.innerText += `${checkedValues(elem)}`;
  } else if (fieldName === 'Sobrenome') {
    const p = document.querySelector('p.nome');
    p.innerText += ` ${elem.value}`;
  } else {
    pText.innerText += elem.value;
  }
  return mainForm.appendChild(pText);
}

btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  fieldsetInformations.style.display = 'none';
  for (const fieldName of Object.keys(fields)) {
    const fieldValue = fields[`${fieldName}`];
    console.log(fieldName, fieldValue.nodeName, fieldValue)
    createrElement(fieldValue, fieldName);
  }
  mainForm.style.display = 'block';
});
