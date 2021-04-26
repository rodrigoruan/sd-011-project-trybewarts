const elementLogin = document.getElementById('login');
const elementSenha = document.getElementById('senha');
const elementButtonLogin = document.getElementById('button-login');

function erroLoginFunction() {
    if (elementLogin.value !== 'tryber@teste.com' || elementSenha.value !== '123456'){
        alert('Login ou senha inválidos');
    } else {
        alert('Olá, Tryber!')
    }
}

elementButtonLogin.addEventListener('click', erroLoginFunction);
