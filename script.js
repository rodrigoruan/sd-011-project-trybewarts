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

agreement.addEventListener('change', checkboxChecked);

function checkboxChecked() {
  if (agreement.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
  //   submitBtn.disabled = !agreement.checked;
}
