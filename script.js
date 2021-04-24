function alerta() {
  const getButton = document.getElementById('button1');
  const getEmail = document.getElementById('email');
  const getSenha = document.getElementById('senha');

  getButton.addEventListener('click', () => {
    if (getEmail.value === 'tryber@teste.com' && getSenha.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}
alerta();
