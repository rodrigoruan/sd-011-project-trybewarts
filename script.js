/* const loginButton = document.getElementById('login-button');
loginButton.addEventListener('click', () => {
  console.log('oi');
});
 */
/* const loginButton = document.getElementById('login-button'); */

function loginAlert() {
  const loginButton = document.getElementById('login-button');
  const loginEmail = document.getElementById('email-form').value;
  const loginPassword = document.getElementById('password-form').value;
  loginButton.addEventListener('click', () => {
    if (loginEmail === 'tryber@teste.com' && loginPassword === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}
loginAlert();
