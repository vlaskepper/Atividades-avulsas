let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
valorSubtotal.innerText = subtotalInfo.valor;

// ------ VARIAVEIS------------ //

let btnAddProduto01 = document.querySelector("#btn-adicionar-produto-01");
let btnSubProduto02 = document.querySelector("#btn-subtrair-produto-01");
let quantidadeProduto01 = document.querySelector("#quantidade-produto-01");


// ------ FUNÇÕES -------------- //
function adicionarUm() {
  quantidadeProduto01.value = Number(quantidadeProduto01.value) + 1;
  
  subtotalInfo.quantidade ++
  subtotalInfo.valor = (parseFloat(subtotalInfo.valor) + 11.66).toFixed(2)
  
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
  valorSubtotal.innerText = subtotalInfo.valor;

}

function diminuirUm() {
  if (Number(quantidadeProduto01.value)>0) {
    quantidadeProduto01.value = Number(quantidadeProduto01.value) - 1;
    
    subtotalInfo.quantidade --
    subtotalInfo.valor = (parseFloat(subtotalInfo.valor) - 11.66).toFixed(2)
  
    quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
    valorSubtotal.innerText = subtotalInfo.valor;

  } else {
    return;
  }
}

// -------EVENTO --------------//


btnAddProduto01.addEventListener("click",adicionarUm);
btnSubProduto02.addEventListener("click",diminuirUm);