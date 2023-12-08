const inputEmail = document.querySelector('input').value
const main = document.querySelector('.main')
const final = document.querySelector('.final')
const container = document.querySelector('.container')

function validateEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

function testeInput() {
    const email = document.querySelector('input').value
    const emailFinal = document.querySelector('.final-email')
    
    if (validateEmail(email)) {
        final.style.display = "block"
        main.style.display = "none"
        container.style.width = "400px"
        container.style.height = "380px"
        
        emailFinal.innerHTML = `A confirmation email has been sent to ${email}.
        Please open it and click the button inside to confirm your subscription.`
    } else {
        alert("Please insert a valid email.")
    }    
}

function returnToMain() {
    final.style.display = "none"
    main.style.display = "flex"
    container.style.width = "700px"
    container.style.height = "450px"
}