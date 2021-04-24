const login = document.getElementById('login');
const password = document.getElementById('password');
const button = document.getElementById('btn-input');

function getInput() {
  if ((login.value === 'tryber@teste.com') && (password.value == '123456')) {
    alert("Olá, Tryber!");
  } else {
    alert("Login ou senha inválidos.");
  }
}
button.addEventListener('click', getInput);
