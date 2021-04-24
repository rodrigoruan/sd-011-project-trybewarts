window.onload = function onloadFunction() {
  const submitBtn = document.getElementById('submit-btn');
  submitBtn.disabled = true;
};

const email = document.querySelector('#email');
const password = document.querySelector('#password');
const loginButton = document.querySelector('#login-button');
const checkMark = document.getElementById('agreement');

function checkEmail() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Login ou senha inválidos.');
  }
}

loginButton.addEventListener('click', checkEmail);

function checkBox() {
  document.getElementById('agreement').onclick = function verifyChange() {
    const submitBtn = document.getElementById('submit-btn');
    if (checkMark.checked) {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  };
}

checkBox();
