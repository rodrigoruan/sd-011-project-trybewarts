<<<<<<< HEAD


=======
const login = document.querySelector('#login');
const password = document.querySelector('#password');
const buttonSubmit = document.querySelector('#submit');

function loginValidation(imputPassword, imputLogin) {
  if (imputPassword !== 123456 && imputLogin !== 'tryber@teste.com') {
    return alert('Login ou senha inválidos');
  }
  alert('Olá Tryber');
}

function loginSubmit() {
  loginValidation(password.value, login.value);
}

buttonSubmit.addEventListener('click', loginSubmit);
>>>>>>> cc7a145c37aac905c7d6bea7b46f8213d7a12af5
