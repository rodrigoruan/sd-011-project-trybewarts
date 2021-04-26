const formLogin = document.querySelector('.trybewarts-login');
const conteudo = document.querySelector('.conteudo-enviar');
const formAluno = document.querySelector('#evaluation-form');
const inputEmail = document.querySelector('#login');
const inputSenha = document.querySelector('#senha');
const termos = document.querySelector('#agreement');
const botaoEnvia = document.querySelector('#submit-btn');
const textArea = document.querySelector('#textarea');
const tamanhoTextoAtual = document.querySelector('#counter');

// console.log(conteudo);
// console.log(formAluno.elements[7].checked);
// console.log(formAluno.elements);

function verificaLogin(event) {
  event.preventDefault();
  const email = inputEmail.value;
  const senha = inputSenha.value;
  const loginPadrao = 'tryber@teste.com';
  const senhaPadrao = '123456';

  if (email !== loginPadrao || senha !== senhaPadrao) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

function verificaTermos() {
  if (termos.checked) {
    botaoEnvia.disabled = false;
  } else { botaoEnvia.disabled = true; }
}

verificaTermos();

function contaCaracteres() {
  let atual = tamanhoTextoAtual.innerHTML;
  atual = 500;
  tamanhoTextoAtual.innerHTML = atual - textArea.value.length;
}

contaCaracteres();

function pegaInfoNomeEmailCasa() {
  const nomeCompleto = document.createElement('p');
  const email = document.createElement('p');
  const casa = document.createElement('p');

  const nomeSobrenomeForm = `Nome: ${formAluno.elements[0].value} ${formAluno.elements[1].value}`;
  nomeCompleto.innerHTML = nomeSobrenomeForm;
  conteudo.appendChild(nomeCompleto);
  conteudo.insertBefore(nomeCompleto, conteudo.childNodes[0]);

  const emailForm = `Email: ${formAluno.elements[2].value}`;
  email.innerHTML = emailForm;
  conteudo.appendChild(email);
  conteudo.insertBefore(email, conteudo.childNodes[1]);

  const casaForm = `Casa:  ${formAluno.elements[3].value}`;
  casa.innerHTML = casaForm;
  conteudo.appendChild(casa);
  conteudo.insertBefore(casa, conteudo.childNodes[2]);

  return (nomeSobrenomeForm, emailForm, casaForm);
}

function pegaFamilia() {
  const familia = document.createElement('p');

  for (let index = 4; index < 7; index += 1) {
    if (formAluno.elements[index].checked) {
      const familiaForm = `Família:  ${formAluno.elements[index].value}`;
      familia.innerHTML = familiaForm;
      conteudo.appendChild(familia);
      conteudo.insertBefore(familia, conteudo.childNodes[3]);
    }
  }
}

function pegaMaterias() {
  const materias = document.createElement('p');
  const materiasForm = [];

  for (let index = 7; index < 13; index += 1) {
    if (formAluno.elements[index].checked) {
      materiasForm.push(formAluno.elements[index].value);
    }
  }

  const materiasSelecionadas = `Matérias: ${materiasForm.join(', ')}`;

  materias.innerHTML = materiasSelecionadas;
  conteudo.appendChild(materias);
  conteudo.insertBefore(materias, conteudo.childNodes[4]);

  return materiasSelecionadas;
}

function pegaAvaliacao() {
  const avaliacao = document.createElement('p');

  for (let index = 13; index < 23; index += 1) {
    if (formAluno.elements[index].checked) {
      const avaliacaoForm = `Avaliação: ${formAluno.elements[index].value}`;
      avaliacao.innerHTML = avaliacaoForm;
      conteudo.appendChild(avaliacao);
      conteudo.insertBefore(avaliacao, conteudo.childNodes[5]);
    }
  }
}

function pegaComentario() {
  const comentario = document.createElement('p');

  const comentarioForm = `Observações: ${formAluno.elements[23].value}`;
  comentario.innerHTML = comentarioForm;
  conteudo.appendChild(comentario);
  conteudo.insertBefore(comentario, conteudo.childNodes[6]);

  return comentarioForm;
}

formAluno.addEventListener('submit', (event) => {
  event.preventDefault();

  pegaInfoNomeEmailCasa();
  pegaFamilia();
  pegaMaterias();
  pegaAvaliacao();
  pegaComentario();

  for(let index = 1; index < formAluno.children.length; index += 1) {
    formAluno.children[index].innerHTML = '';
  }
  
  //formAluno.innerHTML = '';
  console.log(formAluno);
});

textArea.addEventListener('keyup', contaCaracteres);
termos.addEventListener('click', verificaTermos);
formLogin.addEventListener('submit', verificaLogin);
