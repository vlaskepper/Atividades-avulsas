const h2 = document.querySelector("h2");

h2.style.color = "blue";
h2.style.fontSize = "40px";


const botao = document.querySelector("button");

botao.style.borderRadius = "8px";
botao.style.border = "none";
botao.style.color = "white";
botao.style.backgroundColor = "black";

const userNameInput = document.querySelector("#login-usuario");
userNameInput.classList.add("correct");

const errorMensagem = document.querySelector(".senha-incorreta");
errorMensagem.classList.add("visible");

const senhaIncorretaInput = document.querySelector("#login-senha");
senhaIncorretaInput.classList.add("error");