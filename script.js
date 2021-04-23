const buttonLogin = document.getElementById("buttonLogin");
buttonLogin.addEventListener("click", () => {
  const login = document.getElementById("login");
  const password = document.getElementById("password");
  console.log(login.value);
  console.log(password.value);
  if (login.value === "tryber@teste.com" && password.value === "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Login ou senha inválidos.");
  }
});
