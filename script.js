const emailLogin = document.getElementById('email-login');
const password = document.getElementById('password-login');

function verificaDados() {
  const btnLogin = document.getElementById('btn-login');
  btnLogin.addEventListener('click', () => {
    if ((emailLogin.value == 'tryber@teste.com') && (password.value == '123456')) {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}

verificaDados();
