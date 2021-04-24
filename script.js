const login = document.getElementById('login');
const senha = document.getElementById('senha');
const button = document.querySelector('.entrar');
const chkAcept = document.getElementById('agreement');
const btnSubmt = document.getElementById('submit-btn');

button.addEventListener('click', () => {
  if (login.value !== 'tryber@teste.com' || senha.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

chkAcept.addEventListener('click', (event) => {
  if (event.target.checked === true) {
    btnSubmt.disabled = false;
  } else {
    btnSubmt.disabled = true;
  }
});
