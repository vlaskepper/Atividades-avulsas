// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

/* Mostrar popup de campo obrigatório
usernameInput.addEventListener("focus", function(){
    usernameLabel.classList.add("required-popup");
})

// Ocultar popup de campo obrigatório
usernameInput.addEventListener("blur", function (){
    usernameLabel.classList.remove("required-popup");
})
*/

// Validar valor do input
usernameInput.addEventListener("change", function (e){
    let valor = e.target.value;
    if (valor.length == 0) {
        usernameInput.classList.remove("correct", "error");
        usernameHelper.classList.remove("visible");
    } 
    else if (valor.length < 3) {
        usernameInput.classList.remove("correct");
        usernameInput.classList.add("error");
        usernameHelper.classList.add("visible");
        usernameHelper.innerText = "Seu username deve ter 3 ou mais caracteres"
    }  
    else {
        usernameInput.classList.remove("error");
        usernameHelper.classList.remove("visible");
        usernameInput.classList.add("correct");
    }
})

// Validar Email

let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

function mostrarPopup(input, label) {
    //Mostrar o popup
    input.addEventListener("focus", () => {
        label.classList.add("required-popup");
    })

    //Ocultar o popup
    input.addEventListener("blur", () => {
        label.classList.remove("required-popup");
    })
    
}

mostrarPopup(emailInput,emailLabel);
mostrarPopup(emailInput,usernameLabel);

emailInput.addEventListener("change", function (e){
    let valor = e.target.value;
    if (valor.length == 0) {
        emailInput.classList.remove("correct", "error");
        emailHelper.classList.remove("visible");
    } 
    else if (!(valor.includes("@") && (valor.includes(".com") || valor.includes(".gov") ))) {
        emailInput.classList.remove("correct");
        emailInput.classList.add("error");
        emailHelper.classList.add("visible");
        emailHelper.innerText = "E-mail inválido"
    }  
    else {
        emailInput.classList.remove("error");
        emailHelper.classList.remove("visible");
        emailInput.classList.add("correct");
    }
})