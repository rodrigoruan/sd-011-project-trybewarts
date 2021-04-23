const loginUser = 'tryber@teste.com';
const passwordUser = '123456';

const btnLogin = document.getElementById('login-button');

function checkInput(value, data) {
  let check = false;
  if (value === data) {
    check = true;
  }
  return check;
}

btnLogin.addEventListener('click', () => {
  const loginInput = document.getElementById('input-login').value;
  const passwordInput = document.getElementById('input-senha').value;
  const dataUser = loginUser + passwordUser;
  const dataInput = loginInput + passwordInput;
  const checkData = checkInput(dataUser, dataInput);
  if (checkData === true) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
