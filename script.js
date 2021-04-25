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
