const submitBtn = document.getElementById('submit-btn');

// Ativa o botão
function ActivateButton() {
  submitBtn.disabled = false;
}

// Desativa o botão
function DeactivateButton() {
  submitBtn.disabled = true;
}

// Checa se o usuário concorda com os termos ticando a checkbox
function CheckAgreement() {
  const CheckAgreement = document.getElementById('agreement');
  CheckAgreement.addEventListener('change', () => {
    if (CheckAgreement.checked) {
      ActivateButton();
    } else {
      DeactivateButton();
    }
  });
}


// Função que chama todas as funções do site
function Onload() {
  //Seta o valor inicial do botão Enviar como desativado
  submitBtn.disabled = true; 
  CheckAgreement();
}

// Ao carregar toda a página, chama a função responsável por todas as funções
window.onload = Onload;
