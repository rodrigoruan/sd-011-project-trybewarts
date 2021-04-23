function login(event) {
  const usuario = document.getElementsByName('Login')[0].value;
  const senha = document.getElementsByName('Senha')[0].value;
  if (usuario === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos');
  }
};
