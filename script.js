// Requisito 3
const buttonLogin = document.getElementById('buttonLogin');
buttonLogin.addEventListener('click', () => {
  const login = document.getElementById('login');
  const password = document.getElementById('password');
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

// Requisito 18
const agreement = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

function checkboxChecked() {
  if (agreement.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
  //   submitBtn.disabled = !agreement.checked;
}
agreement.addEventListener('change', checkboxChecked);

// requisito 20 - contador de caracteres
// Refêrencia para resolução do problema, tivemos ajuda do Julio Filizzola.
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
counter.innerText = textArea.maxLength;
function textAreaFunction() {
  counter.innerText = textArea.maxLength - textArea.value.length;
}
textArea.addEventListener('keyup', textAreaFunction);

// Requisito 21 
const form = document.getElementById('evaluation-form')
const resultForms = document.querySelector('.result-form');

function checkForm(event) {
  event.preventDefault();

  const inputName = document.querySelector('#input-name').value;
  const lastName = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  const house = document.querySelector('#house').value;
  const family = document.querySelector('#family-content').value;
  const content = document.querySelector('#content').value;
  const rate = document.querySelector('#rate').value;
  const coment = document.querySelector('#textarea').value;

  // Name
  const paragraph = document.createElement('p');
  paragraph.innerText = inputName;
  resultForms.appendChild(paragraph);

  // Sobre-Nome
  const paragraph1 = document.createElement('p');
  paragraph1.innerText = lastName;
  resultForms.appendChild(paragraph1);
  

  // Email
  const paragraph2 = document.createElement('p');
  paragraph2.innerText = email;
  resultForms.appendChild(paragraph2);

}
submitBtn.addEventListener('click', checkForm);
