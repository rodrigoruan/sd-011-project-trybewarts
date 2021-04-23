const login = document.querySelector("#login");
const password = document.querySelector("#password");
const join = document.querySelector("#join");

join.addEventListener("click", (e) => {
  e.preventDefault();
  let validLogin = login.value;
  let validPassword = password.value;
  if (validLogin === "tryber@teste.com" && validPassword === "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Login ou senha inválidos.");
  }
  login.value = "";
  password.value = "";
});
