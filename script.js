/* Requisito 3 */
document.getElementById('loginButton').addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const trybeEmail = 'tryber@teste.com';
  const trybeSenha = '123456';
  if (email === trybeEmail && senha === trybeSenha) {
    alert('Ola, Tryber!');
  } else {
    alert('Login ou Senha invalidos.');
  }
});

let submitBtn = document.getElementById('submit-btn');
submitBtn.disabled = true;

let seConcorda = document.getElementById('agreement')
seConcorda.addEventListener('click', (event) => {
	if (submitBtn.disabled = false) {
		submitBtn.disabled = true;		
	}
	submitBtn.disabled = false;	
})



