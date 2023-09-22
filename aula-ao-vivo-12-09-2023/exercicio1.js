const email = "jeff@email.com";
const id = 1234;

let emailUsuario = "jeff@email.com";
let idUsuario = 1234;

if (emailUsuario === email || idUsuario === id) {
    console.log("Deseja mudar a senha?")
} else {
    console.log("Usuario sem autorização")
}

const emailJoao = "joao123@email.com"
let idJoao = 2342;
const adminJoao = false;

if (email === emailJoao && idJoao === id) {
    console.log("Por favor, insira sua nova senha")
} else {
    console.log("Username/senha incorretos")
}

if (adminJoao) {
    console.log("Bem-vindo(a) à área de administrador")
} else {
    console.log("Você não pode acessar esta parte do sistema")
}