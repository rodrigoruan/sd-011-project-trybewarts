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
  if (!submitBtn.disabled) {
    submitBtn.disabled = true;
  }
  submitBtn.disabled = false;
});

// Requisito 20
// https://htmldom.dev/count-the-number-of-characters-of-a-textarea/
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');

function countLetters(event) {
  const eventTarget = event.target;
  const maxLength = eventTarget.getAttribute('maxLength');
  const currentLength = eventTarget.value.length;
  counter.innerHTML = `${currentLength}/${maxLength}`;
}

textarea.addEventListener('input', countLetters);
