// validar login
function validateEmail() {
  const emailInput = document.getElementById('login');

  if (emailInput.value === 'tryber@teste.com') {
    return true;
  }
  return false;
}

// validar senha
function validatePassword() {
  const passwordInput = document.getElementById('password');

  if (passwordInput.value === '123456') {
    return true;
  }
  return false;
}

// validar login e senha mediante click
function validateAccess() {
  const loginButton = document.getElementById('login-button');

  loginButton.addEventListener('click', () => {
    if (validateEmail() && validatePassword()) {
      window.alert('Olá, Tryber!');
    } else {
      window.alert('Login ou senha inválidos.');
    }
  });
}

window.onload = function start() {
  validateAccess();
};
