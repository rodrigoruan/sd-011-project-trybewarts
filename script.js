// Variables

const buttonLogin = document.getElementById('button-login');
const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');
const buttonSubmit = document.getElementById('submit-btn');
const checkBox = document.getElementById('agreement');
const evaluationForm = document.getElementById('evaluation-form');
// Functions

function login() {
  if (loginInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

// buttonLogin.addEventListener('click', (e) => {
//   let formdata = new FormData(evaluationForm)
// });
// buttonSubmit.addEventListener('click', submitButton);
