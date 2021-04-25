const formLogin = document.getElementsByClassName('trybewarts-login');

function validar() {
  const nome = document.getElementById('nome-login');
  const pass = document.getElementById('pass-login');

  if (nome.value === 'tryber@betrybe.com' && pass.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos');
  }
}

// but n tá funcionando
formLogin.addEventListener('submit', validar);
