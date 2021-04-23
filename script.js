// // get login input
// let loginInput = document.getElementById('login');
// // get password input
// let passwordInput = document.getElementById('password');

function validateTryber () {
  // get login input
  let loginInput = document.getElementById('login');
  // get password input
  let passwordInput = document.getElementById('password');
  if (loginInput.value !== 'tryber@teste.com' && passwordInput.value !== '123456') {
    alert('Login ou senha inválidos.'); 
  } else {
    alert('Olá, Tryber!')
  }
}