const btnLogin = document.getElementById('Login-btn');
const login = document.getElementById('Login');
const senha = document.getElementById('Senha');

btnLogin.addEventListener('click', (evt) => {
  evt.preventDefault();

  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
    console.log(login.value);
    console.log(senha.value);
  }
});

// Requisito 18

const check = document.getElementById('agreement');
const cadButton = document.getElementById('submit-btn');

check.addEventListener('click', () => {
  cadButton.toggleAttribute('disabled');
});

// Requisito 21

const submit = document.getElementById('submit-btn');
const name = document.getElementById('input-name');
const subname = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const casas = document.getElementById('house');
const familia = document.getElementsByName('family');
const nota = document.getElementsByName('rate');
const textarea = document.getElementById('textarea');
const checkbox = document.getElementsByName('conteudo');
const form = document.querySelector('#evaluation-form');

let x = '';
familia.forEach((index) => {
  index.addEventListener('change', () => {
    familia.forEach((radio) => {
      if (radio.checked) {
        x = radio.value;
      }
    });
  });
});

const y = [];
function xablau() {
  checkbox.forEach((index) => {
    if (index.checked) {
      y.push(` ${index.value}`);
    }
  });
}

let z = '';
nota.forEach((index) => {
  index.addEventListener('change', () => {
    nota.forEach((secIndex) => {
      if (secIndex.checked) {
        z = secIndex.value;
      }
    });
  });
});

submit.addEventListener('click', (event) => {
  event.preventDefault();

  xablau();
  form.innerHTML = `Nome: ${name.value} ${subname.value}<br>`;
  form.innerHTML += `Email: ${email.value}<br>`;
  form.innerHTML += `Casa: ${casas.value}<br>`;
  form.innerHTML += `Família: ${x}<br>`;
  form.innerHTML += `Matérias: ${y}<br>`;
  form.innerHTML += `Avaliação: ${z}<br>`;
  form.innerHTML += `Observações: ${textarea.value}`;
});

// Requisito 20

const textArea = document.getElementById('textarea');
const countText = document.getElementById('counter');

textArea.addEventListener('keyup', () => {
  const a = 500 - textArea.value.length;
  countText.innerText = a;
});
