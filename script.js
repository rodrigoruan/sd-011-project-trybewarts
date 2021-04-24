function start() {
  function validaLogin() {
    const inputEmail = document.querySelector('#email-login');
    const inputSenha = document.querySelector('#password-login');
    // let formLogin = document.getElementsByClassName('trybewarts-login')[0]; // Também Funciona
    const btnLogar = document.getElementById('btnLogar');
    btnLogar.addEventListener('click', () => { // formLogin.addEventListener('submit', function () { // Também funciona
      if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
        alert('Olá, Tryber!');
      } else {
        alert('Login ou senha inválidos.');
      }
    });
  }
  validaLogin();
}
window.onload = start;
