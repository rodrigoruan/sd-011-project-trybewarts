function login() {
    const email = document.querySelector('#email')

    if (email.value == "" ||
        email.value.indexOf('@') == -1 ||
        email.value.indexOf('.') == -1) {   
        return false;
    }
}
    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    const button = document.querySelector('#button')
    const senha = document.querySelector('#senha')
    
    button.addEventListener('click', () => {
     if (login()=== true) {
     alert('invalido')
     }
    })
