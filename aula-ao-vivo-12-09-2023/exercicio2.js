let usuario = {
    id: 5,
    nome: "Vinícius",
    email: "vinicius@email.com",
    admin: true
}

// Notação de ponto

console.log(usuario.id);

//Notação array

let idArray = usuario["nome"];
console.log(idArray)

usuario.id = 7;

console.log(usuario.id);