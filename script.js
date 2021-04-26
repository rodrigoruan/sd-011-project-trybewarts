// Variables
// const header = document.querySelector('header');
const buttonLogin = document.getElementById('button-login');
const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submit-btn');
const agree = document.getElementById('agreement');
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
  }
});

// adds text area counter
function addCounter() {
  const textArea = document.getElementById('textarea');
  textArea.addEventListener('keyup', (e) => {
    const counter = document.getElementById('counter');
    counter.innerHTML = `${500 - e.target.value.length} caracteres restantes`;
  });
}
addCounter();
