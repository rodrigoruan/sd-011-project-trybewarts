const btnlogin = document.getElementById('btnlogin');

btnlogin.addEventListener('click', () => {
  const login = document.querySelector('[name="login"]').value;
  const password = document.querySelector('[name="password"]').value;
  if (login === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
