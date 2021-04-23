const checkboxAgreement = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');

function agreementCheck() {
	if(checkboxAgreement.checked === false){
		submitButton.disabled = true;
	} else {
		submitButton.disabled = false;
	}
}

checkboxAgreement.addEventListener('click', agreementCheck);
