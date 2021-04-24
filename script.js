const email = document.getElementById("login");
const senha = document.getElementById("senha");
const botao = document.getElementById("button");

botao.addEventListener("click", () => {
  if (email.value === "tryber@teste.com" && senha.value === "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Login ou senha inválidos.");
  }
});

const checked = document.getElementById("agreement");
const enviar = document.getElementById("submit-btn");
enviar.disabled = true;

checked.addEventListener("click", () => {
  if ((checked.value = "checked")) {
    enviar.disabled = false;
  } else {
    enviar.disabled = true;
  }
});
