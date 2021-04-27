const loginButton = document.querySelector('#submit');
const loginName = document.querySelector('#login');
const loginsPass = document.querySelector('#passworld');
loginButton.addEventListener('click', () => {
  if (loginName.value === 'tryber@teste.com' && loginsPass.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
