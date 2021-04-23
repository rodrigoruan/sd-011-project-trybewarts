/* Requisito 3 */
document.getElementById('loginButton').addEventListener('click', () => {
  const email = document.getElementById('email');
	const senha = document.getElementById('senha');
  const trybeEmail = 'tryber@teste.com';
  const trybeSenha = 123456;
	console.log(email);

  if (email === trybeEmail && senha === trybeSenha) {
		alert('Ola, Tryber!');
  } else{
	alert('Login ou Senha invalidos.')}
})
