/** Verifica áreas de login */
const loginButton = document.querySelector('#login-btn');
const inputUser = document.querySelector('#login');
const inputPass = document.querySelector('#pass');

loginButton.addEventListener('click', () => {
  if (inputUser.value !== 'tryber@teste.com' && inputPass.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

/** Habilita botão de enviar ao clicar na checkbox */
document.querySelector('#submit-btn').disabled = true;
const agreeCheck = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');

agreeCheck.addEventListener('change', () => {
  if (agreeCheck.checked === false) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
});
