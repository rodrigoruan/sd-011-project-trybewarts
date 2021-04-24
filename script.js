function loginAlert() {
  const loginButton = document.querySelector('#login-button');
  loginButton.addEventListener('click', () => {
    const loginEmail = document.querySelector('#email-form').value;
    const loginPassword = document.querySelector('#password-form').value;
    if (loginEmail === 'tryber@teste.com' && loginPassword === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}
loginAlert();
