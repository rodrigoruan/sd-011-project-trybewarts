let login = document.getElementById('login-value');
let password = document.getElementById('password-value');
let enter = document.getElementById('enter')

enter.addEventListener('click',function(params) {  
if (login.value == 'tryber@teste.com' && password.value == '123456') {
    alert('Olá, Tryber!')  
} else {
    alert('Login ou senha inválidos.')
}})