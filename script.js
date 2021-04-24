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
let submitBtn = document.getElementById('submit-btn');
submitBtn.disabled = true;

let seConcorda = document.getElementById('agreement')
seConcorda.addEventListener('click', (event) => {
	if (submitBtn.disabled = false) {
		submitBtn.disabled = true;		
	}
	submitBtn.disabled = false;	
})

// Requisito 20
// https://htmldom.dev/count-the-number-of-characters-of-a-textarea/
let textarea = document.getElementById('textarea');
let counter = document.getElementById('counter');
textarea.addEventListener('input', countLetters)

function countLetters(event){
  let target = event.target;
  let maxLength = target.getAttribute('maxLength');
  let currentLength = target.value.length;

  counter.innerHTML = `${currentLength}/${maxLength}`;  
}




