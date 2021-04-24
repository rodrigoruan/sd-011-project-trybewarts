const login = document.querySelector('#login');
const password = document.querySelector('#password');
const join = document.querySelector('#join');
const feedback = document.querySelector('.feedback');
const submit = document.querySelector('#submit-btn');
const agree = document.querySelector('#agreement');
const counter = document.querySelector('#counter');
const textarea = document.querySelector('#textarea');
const form = document.getElementById('evaluation-form');
const nome = document.querySelector('#input-name');
const nome2 = document.querySelector('#input-lastname');
const email = document.querySelector('#input-email');
const casa = document.querySelector('#house');

for (let index = 1; index <= 10; index += 1) {
  const label = document.createElement('label');
  const radio = document.createElement('input');
  label.innerText = index;
  radio.type = 'radio';
  radio.name = 'rate';
  radio.value = index;
  label.appendChild(radio);
  feedback.appendChild(label);
}

join.addEventListener('click', (e) => {
  e.preventDefault();
  const validLogin = login.value;
  const validPassword = password.value;
  if (validLogin === 'tryber@teste.com' && validPassword === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
  login.value = '';
  password.value = '';
});

let checkbox = false;

agree.addEventListener('click', () => {
  if (checkbox === true) {
    submit.setAttribute('disabled', 'disabled');
    checkbox = false;
  } else {
    submit.removeAttribute('disabled');
    checkbox = true;
  }
});

textarea.addEventListener('keyup', () => {
  const counterValue = 500 - textarea.value.length;
  counter.innerText = counterValue;
});

const forms = () => {
  const nameText = nome.value;
  const lastName = nome2.value;
  const emailText = email.value;
  const casaText = casa.value;
  const familia = document.querySelector('input[name="family"]:checked').value;
  const elementos = document.querySelectorAll('input.subject:checked');
  const rate = document.querySelector('input[name="rate"]:checked').value;
  const text = textarea.value;
  const finalValues = [];
  for (let i = 0; i < elementos.length; i += 1) {
    finalValues.push(elementos[i].value);
  }
  const contents = finalValues.map((c) => `${c},`).join(' ');
  return [nameText, lastName, emailText, casaText, familia, contents, rate, text];
};

const createDivs = () => {
  const values = forms();
  const nomeTexto = document.createElement('div');
  const emailTexto = document.createElement('div');
  const casaTexto = document.createElement('div');
  const familiaTexto = document.createElement('div');
  const skills = document.createElement('div');
  const rateText = document.createElement('div');
  const areaTexto = document.createElement('div');
  nomeTexto.innerText = `Nome: ${values[0]} ${values[1]}`;
  emailTexto.innerText = `Email: ${values[2]}`;
  casaTexto.innerText = `Casa: ${values[3]}`;
  familiaTexto.innerText = `Família: ${values[4]}`;
  skills.innerText = `Matérias: ${values[5]}`;
  rateText.innerText = `Avaliação: ${values[6]}`;
  areaTexto.innerText = `Observações: ${values[7]}`;

  return [nomeTexto, emailTexto, casaTexto, familiaTexto, skills, rateText, areaTexto];
};

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const divs = createDivs();
  for (let i = 0; i < divs.length; i += 1) {
    form.appendChild(divs[i]);
  }
});
