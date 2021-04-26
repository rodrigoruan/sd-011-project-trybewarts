const loginInput = document.getElementById('id');
const senhaInput = document.getElementById('password');
const button = document.getElementById('submit-button');



button.addEventListener('click', () => {
  if (loginInput.value === 'tryber@teste.com' && senhaInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
