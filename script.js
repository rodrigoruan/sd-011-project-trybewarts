const login = document.getElementById('login-value');
const password = document.getElementById('password-value');
const enter = document.getElementById('enter');

function clickenter() {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

enter.addEventListener('click', clickenter);

const checkboxAgreement = document.getElementById('agreement');
const btnAgreement = document.getElementById('submit-btn');

function checkAgreement() {
  if (checkboxAgreement.checked === true) {
    btnAgreement.removeAttribute('disabled');
  } else {
    btnAgreement.setAttribute('disabled', '');
  }
}

checkboxAgreement.addEventListener('click', checkAgreement);
