const emailLogin = document.getElementById('email-login').value;
const password = document.getElementById('password-login').value;

function verificaDados() {
  const btnLogin = document.getElementById('btn-login');
  btnLogin.addEventListener('click', () => {
    if ((emailLogin === 'tryber@teste.com') && (password === 123456)) {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}

verificaDados();
