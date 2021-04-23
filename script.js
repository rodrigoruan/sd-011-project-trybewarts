const login = document.querySelector('#login');
const password = document.querySelector('#password');
const join = document.querySelector('#join');
const feedback = document.querySelector('.feedback');
const submit = document.querySelector('#submit-btn');
const agree = document.querySelector('#agreement');
const counter = document.querySelector('#counter');
const textarea = document.querySelector('#textarea');
// const clear = document.querySelector('.clear');
// const inputName = document.querySelector('#input-name');
// const inputName2 = document.querySelector('#input-lastname');
// const email = document.querySelector('#input-email');
// const casa = document.querySelector('#house');
// const family = document.querySelector('input[name="family"]:checked');
// const materias = document.querySelectorAll('[class="subject"]:checked');
// const avaliation = document.querySelector('input[name="rate"]:checked');

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

// function nome() {
//   return `Nome: ${inputName.value} ${inputName2.value}`;
// }

// function showEmail() {
//   return `Email: ${email.value}`;
// }

// function showHouse() {
//   return `Casa: ${casa.value}`;
// }

// function showFamily() {
//   return `Família: ${family.value}`;
// }

// function showMaterias() {
//   return `Matérias: ${materias.value}`
// }

// submit.addEventListener('click', () => {
//   clear.innerHTML = `<p>${nome()}</p><p>${showEmail()}</p>${showHouse()}
//   <br>`;
// });
