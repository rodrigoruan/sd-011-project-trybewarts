const submit = document.getElementById("submit"); // variável recebendo o botão submit
const pass = document.getElementById("pass"); // variavel recebendo o password

submit.addEventListener("click", function checkEmail() {
  const email = document.getElementById("email"); // Variavel recebendo o email
  let insertedEmail = email.value;
  window.alert(email.value); //default = email 'tryber@teste.com' senha '123456'
});

