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

const checkEnable = document.getElementById('agreement');
checkEnable.addEventListener('click', () => {
  const inputbutton = document.getElementById('submit-btn');
  if (checkEnable.checked) {
    return inputbutton.removeAttribute('disabled');
  }
});

const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const maxlength = textArea.getAttribute('maxlength');
textArea.addEventListener('keyup', () => {
  counter.innerText = maxlength - textArea.value.length;
});
