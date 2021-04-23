const buttonLogin = document.getElementById('btn-login');

buttonLogin.addEventListener('click', () => {
  const inputLogin = document.getElementById('login');
  const inputSenha = document.getElementById('senha');
  if (inputLogin.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.')
  }
})