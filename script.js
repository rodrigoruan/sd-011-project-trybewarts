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

const values = () => {
  const elementos = document.querySelectorAll('input.subject:checked');
  const finalValues = [];
  for (let i = 0; i < elementos.length; i += 1) {
    finalValues.push(elementos[i].value);
  }
  const contents = finalValues.map((c) => `${c},`).join(' ');
  return [
    `Nome: ${nome.value} ${nome2.value}`,
    `Email: ${email.value}`,
    `Casa: ${casa.value}`,
    `Família: ${document.querySelector('input[name="family"]:checked').value}`,
    `Matérias: ${contents}`,
    `Avaliação: ${document.querySelector('input[name="rate"]:checked').value}`,
    `Observações: ${textarea.value}`,
  ];
};

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const valores = values();
  for (let i = 0; i < 7; i += 1) {
    const div = document.createElement('div');
    div.innerText = valores[i];
    form.appendChild(div);
  }
});
