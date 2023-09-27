const linkRetorno = document.getElementById("link-retorno");

document.addEventListener("keyup",(e) => {console.log(e)})

document.addEventListener("keyup",(e) => {
  console.log(e.key);
  console.log(e.code);
  
  if (e.code == "Backspace") {
    linkRetorno.click();
  }
})