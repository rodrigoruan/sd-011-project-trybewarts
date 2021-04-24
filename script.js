// // get submit button
const sendForm = document.getElementById('send-form');

sendForm.addEventListener('click', () => {
  // get login input
  const loginInput = document.getElementById('login');
  // get password input
  const passwordInput = document.getElementById('password');
  if (loginInput.value !== 'tryber@teste.com' || passwordInput.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});
