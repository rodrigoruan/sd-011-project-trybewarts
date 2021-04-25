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
// Refêrencia para resolução do problema
// https://pt.stackoverflow.com/questions/25753/como-fazer-um-contador-de-caracteres-de-uma-textarea
// const textArea = document.getElementById('textarea');
function limiteTextArea(textArea) {
  const quant = 500;
  const total = textArea.length;
  if (total <= quant) {
    const resto = quant - total;
    document.getElementById('counter').innerHTML = resto;
  } else {
    document.getElementById('textarea').value = textArea.substr(0, quant);
  }
}
limiteTextArea();
