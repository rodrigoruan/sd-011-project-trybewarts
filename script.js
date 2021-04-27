// Criar um addEventListener no botão LOGAR.
const loginButton = document.getElementById("login-button");
// Dentro da funçao que é executada ao clicar no botão, deve-se verificar se o email.
// que esta no input de email é igual a tryber@teste.com e senha igual a 123456.
loginButton.addEventListener("click", () => {
  if (
    document.getElementById("login").value !== "tryber@teste.com" &&
    document.getElementById("senha").value !== "123456"
  ) {
    alert("Login ou senha inválidos.");
  } else {
    alert("Olá, Tryber!");
  }
});

// Criar constante que recebe o botao Submit
const agreementCheck = document.getElementById("agreement");
const submitButton = document.getElementById("submit-btn");
agreementCheck.addEventListener("click", () => {
  if (document.getElementById("agreement").checked === true) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

// Contador
const counter = document.getElementById("counter");
const textArea = document.getElementById("textarea");
let tamanho = 500;
textArea.addEventListener("keyup", () => {
  // Diminuir do counter o tamanho atual do textos
  tamanho = 500 - textArea.value.length;
  counter.innerHTML = tamanho;
});

<<<<<<< HEAD
// guardar variáveis (dados do formulário)
// Apagar formulário ao recarregar página
// Imprimir informações guardadas no formulário
const evaluationForm = document.forms.namedItem("evaluation-form");
evaluationForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let nome = document.getElementById("input-name").value;
  let sobrenome = document.getElementById("input-lastname").value;
  let email = document.getElementById("input-email").value;
  let casa = document.getElementById("house").value;
  let familia = document.querySelector('input[name="family"]:checked').value;
  let materias = "";
  for (var index = 0; index < 6; index++) {
    if (document.getElementsByClassName("subject")[index].checked) {
      // if verifica se a propriedade checked do elemento atual da lista de elementos que possuem a classe (subject) está ativa ou seja,  true
      // se for então
      materias += document.getElementsByClassName("subject")[index].value + " ";
    }
  }
  let avaliacao = document.querySelector('input[name="rate"]:checked').value;
  let observacoes = document.getElementById("textarea").value;

  removeForm();

  console.log(materias);
  evaluationForm.innerHTML = `Nome: ${nome} ${sobrenome} <br>
  Email: ${email} <br>
  Casa: ${casa} <br>
  Família: ${familia} <br>
  Matérias: ${materias} <br>
  Avaliação: ${avaliacao} <br>
  Observações: ${observacoes}`;
});

function removeForm() {
  for (let i = 0; i < 5; i += 1) {
    evaluationForm.lastElementChild.remove();
  }
}
=======
function materias(escolhas) {
  let retorno = '';
  escolhas.forEach((element) => {
    if (retorno !== '') {
      retorno += ', ';
    }
    retorno += element.value;
  });
  return retorno;
}

submitButton.addEventListener('click', () => {
  const name = document.getElementById('input-name').value;
  const lastname = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const house = document.getElementById('house').value;
  const familia = document.querySelector('input[name="family"]:checked').value;
  const materia = materias();
  const avalia = document.querySelector('input[name="rate"]:checked').value;
  const obs = document.getElementById('textarea').value;

  document.querySelector('#labelNome').innerHTML = `Nome: ${name}`` ${lastname}`;
  document.querySelector('#labelEmail').innerHTML = `Email: ${email}`;
  document.querySelector('#labelCasa').innerHTML = `Casa: ${house}`;
  document.querySelector('#labelFamilia').innerHTML = `Família: ${familia}`;
  document.querySelector('#labelMaterias').innerHTML = `Matérias: ${materia}`;
  document.querySelector('#labelAvaliacao').innerHTML = `Avaliação: ${avalia}`;
  document.querySelector('#labelObs').innerHTML = `Observações: ${obs}`;
});
>>>>>>> 3bab44424fd3b62764bb0944ec20ffe7ae0879a3
