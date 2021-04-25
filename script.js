const buttonLogin = document.getElementById('logar');
function validate() {
  const fnome = document.getElementById('login');
  const fsenha = document.getElementById('senha');

  if (fnome.value === 'tryber@teste.com' && fsenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

buttonLogin.addEventListener('click', validate);
