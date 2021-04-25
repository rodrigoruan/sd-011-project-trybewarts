// req 3 alerta ao logar
const login = document.getElementById('login');
const password = document.getElementById('senha');
const buttonEmail = document.getElementById('enterButton');

function loginTrybewarts() {
  const emailTest = 'tryber@teste.com';
  const passwordTest = '123456';
  if (login.value === emailTest && password.value === passwordTest) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

buttonEmail.addEventListener('click', loginTrybewarts);

const agreementChecked = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');

function check() {
  if (agreementChecked.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}
agreementChecked.addEventListener('change', check);
