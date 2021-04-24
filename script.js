const inputLogin = document.getElementById('login');
const inputSenha = document.getElementById('senha');
const buttonEnviar = document.getElementById('enviar');

buttonEnviar.addEventListener('click', () => {
  if (inputLogin.value !== 'tryber@teste.com' || inputSenha.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});
