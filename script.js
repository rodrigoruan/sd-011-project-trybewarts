const login = document.querySelector('#login');
const password = document.querySelector('#password');
const buttonSubmit = document.querySelector('#submit');

function loginValidation(inputPassword, inputLogin) {
  if (inputPassword === '123456' && inputLogin === 'tryber@teste.com') {
    alert('Olá, Tryber!');
    return;
  }
  alert('Login ou senha inválidos.');
}

function loginSubmit() {
  loginValidation(password.value, login.value);
}

buttonSubmit.addEventListener('click', loginSubmit);

const submitBtn = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
submitBtn.disabled = true;

function submitEnable() {
  if (agreement.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

agreement.addEventListener('click', submitEnable);
