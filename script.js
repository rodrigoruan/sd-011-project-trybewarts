function login() {
  const usuario = document.getElementsByName('Login')[0].value;
  const senha = document.getElementsByName('Senha')[0].value;
  console.log(usuario);
  if (usuario === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

const buttonLogin = document.querySelector('.btn-login');
buttonLogin.addEventListener('click', login);
