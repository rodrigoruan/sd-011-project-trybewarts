function clickLogin() {
  const email = event.path[2][0].value;
  const password = event.path[2][1].value;

  email === 'tryber@teste.com' && password === '123456'
    ? window.alert('Olá, Tryber!')
    : window.alert('email ou senha inválida');
};

// function validateLogin() { 
//   const loginButton = document.getElementById('login-button');
//   loginButton.addEventListener('click', clickLogin);
// }

// window.onload = function load() {

// };
