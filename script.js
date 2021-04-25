let buttonLogin = document.getElementById('logar');
function validate() {
  let fnome = document.getElementById('login');
  let fsenha = document.getElementById('senha');

  if (fnome.value === 'tryber@teste.com' && fsenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

buttonLogin.addEventListener('click', validate);