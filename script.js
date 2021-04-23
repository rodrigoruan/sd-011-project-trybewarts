const login = document.querySelector("#login");
const password = document.querySelector("#password");
const buttonSubmit = document.querySelector("#submit");

function loginValidation(senha, login) {
  if (senha !== 123456 && login !== "tryber@teste.com") {
    return alert("Login ou senha inválidos");
  }
  alert("Olá Tryber");
}

function loginSubmit() {
  loginValidation(password.value, login.value);
}

buttonSubmit.addEventListener("click", loginSubmit);

console.log("oi");
