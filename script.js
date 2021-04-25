function validar() {
 const formLogin = document.getElementById('login');
 const nome = document.getElementById('nome-login');
 const pass = document.getElementById('pass-login');

    if (nome.value === 'tryber@betrybe.com' && pass.value === '123456') {
        alert('Olá, Tryber!');
    } else {
        alert('Login ou senha inválidos');
    }
}

