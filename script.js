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
let textarea = document.getElementById('textarea');
let counter = document.getElementById('counter');

textarea.addEventListener('input', countLetters);
function countLetters(event){  
  let target = event.target;
  let maxLength = target.getAttribute('maxLength');
  let currentLength = target.value.length;
  let numShowing = maxLength - currentLength;

  if(textarea.value.length === 0) {
    counter.innerHTML = `${maxLength}`;
  } else {
    counter.innerHTML = `${numShowing}`;  
  }
}


