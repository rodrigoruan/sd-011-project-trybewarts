<<<<<<< HEAD
=======
// function validateLogin() {
//   const login = document.getElementById('input-login');
//   const pass = document.getElementById('input-password');
//   if (login.value === 'tryber@teste.com' && pass.value === '123456') {
//     return true;
//   }
// }

// function loginChecked() {
//   const loginButton = document.getElementById('button-header');
//   loginButton.addEventListener('click', () => {
//     if (!validateLogin) {
//       alert('Login ou senha inválidos.');
//     }
//     alert('Olá, Tryber!');
//   });
// }

// loginChecked();
const login = document.querySelector('#input-login');
const pass = document.querySelector('#input-password');

function validateLogin() {
  if (login.value !== 'tryber@teste.com' && pass.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

const loginButton = document.querySelector('#button-header');
loginButton.addEventListener('click', validateLogin);
>>>>>>> ac8efc138ba87e1d8f642036a50470bc2c871060
