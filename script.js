function validateLogin() {
  const login = document.getElementById('input-login');
  const pass = document.getElementById('input-password');
  if (login.value === 'tryber@teste.com' && pass.value === '123456') {
    return true;
  }  
}


function loginChecked() {
  const loginButton = document.getElementById('button-header');
  loginButton.addEventListener('click', function () {
    if (!validateLogin) {
     alert('Login ou senha inválidos.'); 
    }
    alert('Olá, Tryber!');
  });
};

loginChecked();
