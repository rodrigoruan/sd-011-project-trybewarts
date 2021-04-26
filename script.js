// Variables
// const header = document.querySelector('header');
const buttonLogin = document.getElementById('button-login');
const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submit-btn');
const agree = document.getElementById('agreement');
const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const inputHouse = document.getElementById('house');
const inputTextArea = document.getElementById('textarea');
const forms = document.getElementById('evaluation-form');
const labelRate = document.getElementById('rate-container');
// const labelRate = document.getElementById('label-rate');
// Functions

function login() {
  if (loginInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
buttonLogin.addEventListener('click', login);

// agreement type checkbox
submitButton.disabled = true;
agree.addEventListener('change', (e) => {
  if (e.target.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

// adds text area counter
function addCounter() {
  const textArea = document.getElementById('textarea');
  textArea.addEventListener('keyup', (e) => {
    const counter = document.getElementById('counter');
    counter.innerHTML = `${e.target.maxLength - e.target.value.length} caracteres restantes`;
  });
}
addCounter();

function materiasChecked() {
  const inputChecked = document.querySelectorAll('.subject:checked');
  const inputValue = [];
  for (let index = 0; index < inputChecked.length; index += 1) {
    inputValue.push(` ${inputChecked[index].value}`);
  }
  return inputValue;
}

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const inputs = {
    Nome: `${inputName.value} ${inputLastName.value}`,
    Email: inputEmail.value,
    Casa: inputHouse.value,
    Família: document.querySelector('input[name="family"]:checked').value,
    Matérias: materiasChecked(),
    Avaliação: document.querySelector('input[name="rate"]:checked').value,
    Observações: inputTextArea.value,
  };

  let inputForm = '';
  for (const i of Object.keys(inputs)) {
    inputForm += `${i}: ${inputs[i]} <div>`;
    e.preventDefault();
  }
  console.log(forms);
  forms.innerHTML = inputForm;
  e.preventDefault();
});

// creates Radios
function createRadios() {
  const rates = 10;
  for (let i = 1; i <= rates; i += 1) {
    const input = document.createElement('input');
    const label = document.createElement('label');
    input.type = 'radio';
    input.name = 'rate';
    input.value = i;
    label.innerText = i;
    labelRate.appendChild(label);
    label.appendChild(input);
  }
}
createRadios();
