/* Requisito 3 */
document.getElementById('loginButton').addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const trybeEmail = 'tryber@teste.com';
  const trybeSenha = '123456';
  if (email === trybeEmail && senha === trybeSenha) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

// Requisito 18
const submitBtn = document.getElementById('submit-btn');
submitBtn.disabled = true;
const seConcorda = document.getElementById('agreement');
seConcorda.addEventListener('click', () => {
  if (seConcorda.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

// Requisito 20
// https://htmldom.dev/count-the-number-of-characters-of-a-textarea/
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');
counter.innerHTML = '500';

function countLetters() {
  const comments = textarea.value.length;
  const maxLength = textarea.getAttribute('maxLength');
  const currentLength = maxLength - comments;
  counter.innerHTML = currentLength;
}
textarea.addEventListener('input', countLetters);

/* Requisito 21 */

