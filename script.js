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

<<<<<<< HEAD
// Requisito 21

const fullname = document.getElementById('fullname');
const saveEmail = document.getElementById('save-email');
const house = document.getElementById('house-selected');
const family = document.getElementById('family-selected')
const marked = document.getElementById('marked');
const rate = document.getElementById('evaluation');
const observation = document.getElementById('observation');
const submit = document.getElementById('submit-btn');
const name = document.getElementById('input-name');
const subname = document.getElementById('input-lastname')
const email = document.getElementById('input-email');
const casas = document.getElementById('house');
const familia = document.getElementsByName('family');
const nota = document.getElementsByName('rate');
const textarea = document.getElementById('area-texto');
const checkbox = document.getElementsByName('conteudo');
const form = document.querySelector('#evaluation-form');;

submit.addEventListener('click', (event) => {
  event.preventDefault();

  fullname.innerText = `Nome: ${name.value} ${subname.value}`;
  saveEmail.innerText = `Email: ${email.value}`;
  house.innerText = `Casa: ${casas.value}`;

  familia.forEach(radio => {
    if (radio.checked) {
      family.innerText = `Família: ${radio.value}`
    }
  })

  let result = ''
  checkbox.forEach(checkbox => {
    if (checkbox.checked) {
    result += ` ${checkbox.value}`
    }
    marked.innerText = `Matérias: ${result}`;
  })

  nota.forEach(radio => {
    if (radio.checked) {
      rate.innerText = `Avaliação: ${radio.value}`;
    }
  })
  observation.innerText = `Observações: ${textarea.value}`;

  form.innerText = '';
})
=======
// Requisito 20

const textArea = document.getElementById('textarea');
const countText = document.getElementById('counter');

textArea.addEventListener('keyup', () => {
  console.log('tes');
  const x = 500 - textArea.value.length;
  countText.innerText = x;
});
>>>>>>> 4e87e72de8886021d9db2f0e14d68693fa060122
