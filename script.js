const buttonLogin = document.getElementById('buttonLogin');

buttonLogin.addEventListener('click', () => {
  const inputEmail = document.getElementById('loginEmail').value;
  const inputPasswd = document.getElementById('loginPassword').value;

  if (inputEmail === 'tryber@teste.com' && inputPasswd === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
