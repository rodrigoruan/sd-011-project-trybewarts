function start() {
  function validaEnviar() { // Requisito 18
    const btnEnviar = document.getElementById('submit-btn');
    btnEnviar.disabled = true;
    const agree = document.getElementById('agreement');
    agree.checked = false;

    agree.addEventListener('change', (event) => {
      if (event.target.checked) {
        btnEnviar.disabled = false;
      } else {
        btnEnviar.disabled = true;
      }
    });
  }

  function validaLogin() { // Requisito 3.6
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
  validaEnviar();
}
window.onload = start;
