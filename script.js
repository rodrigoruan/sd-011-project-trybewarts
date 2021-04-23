const loginUser = document.querySelector('.login');
const passUser = document.querySelector('.senha')
const loginBtn = document.querySelector('.acesso')

loginBtn.addEventListener('click', function(e){
    console.log(loginUser.value)
    console.log(passUser.value)

    if (loginUser.value === 'tryber@betrybe.com' && passUser.value === '123456'){
        alert('Olá, Tryber!');
    } else {
        alert('Login ou senha inválidos')
    }
});