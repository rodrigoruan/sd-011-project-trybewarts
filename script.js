// const formLogin = document.getElementsByClassName('trybewarts-login');
const btnLogin = document.getElementById('btn-login');
function validar() {
  const nome = document.getElementById('nome-login');
  const pass = document.getElementById('pass-login');

  if (nome.value === 'tryber@teste.com' && pass.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

// but n tá funcionando
btnLogin.addEventListener('click', validar);
