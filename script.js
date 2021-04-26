const emailLogin = document.getElementById('email-login');
const password = document.getElementById('password-login');

function verificaDados() {
  const btnLogin = document.getElementById('btn-login');
  btnLogin.addEventListener('click', () => {
    if ((emailLogin.value === 'tryber@teste.com') && (password.value === '123456')) {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}
verificaDados();

function caracteresTextArea() {
  const textArea = document.getElementById('textarea');
  const counter = document.getElementById('counter');
  textArea.addEventListener('keyup', () => {
    counter.innerText = 500 - (textArea.value.length);
  });
}
caracteresTextArea();

function habilitaEnvio() {
  const checkbox = document.getElementById('agreement');
  checkbox.addEventListener('change', () => {
    const btnEnvia = document.getElementById('submit-btn');
    btnEnvia.removeAttribute('disabled');
  });
}

habilitaEnvio();
