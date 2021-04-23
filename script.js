const email = document.getElementById("login");
const senha = document.getElementById("senha");
const botao = document.getElementById("button");

botao.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
