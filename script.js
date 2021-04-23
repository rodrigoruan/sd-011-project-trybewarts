const btnLogin = document.getElementById('Login-btn');
const login = document.getElementById('Login');
const senha = document.getElementById('Senha');

btnLogin.addEventListener('click', (evt) => {
  evt.preventDefault();

  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
    console.log(login.value);
    console.log(senha.value);
  }
});

// Requisito 18

const check = document.getElementById('agreement');
const cadButton = document.getElementById('submit-btn');

check.addEventListener('click', () => {
  cadButton.toggleAttribute('disabled');
});
