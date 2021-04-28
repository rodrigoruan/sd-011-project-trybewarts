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
// const form = document.getElementById('evaluation-form');
// const resultForms = document.querySelector('.result-form');

function checkForm(event) {
  event.preventDefault();
  const name = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const house = document.getElementById('house').value;
  const family = document.getElementById('family').value;
  const content = document.getElementById('content').value;
  const rate = document.getElementById('rate').value;
  const obs = document.getElementById('textarea').value;
  const formsPai = document.getElementById('evaluation-form');
  const elementP = document.createElement('p');
  elementP.classList.add('form-content');
  formsPai.appendChild(elementP);
  elementP.innerHTML = `Nome: ${name} ${lastName}<br/>
  Email: ${email}<br/>
  Casa: ${house}<br/>
  Família: ${family}<br/>
  Matérias: ${content}<br/>
  Avaliação: ${rate}<br/>
  Observações: ${obs}`;
}
submitBtn.addEventListener('click', checkForm);
