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

const agreement = document.getElementById('agreement');

agreement.addEventListener('change', () => {
  if (agreement.checked) {
    document.getElementById('submit-btn').disabled = false;
  } else {
    document.getElementById('submit-btn').disabled = true;
  }
});

const comment = document.getElementById('textarea');

function caracteres() {
  const count = document.getElementById('counter');
  const commentLength = comment.value.length;
  count.innerText = 500 - commentLength;
}

comment.addEventListener('keyup', caracteres);
