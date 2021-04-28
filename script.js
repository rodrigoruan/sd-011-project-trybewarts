const loginButton = document.querySelector('#submit');
const loginName = document.querySelector('#login');
const loginsPass = document.querySelector('#passworld');
const agree = document.querySelector('#agreement');
const sbtButton = document.querySelector('#submit-btn');
window.onload = () => {
  sbtButton.disabled = true;
};
loginButton.addEventListener('click', () => {
  if (loginName.value === 'tryber@teste.com' && loginsPass.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
agree.addEventListener('change', () => {
  if (agree.checked === true) {
    sbtButton.disabled = false;
  } else {
    sbtButton.disabled = true;
  }
});
