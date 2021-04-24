
function start () {
	
	function validaLogin () {

		var inputEmail = document.querySelector('#email-login');
		var inputSenha = document.querySelector('#password-login');
			
		// let formLogin = document.getElementsByClassName('trybewarts-login')[0]; // Também Funciona
			
		let btnLogar = document.getElementById('btnLogar');

		btnLogar.addEventListener('click', function () {
			
		// formLogin.addEventListener('submit', function () { // Também funciona

			if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
					alert ('Olá, Tryber!');
			} else {
				alert ('Login ou senha inválidos.');
			}
		});
	}

validaLogin ();
}

window.onload = start;